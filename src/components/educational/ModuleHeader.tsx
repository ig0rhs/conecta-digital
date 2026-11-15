import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { LearningModule } from '../../types';
import { ModuleIcon } from '../ModuleIcon';

interface ModuleHeaderProps {
  module: LearningModule;
  isCompleted: boolean;
  completedLessonsCount: number;
}

export const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  module,
  isCompleted,
  completedLessonsCount
}) => {
  return (
    <header className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
            <ModuleIcon name={module.iconName} className="w-8 h-8" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1.5">
              <span>Módulo 0{module.order}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">Nível {module.level}</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {module.estimatedTime}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {module.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {module.introduction || module.fullDescription}
            </p>
          </div>
        </div>

        {/* Indicador de conclusão */}
        <div className="flex lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100 shrink-0 gap-2">
          <div className="text-xs text-slate-500 font-medium">Progresso das Lições</div>
          <div className="text-sm font-bold text-slate-900">
            {completedLessonsCount} de {module.lessons.length} lições concluídas
          </div>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
              Módulo Concluído
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              Em andamento
            </span>
          )}
        </div>
      </div>

      {/* Lista de objetivos de aprendizagem */}
      <div className="pt-6 border-t border-slate-100">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
          Objetivos de aprendizagem do módulo:
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
          {module.learningObjectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
