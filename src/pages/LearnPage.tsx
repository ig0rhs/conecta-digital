import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Award,
  RotateCcw,
  ClipboardCheck,
  BookmarkCheck
} from 'lucide-react';
import { LearningModule, Lesson, QuizAttempt, PracticalActivityState } from '../types';
import { ModuleCard } from '../components/ModuleCard';
import { ModuleHeader } from '../components/educational/ModuleHeader';
import { LessonSection } from '../components/educational/LessonSection';
import { PracticalActivitiesRunner } from '../components/educational/PracticalActivitiesRunner';
import { ModuleSummaryCard } from '../components/educational/ModuleSummaryCard';
import { QuizAccessButton } from '../components/educational/QuizAccessButton';
import { InteractiveQuestionnaireRunner } from '../components/educational/InteractiveQuestionnaireRunner';

interface LearnPageProps {
  modules: LearningModule[];
  selectedModuleId: string | null;
  onSelectModule: (moduleId: string | null) => void;
  isModuleCompleted: (moduleId: string) => boolean;
  isModuleInProgress: (moduleId: string) => boolean;
  isLessonCompleted: (lessonId: string) => boolean;
  completedLessonIds: string[];
  completedActivityIds?: string[];
  activityAnswers?: Record<string, PracticalActivityState>;
  onMarkLessonComplete: (moduleId: string, lessonId: string) => void;
  onRecordQuizAttempt: (attempt: QuizAttempt) => void;
  onStartModule: (moduleId: string) => void;
  onSaveActivityState?: (state: PracticalActivityState) => void;
  onResetActivityState?: (activityId: string) => void;
  onMarkActivityComplete?: (activityId: string) => void;
}

export const LearnPage: React.FC<LearnPageProps> = ({
  modules,
  selectedModuleId,
  onSelectModule,
  isModuleCompleted,
  isModuleInProgress,
  isLessonCompleted,
  completedLessonIds,
  completedActivityIds = [],
  activityAnswers = {},
  onMarkLessonComplete,
  onRecordQuizAttempt,
  onStartModule,
  onSaveActivityState,
  onResetActivityState,
  onMarkActivityComplete
}) => {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'lessons' | 'activities' | 'summary' | 'quiz'>('lessons');

  const currentModule = modules.find((m) => m.id === selectedModuleId);

  // Ao selecionar um módulo, inicia o módulo e ativa a primeira lição
  useEffect(() => {
    if (selectedModuleId) {
      onStartModule(selectedModuleId);
      const mod = modules.find((m) => m.id === selectedModuleId);
      if (mod && mod.lessons.length > 0) {
        setActiveLessonId((prev) => (prev ? prev : mod.lessons[0].id));
      }
      setActiveTab('lessons');
    }
  }, [selectedModuleId]);

  const currentLesson: Lesson | undefined = currentModule?.lessons.find(
    (l) => l.id === activeLessonId
  ) || currentModule?.lessons[0];

  const currentLessonIndex = currentModule
    ? currentModule.lessons.findIndex((l) => l.id === currentLesson?.id)
    : -1;

  const completedActivitiesInModuleCount = currentModule
    ? currentModule.practicalActivities.filter(
        (a) =>
          completedActivityIds.includes(a.id) ||
          activityAnswers[a.id]?.isCompleted
      ).length
    : 0;

  const scrollToTargetSection = (targetId: string) => {
    setTimeout(() => {
      const target = document.getElementById(targetId) || document.getElementById('active-lesson-article') || document.getElementById('module-tabs-nav');
      if (target) {
        const rect = target.getBoundingClientRect();
        const navbarOffset = 76;
        const targetY = window.scrollY + rect.top - navbarOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }, 40);
  };

  const handleLessonChange = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setActiveTab('lessons');
    scrollToTargetSection('active-lesson-article');
  };

  const handleCompleteCurrentLesson = () => {
    if (!currentModule || !currentLesson) return;
    onMarkLessonComplete(currentModule.id, currentLesson.id);

    // Avança automaticamente para a próxima lição, se houver
    const nextIdx = currentLessonIndex + 1;
    if (nextIdx < currentModule.lessons.length) {
      setActiveLessonId(currentModule.lessons[nextIdx].id);
      scrollToTargetSection('active-lesson-article');
    } else {
      // Avança para as atividades práticas
      setActiveTab('activities');
      scrollToTargetSection('module-activities-section');
    }
  };

  const handlePreviousLesson = () => {
    if (!currentModule || currentLessonIndex <= 0) return;
    setActiveLessonId(currentModule.lessons[currentLessonIndex - 1].id);
    scrollToTargetSection('active-lesson-article');
  };

  const handleNextLesson = () => {
    if (!currentModule || currentLessonIndex >= currentModule.lessons.length - 1) return;
    setActiveLessonId(currentModule.lessons[currentLessonIndex + 1].id);
    scrollToTargetSection('active-lesson-article');
  };

  // Sem módulo selecionado, exibe o catálogo dos cinco módulos
  if (!currentModule) {
    return (
      <div className="space-y-8 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Trilha de Aprendizado
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 tracking-tight">
            Módulos de aprendizagem prática
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Selecione qualquer módulo abaixo para começar ou continuar seus estudos. Cada módulo conta com lições explicativas, atividades interativas e verificação de conhecimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const completedCount = module.lessons.filter((l) =>
              completedLessonIds.includes(l.id)
            ).length;

            return (
              <ModuleCard
                key={module.id}
                module={module}
                isCompleted={isModuleCompleted(module.id)}
                isInProgress={isModuleInProgress(module.id)}
                completedLessonsCount={completedCount}
                onSelect={(id) => onSelectModule(id)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  const isModuleDone = isModuleCompleted(currentModule.id);
  const lessonsCompletedInThisModule = currentModule.lessons.filter((l) =>
    isLessonCompleted(l.id)
  ).length;

  return (
    <div className="space-y-6 pb-14">
      {/* Botão para voltar ao início */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onSelectModule(null)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Voltar para todos os módulos</span>
        </button>

        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Módulo {currentModule.order} de {modules.length}
        </span>
      </div>

      {/* Cabeçalho do módulo */}
      <ModuleHeader
        module={currentModule}
        isCompleted={isModuleDone}
        completedLessonsCount={lessonsCompletedInThisModule}
      />

      {/* Abas de navegação entre lições, atividades práticas, síntese e questionário */}
      <nav
        id="module-tabs-nav"
        aria-label="Etapas do módulo"
        className="scroll-mt-24 flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none"
      >
        <button
          onClick={() => setActiveTab('lessons')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'lessons'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span>Lições ({currentModule.lessons.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('activities')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'activities'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
          <span>
            Atividades Práticas ({completedActivitiesInModuleCount}/{currentModule.practicalActivities.length})
          </span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'summary'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookmarkCheck className="w-4 h-4" aria-hidden="true" />
          <span>Resumo do Módulo</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'quiz'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" aria-hidden="true" />
          <span>Verificação de Conhecimento ({currentModule.quiz.length})</span>
        </button>
      </nav>

      {/* Aba 1: lições do módulo */}
      {activeTab === 'lessons' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Índice lateral de lições */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1 mb-2">
              Índice de lições do Módulo {currentModule.order}
            </h3>
            {currentModule.lessons.map((lesson) => {
              const isDone = isLessonCompleted(lesson.id);
              const isSelected = currentLesson?.id === lesson.id;

              return (
                <button
                  key={lesson.id}
                  onClick={() => handleLessonChange(lesson.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span>Lição {lesson.order}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {lesson.duration}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-bold leading-snug ${
                        isSelected ? 'text-blue-900' : 'text-slate-900'
                      }`}
                    >
                      {lesson.title}
                    </div>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    {isDone ? (
                      <span
                        className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700"
                        title="Lição concluída"
                      >
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      </span>
                    ) : (
                      <ChevronRight
                        className={`w-5 h-5 ${
                          isSelected ? 'text-blue-600' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </button>
              );
            })}

            {/* Atalho para as atividades */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setActiveTab('activities');
                  scrollToTargetSection('module-activities-section');
                }}
                className="w-full p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-between gap-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  <span>Ir para Atividades Práticas</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                  {completedActivitiesInModuleCount}/{currentModule.practicalActivities.length}
                </span>
              </button>
            </div>
          </div>

          {/* Seção da lição ativa */}
          <div className="lg:col-span-8">
            {currentLesson ? (
              <LessonSection
                lesson={currentLesson}
                totalLessons={currentModule.lessons.length}
                isCompleted={isLessonCompleted(currentLesson.id)}
                onMarkComplete={handleCompleteCurrentLesson}
                onPreviousLesson={handlePreviousLesson}
                onNextLesson={handleNextLesson}
                onGoToActivities={() => {
                  setActiveTab('activities');
                  scrollToTargetSection('module-activities-section');
                }}
                hasPrevious={currentLessonIndex > 0}
                hasNext={currentLessonIndex < currentModule.lessons.length - 1}
              />
            ) : null}
          </div>
        </div>
      )}

      {/* Aba 2: atividades práticas */}
      {activeTab === 'activities' && (
        <div id="module-activities-section" className="scroll-mt-24 max-w-3xl mx-auto space-y-6">
          <PracticalActivitiesRunner
            key={currentModule.id}
            moduleOrder={currentModule.order}
            moduleTitle={currentModule.title}
            activities={currentModule.practicalActivities}
            savedStates={activityAnswers}
            onSaveState={onSaveActivityState}
            onResetState={onResetActivityState}
            onCompleted={onMarkActivityComplete}
            onAllCompleted={() => {
              setActiveTab('summary');
              scrollToTargetSection('module-summary-section');
            }}
          />

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('lessons');
                scrollToTargetSection('active-lesson-article');
              }}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              &larr; Voltar para as lições
            </button>

            <button
              onClick={() => {
                setActiveTab('summary');
                scrollToTargetSection('module-summary-section');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span>Ir para o resumo do módulo &rarr;</span>
            </button>
          </div>
        </div>
      )}

      {/* Aba 3: resumo do módulo e acesso ao questionário */}
      {activeTab === 'summary' && (
        <div id="module-summary-section" className="scroll-mt-24 max-w-3xl mx-auto space-y-6">
          <ModuleSummaryCard
            summary={currentModule.summary}
            moduleOrder={currentModule.order}
          />

          <QuizAccessButton
            quizLength={currentModule.quiz.length}
            onOpenQuiz={() => {
              setActiveTab('quiz');
              scrollToTargetSection('module-quiz-section');
            }}
          />

          <div className="pt-2 flex justify-start">
            <button
              onClick={() => {
                setActiveTab('activities');
                scrollToTargetSection('module-activities-section');
              }}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              &larr; Revisar atividades práticas
            </button>
          </div>
        </div>
      )}

      {/* Aba 4: verificação de conhecimento */}
      {activeTab === 'quiz' && (
        <div id="module-quiz-section" className="scroll-mt-24">
          <InteractiveQuestionnaireRunner
            key={currentModule.id}
            title={`Perguntas do Módulo ${currentModule.order}: ${currentModule.title}`}
            badgeLabel={`Verificação de Conhecimento — Módulo ${currentModule.order}`}
            questions={currentModule.quiz}
            onComplete={(score, total) => {
              const passed = score >= Math.ceil(total * 0.6);
              onRecordQuizAttempt({
                moduleId: currentModule.id,
                score,
                totalQuestions: total,
                completedAt: new Date().toISOString(),
                passed
              });
            }}
            onFinishNavigate={() => {
              onSelectModule(null);
            }}
            finishNavigateLabel="Continuar para outros módulos"
            finishNavigateIcon="learn"
          />
        </div>
      )}
    </div>
  );
};
