import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  UserProgress,
  LearningModule
} from '../types';
import {
  getStoredProgress,
  subscribeToProgress,
  markLessonComplete as serviceMarkLessonComplete,
  markActivityComplete as serviceMarkActivityComplete,
  saveActivityState as serviceSaveActivityState,
  resetActivityState as serviceResetActivityState,
  startModule as serviceStartModule,
  saveAssessmentResult as serviceSaveAssessmentResult,
  recordQuizAttempt as serviceRecordQuizAttempt,
  resetAllProgress as serviceResetAllProgress,
  resetCompleteTestData as serviceResetCompleteTestData
} from '../services/storageService';
import { MODULES_DATA } from '../data/modulesData';

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(getStoredProgress);

  useEffect(() => {
    const unsubProgress = subscribeToProgress((updated) => {
      setProgress(updated);
    });
    return () => {
      unsubProgress();
    };
  }, []);

  const totalModulesCount = MODULES_DATA.length;
  const completedModulesCount = progress.completedModuleIds?.length || 0;
  
  // Total de lições em todos os módulos
  const totalLessonsCount = useMemo(() => {
    return MODULES_DATA.reduce((acc, m) => acc + m.lessons.length, 0);
  }, []);

  const completedLessonsCount = progress.completedLessonIds?.length || 0;

  // Total de atividades práticas em todos os módulos
  const totalActivitiesCount = useMemo(() => {
    return MODULES_DATA.reduce(
      (acc, m) => acc + (m.practicalActivities ? m.practicalActivities.length : 0),
      0
    );
  }, []);

  const completedActivitiesCount = progress.completedActivityIds?.length || 0;

  // Percentual de progresso com base nos módulos e lições concluídos
  const progressPercentage = useMemo(() => {
    if (totalModulesCount === 0) return 0;
    const moduleScore = (completedModulesCount / totalModulesCount) * 100;
    return Math.round(moduleScore);
  }, [completedModulesCount, totalModulesCount]);

  const isModuleCompleted = useCallback(
    (moduleId: string) => progress.completedModuleIds?.includes(moduleId) || false,
    [progress.completedModuleIds]
  );

  const isModuleInProgress = useCallback(
    (moduleId: string) =>
      (progress.inProgressModuleIds?.includes(moduleId) || false) &&
      !progress.completedModuleIds?.includes(moduleId),
    [progress.inProgressModuleIds, progress.completedModuleIds]
  );

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessonIds?.includes(lessonId) || false,
    [progress.completedLessonIds]
  );

  const isActivityCompleted = useCallback(
    (activityId: string) => progress.completedActivityIds?.includes(activityId) || false,
    [progress.completedActivityIds]
  );

  const nextRecommendedModule = useMemo<LearningModule>(() => {
    const inProgress = MODULES_DATA.find(
      (m) =>
        progress.inProgressModuleIds?.includes(m.id) &&
        !progress.completedModuleIds?.includes(m.id)
    );
    if (inProgress) return inProgress;

    const notStarted = MODULES_DATA.find(
      (m) => !progress.completedModuleIds?.includes(m.id)
    );
    if (notStarted) return notStarted;

    return MODULES_DATA[0];
  }, [progress.completedModuleIds, progress.inProgressModuleIds]);

  return {
    progress,
    totalModulesCount,
    completedModulesCount,
    totalLessonsCount,
    completedLessonsCount,
    totalActivitiesCount,
    completedActivitiesCount,
    progressPercentage,
    isModuleCompleted,
    isModuleInProgress,
    isLessonCompleted,
    isActivityCompleted,
    activityAnswers: progress.activityAnswers || {},
    nextRecommendedModule,
    markLessonComplete: serviceMarkLessonComplete,
    markActivityComplete: serviceMarkActivityComplete,
    saveActivityState: serviceSaveActivityState,
    resetActivityState: serviceResetActivityState,
    startModule: serviceStartModule,
    saveAssessmentResult: serviceSaveAssessmentResult,
    recordQuizAttempt: serviceRecordQuizAttempt,
    resetAllProgress: serviceResetAllProgress,
    resetCompleteTestData: serviceResetCompleteTestData
  };
}
