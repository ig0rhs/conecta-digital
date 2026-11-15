import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Compass,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Lightbulb
} from 'lucide-react';
import { LearningModule, NavigationSection } from '../types';
import { ModuleCard } from '../components/ModuleCard';

interface DashboardPageProps {
  modules: LearningModule[];
  completedModulesCount: number;
  totalModulesCount: number;
  progressPercentage: number;
  nextRecommendedModule: LearningModule;
  isModuleCompleted: (moduleId: string) => boolean;
  isModuleInProgress: (moduleId: string) => boolean;
  completedLessonIds: string[];
  onSelectModule: (moduleId: string) => void;
  onNavigate: (section: NavigationSection) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  modules,
  completedModulesCount,
  totalModulesCount,
  progressPercentage,
  nextRecommendedModule,
  isModuleCompleted,
  isModuleInProgress,
  completedLessonIds,
  onSelectModule,
  onNavigate
}) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Boas-vindas e apresentação */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-6 sm:p-8 lg:p-10 text-white shadow-md">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600/30 text-blue-200 border border-blue-400/30 text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5 text-blue-300" aria-hidden="true" />
            <span>Educação Digital Comunitária e Acessível</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Bem-vindo ao Conecta Digital
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
            Uma plataforma acolhedora e prática criada para ajudar você a dominar o computador, navegar na internet com autonomia e usar serviços digitais com total segurança e tranquilidade.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onSelectModule(nextRecommendedModule.id)}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-hidden min-h-[48px]"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <span>
                {completedModulesCount === 0
                  ? 'Começar a aprender agora'
                  : `Continuar: Módulo ${nextRecommendedModule.order}`}
              </span>
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('learn')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors focus:ring-2 focus:ring-white/40 focus:outline-hidden min-h-[48px]"
            >
              <Compass className="w-5 h-5 text-blue-300" aria-hidden="true" />
              <span>Explorar todos os 5 módulos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cartão de visão geral do progresso */}
      <section
        className="rounded-xl bg-white p-6 shadow-xs border border-slate-200"
        aria-labelledby="progress-overview-title"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 id="progress-overview-title" className="text-lg font-bold text-slate-900">
              Visão geral do seu aprendizado
            </h3>
            <p className="text-sm text-slate-500">
              Acompanhe seu avanço em cada etapa da jornada digital
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-blue-600 tabular-nums">
              {progressPercentage}%
            </span>
            <span className="text-xs text-slate-500 font-medium">concluído</span>
          </div>
        </div>

        {/* Barra de progresso acessível */}
        <div
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progresso geral do curso: ${progressPercentage}%`}
          className="w-full h-3 rounded-full bg-slate-100 overflow-hidden mb-6"
        >
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Resumo de indicadores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-emerald-100 text-emerald-700 shrink-0">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">
                {completedModulesCount}
              </div>
              <div className="text-xs text-slate-500">Módulos concluídos</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-100 text-blue-700 shrink-0">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">
                {totalModulesCount}
              </div>
              <div className="text-xs text-slate-500">Total de módulos disponíveis</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-amber-100 text-amber-800 shrink-0">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">
                {totalModulesCount - completedModulesCount}
              </div>
              <div className="text-xs text-slate-500">Módulos a completar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade de módulos de aprendizagem */}
      <section aria-labelledby="modules-section-title">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 id="modules-section-title" className="text-xl font-bold text-slate-900">
              Módulos de aprendizagem
            </h3>
            <p className="text-sm text-slate-500">
              Cinco passos graduais para construir sua autonomia digital
            </p>
          </div>

          <button
            onClick={() => onNavigate('learn')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline self-start sm:self-auto"
          >
            <span>Ver todos os detalhes</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const completedLessonsInThisModule = module.lessons.filter((l) =>
              completedLessonIds.includes(l.id)
            ).length;

            return (
              <ModuleCard
                key={module.id}
                module={module}
                isCompleted={isModuleCompleted(module.id)}
                isInProgress={isModuleInProgress(module.id)}
                completedLessonsCount={completedLessonsInThisModule}
                onSelect={onSelectModule}
              />
            );
          })}
        </div>
      </section>

      {/* Objetivo da plataforma e inclusão comunitária */}
      <section
        className="rounded-2xl bg-slate-100/80 p-6 sm:p-8 border border-slate-200"
        aria-labelledby="purpose-section-title"
      >
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Propósito do Conecta Digital
          </span>
          <h3 id="purpose-section-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-3">
            Inclusão digital real: sem termos difíceis, no seu próprio tempo
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            O Conecta Digital foi desenvolvido especialmente para iniciativas comunitárias de inclusão tecnológica. Nosso compromisso é tornar a tecnologia compreensível para qualquer pessoa, independentemente de sua idade ou experiência anterior com computadores.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Acolhedor</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Sem pressão ou cobranças. Você aprende praticando no seu próprio ritmo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Foco em Segurança</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Aprenda a se proteger contra golpes, cuidar de suas senhas e preservar seus dados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                <Lightbulb className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Prático para a Vida</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Conteúdos focados no dia a dia: Gov.br, e-mail, buscas na internet e documentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
