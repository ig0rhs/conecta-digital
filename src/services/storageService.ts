import {
  UserProgress,
  AssessmentResult,
  QuizAttempt,
  PracticalActivityState
} from '../types';
import { MODULES_DATA } from '../data/modulesData';

const PROGRESS_STORAGE_KEY = 'conecta_digital_user_progress_v2';
const LEGACY_PLATFORM_KEY = 'conecta_digital_platform_v2';

function createDefaultProgress(): UserProgress {
  return {
    completedModuleIds: [],
    inProgressModuleIds: [],
    completedLessonIds: [],
    completedActivityIds: [],
    activityAnswers: {},
    currentModuleId: 'modulo-1',
    lastVisitedAt: new Date().toISOString(),
    finalAssessmentResult: null,
    quizAttempts: {}
  };
}

type ProgressChangeListener = (progress: UserProgress) => void;
const progressListeners = new Set<ProgressChangeListener>();

export function subscribeToProgress(listener: ProgressChangeListener): () => void {
  progressListeners.add(listener);
  return () => {
    progressListeners.delete(listener);
  };
}

function notifyListeners(progress: UserProgress): void {
  progressListeners.forEach((listener) => listener(progress));
}

export function getStoredProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as UserProgress;
      if (parsed && Array.isArray(parsed.completedModuleIds)) {
        return {
          completedModuleIds: parsed.completedModuleIds || [],
          inProgressModuleIds: parsed.inProgressModuleIds || [],
          completedLessonIds: parsed.completedLessonIds || [],
          completedActivityIds: parsed.completedActivityIds || [],
          activityAnswers: parsed.activityAnswers || {},
          currentModuleId: parsed.currentModuleId || 'modulo-1',
          lastVisitedAt: parsed.lastVisitedAt || new Date().toISOString(),
          finalAssessmentResult: parsed.finalAssessmentResult || null,
          quizAttempts: parsed.quizAttempts || {}
        };
      }
    }

    // Verifica se há progresso salvo usando a chave antiga da plataforma
    const legacyRaw = localStorage.getItem(LEGACY_PLATFORM_KEY);
    if (legacyRaw) {
      try {
        const legacyData = JSON.parse(legacyRaw);
        const activeId = legacyData.activeParticipantId;
        const activeRecord = legacyData.progressRecords?.[activeId];
        if (activeRecord) {
          const migrated: UserProgress = {
            completedModuleIds: activeRecord.completedModuleIds || [],
            inProgressModuleIds: activeRecord.inProgressModuleIds || [],
            completedLessonIds: activeRecord.completedLessonIds || [],
            completedActivityIds: activeRecord.completedActivityIds || [],
            currentModuleId: activeRecord.currentModuleId || 'modulo-1',
            lastVisitedAt: activeRecord.lastVisitedAt || new Date().toISOString(),
            finalAssessmentResult: activeRecord.finalAssessmentResult || null,
            quizAttempts: activeRecord.quizAttempts || {}
          };
          localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(migrated));
          return migrated;
        }
      } catch {
        // Ignora erros ao interpretar dados antigos
      }
    }

    const initial = createDefaultProgress();
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  } catch (error) {
    console.warn('Erro ao carregar progresso do localStorage:', error);
    return createDefaultProgress();
  }
}

export function saveStoredProgress(progress: UserProgress): void {
  try {
    const updated: UserProgress = {
      ...progress,
      lastVisitedAt: new Date().toISOString()
    };
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(updated));
    notifyListeners(updated);
  } catch (error) {
    console.error('Erro ao salvar progresso no localStorage:', error);
  }
}

export function markLessonComplete(moduleId: string, lessonId: string): UserProgress {
  const current = getStoredProgress();
  const completedLessons = new Set(current.completedLessonIds);
  completedLessons.add(lessonId);

  const inProgressModules = new Set(current.inProgressModuleIds);
  inProgressModules.add(moduleId);

  const targetModule = MODULES_DATA.find((m) => m.id === moduleId);
  const completedModules = new Set(current.completedModuleIds);

  if (targetModule) {
    const allLessonsDone = targetModule.lessons.every((l) => completedLessons.has(l.id));
    if (allLessonsDone) {
      completedModules.add(moduleId);
      inProgressModules.delete(moduleId);
    }
  }

  const updated: UserProgress = {
    ...current,
    completedLessonIds: Array.from(completedLessons),
    inProgressModuleIds: Array.from(inProgressModules),
    completedModuleIds: Array.from(completedModules),
    currentModuleId: moduleId
  };

  saveStoredProgress(updated);
  return updated;
}

export function saveActivityState(state: PracticalActivityState): UserProgress {
  const current = getStoredProgress();
  const completedActivities = new Set(current.completedActivityIds || []);
  if (state.isCompleted) {
    completedActivities.add(state.activityId);
  } else {
    completedActivities.delete(state.activityId);
  }

  const existingState = current.activityAnswers?.[state.activityId] || {};

  const updatedAnswers = {
    ...(current.activityAnswers || {}),
    [state.activityId]: {
      ...existingState,
      ...state,
      updatedAt: new Date().toISOString()
    }
  };

  const updated: UserProgress = {
    ...current,
    completedActivityIds: Array.from(completedActivities),
    activityAnswers: updatedAnswers
  };

  saveStoredProgress(updated);
  return updated;
}

export function resetActivityState(activityId: string): UserProgress {
  const current = getStoredProgress();
  const completedActivities = new Set(current.completedActivityIds || []);
  completedActivities.delete(activityId);

  const updatedAnswers = { ...(current.activityAnswers || {}) };
  delete updatedAnswers[activityId];

  const updated: UserProgress = {
    ...current,
    completedActivityIds: Array.from(completedActivities),
    activityAnswers: updatedAnswers
  };

  saveStoredProgress(updated);
  return updated;
}

export function markActivityComplete(activityId: string, selectedOptionId?: string): UserProgress {
  const current = getStoredProgress();
  const existingState = current.activityAnswers?.[activityId];
  return saveActivityState({
    ...existingState,
    activityId,
    isCompleted: true,
    ...(selectedOptionId ? { selectedOptionId } : {})
  });
}

export function startModule(moduleId: string): UserProgress {
  const current = getStoredProgress();
  const inProgressModules = new Set(current.inProgressModuleIds);

  if (!current.completedModuleIds.includes(moduleId)) {
    inProgressModules.add(moduleId);
  }

  const updated: UserProgress = {
    ...current,
    inProgressModuleIds: Array.from(inProgressModules),
    currentModuleId: moduleId
  };

  saveStoredProgress(updated);
  return updated;
}

export function saveAssessmentResult(result: AssessmentResult): UserProgress {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    finalAssessmentResult: result
  };

  saveStoredProgress(updated);
  return updated;
}

export function recordQuizAttempt(attempt: QuizAttempt): UserProgress {
  const current = getStoredProgress();
  const updatedAttempts = {
    ...current.quizAttempts,
    [attempt.moduleId]: attempt
  };

  let updatedCompleted = [...current.completedModuleIds];
  let updatedInProgress = [...current.inProgressModuleIds];

  if (attempt.passed && !updatedCompleted.includes(attempt.moduleId)) {
    updatedCompleted.push(attempt.moduleId);
    updatedInProgress = updatedInProgress.filter((id) => id !== attempt.moduleId);
  }

  const updated: UserProgress = {
    ...current,
    quizAttempts: updatedAttempts,
    completedModuleIds: updatedCompleted,
    inProgressModuleIds: updatedInProgress
  };

  saveStoredProgress(updated);
  return updated;
}

/**
 * Reinicia os dados de progresso mantidos pelo Conecta Digital neste navegador.
 * Remove apenas as chaves de armazenamento declaradas pela própria aplicação.
 */
export function resetCompleteTestData(): UserProgress {
  const fresh = createDefaultProgress();

  try {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(LEGACY_PLATFORM_KEY);
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(fresh));
    }
  } catch (error) {
    console.error('Erro ao redefinir o progresso do Conecta Digital:', error);
  }

  notifyListeners(fresh);
  return fresh;
}

export function resetAllProgress(): UserProgress {
  return resetCompleteTestData();
}

