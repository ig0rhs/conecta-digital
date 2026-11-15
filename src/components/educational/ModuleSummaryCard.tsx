import React from 'react';
import { BookmarkCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { ModuleSummary } from '../../types';

interface ModuleSummaryCardProps {
  summary: ModuleSummary;
  moduleOrder: number;
}

export const ModuleSummaryCard: React.FC<ModuleSummaryCardProps> = ({
  summary,
  moduleOrder
}) => {
  return (
    <section
      className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white shadow-sm space-y-6"
      aria-labelledby={`summary-module-${moduleOrder}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/20 shrink-0">
          <BookmarkCheck className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">
            Síntese do Módulo 0{moduleOrder}
          </span>
          <h3 id={`summary-module-${moduleOrder}`} className="text-lg sm:text-xl font-bold text-white">
            {summary.headline}
          </h3>
        </div>
      </div>

      {/* Principais aprendizados */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          Pontos fundamentais que você dominou:
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-200">
          {summary.keyTakeaways.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hábito prático diário */}
      <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-slate-200 space-y-1">
        <div className="flex items-center gap-2 font-bold text-blue-200">
          <Sparkles className="w-4 h-4 text-blue-300" aria-hidden="true" />
          <span>Hábito digital recomendado para o dia a dia:</span>
        </div>
        <p className="leading-relaxed pl-6">{summary.practicalHabit}</p>
      </div>

      {/* Mensagem de incentivo */}
      <p className="text-xs sm:text-sm text-slate-300 italic">
        "{summary.encouragement}"
      </p>
    </section>
  );
};
