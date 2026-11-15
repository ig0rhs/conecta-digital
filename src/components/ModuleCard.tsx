import React from 'react';
import { Clock, CheckCircle2, PlayCircle, CircleDot, ArrowRight } from 'lucide-react';
import { LearningModule } from '../types';
import { ModuleIcon } from './ModuleIcon';

interface ModuleCardProps {
  module: LearningModule;
  isCompleted: boolean;
  isInProgress: boolean;
  completedLessonsCount: number;
  onSelect: (moduleId: string) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  isCompleted,
  isInProgress,
  completedLessonsCount,
  onSelect
}) => {
  const totalLessons = module.lessons.length;

  // Configura o status com ícone e texto, sem depender apenas da cor
  const statusConfig = isCompleted
    ? {
        label: 'Concluído',
        icon: CheckCircle2,
        textColor: 'text-emerald-700',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        buttonText: 'Revisar módulo',
        buttonStyle: 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200'
      }
    : isInProgress
    ? {
        label: 'Em andamento',
        icon: PlayCircle,
        textColor: 'text-amber-800',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        buttonText: 'Continuar módulo',
        buttonStyle: 'text-white bg-blue-600 hover:bg-blue-700 shadow-sm'
      }
    : {
        label: 'Não iniciado',
        icon: CircleDot,
        textColor: 'text-slate-600',
        bgColor: 'bg-slate-100',
        borderColor: 'border-slate-200',
        buttonText: 'Acessar conteúdo',
        buttonStyle: 'text-slate-800 bg-white hover:bg-slate-50 border border-slate-300'
      };

  const StatusIcon = statusConfig.icon;

  return (
    <article className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-xs border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm">
      <div>
        {/* Cabeçalho com ícone, ordem e status */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
              <ModuleIcon name={module.iconName} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Módulo 0{module.order}
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {module.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Descrição resumida */}
        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          {module.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        {/* Informações complementares */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 mb-4 gap-2">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <span>Tempo estimado: {module.estimatedTime}</span>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <span>{completedLessonsCount} de {totalLessons} lições</span>
          </div>
        </div>

        {/* Exibição do status com ícone e texto */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}>
            <StatusIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{statusConfig.label}</span>
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Nível: {module.level}
          </span>
        </div>

        {/* Botão de ação */}
        <button
          type="button"
          onClick={() => onSelect(module.id)}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden min-h-[44px] ${statusConfig.buttonStyle}`}
          aria-label={`${statusConfig.buttonText}: Módulo ${module.order} - ${module.title}`}
        >
          <span>{statusConfig.buttonText}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
