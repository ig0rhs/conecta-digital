import React from 'react';
import {
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LearningModule, UserProgress, NavigationSection } from '../types';
import { ModuleIcon } from '../components/ModuleIcon';

interface ProgressPageProps {
  modules: LearningModule[];
  progress: UserProgress;
  completedModulesCount: number;
  totalModulesCount: number;
  progressPercentage: number;
  onSelectModule: (moduleId: string) => void;
  onNavigate: (section: NavigationSection) => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  modules,
  progress,
  completedModulesCount,
  totalModulesCount,
  progressPercentage,
  onSelectModule,
  onNavigate
}) => {
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = progress.completedLessonIds.length;

  return (
    <div className="space-y-8 pb-12">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Acompanhamento Pessoal
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Meu progresso de aprendizagem
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Veja as etapas concluídas, suas lições finalizadas e avaliações realizadas.
          </p>
        </div>
      </div>

      {/* Resumo dos principais indicadores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Progresso Geral
          </div>
          <div className="text-3xl font-extrabold text-blue-600 tabular-nums">
            {progressPercentage}%
          </div>
          <p className="text-xs text-slate-500 mt-1">Da trilha completa concluída</p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Módulos Concluídos
          </div>
          <div className="text-3xl font-extrabold text-emerald-600 tabular-nums">
            {completedModulesCount}/{totalModulesCount}
          </div>
          <p className="text-xs text-slate-500 mt-1">Módulos finalizados</p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Lições Práticas
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
            {completedLessons}/{totalLessons}
          </div>
          <p className="text-xs text-slate-500 mt-1">Lições lidas e exercitadas</p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Avaliação Final
          </div>
          <div className="text-lg font-bold text-slate-900 truncate">
            {progress.finalAssessmentResult
              ? `${progress.finalAssessmentResult.percentage}% na Final`
              : 'Pendente'}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {progress.finalAssessmentResult
              ? 'Competências verificadas'
              : 'Disponível ao concluir seus estudos'}
          </p>
        </div>
      </div>

      {/* Lista detalhada do status dos módulos */}
      <div className="rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">
            Detalhamento por módulo
          </h3>
          <span className="text-xs text-slate-500 font-medium">5 módulos estruturados</span>
        </div>

        <div className="divide-y divide-slate-100">
          {modules.map((m) => {
            const isCompleted = progress.completedModuleIds.includes(m.id);
            const isInProgress = progress.inProgressModuleIds.includes(m.id) && !isCompleted;
            const completedInModule = m.lessons.filter((l) =>
              progress.completedLessonIds.includes(l.id)
            ).length;

            return (
              <div
                key={m.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                    <ModuleIcon name={m.iconName} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span>Módulo 0{m.order}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" aria-hidden="true" />
                        {m.estimatedTime}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {m.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                  {/* Contagem de lições e atividades */}
                  <div className="text-xs text-slate-600 text-left sm:text-right">
                    <div>
                      <span className="font-bold text-slate-900">{completedInModule}</span> de{' '}
                      <span>{m.lessons.length}</span> lições
                    </div>
                    {m.practicalActivities && m.practicalActivities.length > 0 && (
                      <div className="text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">
                          {m.practicalActivities.filter((a) => progress.completedActivityIds?.includes(a.id)).length}
                        </span> de {m.practicalActivities.length} atividades
                      </div>
                    )}
                  </div>

                  {/* Indicador de status */}
                  <div>
                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        Concluído
                      </span>
                    ) : isInProgress ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                        Em andamento
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        Não iniciado
                      </span>
                    )}
                  </div>

                  {/* Ação */}
                  <button
                    type="button"
                    onClick={() => onSelectModule(m.id)}
                    className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden"
                    title={`Abrir módulo ${m.order}`}
                    aria-label={`Abrir módulo ${m.order} - ${m.title}`}
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lista de habilidades práticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <h3 className="font-bold text-slate-900 text-base">
              Habilidades Práticas Desenvolvidas
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ao percorrer os módulos, você adquire competências concretas para o mundo do trabalho e para a vida diária:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  progress.completedModuleIds.includes('modulo-1')
                    ? 'text-emerald-600'
                    : 'text-slate-300'
                }`}
                aria-hidden="true"
              />
              <span>Manuseio de teclado, cliques do mouse e organização de pastas</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  progress.completedModuleIds.includes('modulo-2')
                    ? 'text-emerald-600'
                    : 'text-slate-300'
                }`}
                aria-hidden="true"
              />
              <span>Navegação segura em sites e buscas eficientes no Google</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  progress.completedModuleIds.includes('modulo-3')
                    ? 'text-emerald-600'
                    : 'text-slate-300'
                }`}
                aria-hidden="true"
              />
              <span>Redação de e-mails, envio de anexos em PDF e comunicação</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  progress.completedModuleIds.includes('modulo-4')
                    ? 'text-emerald-600'
                    : 'text-slate-300'
                }`}
                aria-hidden="true"
              />
              <span>Defesa contra golpes online, senhas fortes e proteção de CPF</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  progress.completedModuleIds.includes('modulo-5')
                    ? 'text-emerald-600'
                    : 'text-slate-300'
                }`}
                aria-hidden="true"
              />
              <span>Acesso ao Gov.br, certidões digitais e serviços públicos</span>
            </li>
          </ul>
        </div>

        {/* Cartão de resumo da avaliação final */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <h3 className="font-bold text-slate-900 text-base">
              Avaliação Final de Competências
            </h3>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-slate-900">Certificação de Habilidades Digitais</span>
                {progress.finalAssessmentResult ? (
                  <span className="text-emerald-700 font-semibold">
                    {progress.finalAssessmentResult.percentage}% de acertos
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate('final-assessment')}
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Fazer agora
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {progress.finalAssessmentResult
                  ? progress.finalAssessmentResult.summaryFeedback
                  : 'Verifique suas habilidades práticas após estudar os cinco módulos do curso e receba sua comprovação de aptidão digital.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
