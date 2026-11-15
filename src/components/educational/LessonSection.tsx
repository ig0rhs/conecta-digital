import React from 'react';
import {
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Lesson } from '../../types';
import { InfoCallout } from './InfoCallout';
import { StepByStep } from './StepByStep';

interface LessonSectionProps {
  lesson: Lesson;
  totalLessons: number;
  isCompleted: boolean;
  onMarkComplete: () => void;
  onPreviousLesson?: () => void;
  onNextLesson?: () => void;
  onGoToActivities?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const LessonSection: React.FC<LessonSectionProps> = ({
  lesson,
  totalLessons,
  isCompleted,
  onMarkComplete,
  onPreviousLesson,
  onNextLesson,
  onGoToActivities,
  hasPrevious,
  hasNext
}) => {
  return (
    <article
      id="active-lesson-article"
      className="scroll-mt-24 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-7"
    >
      {/* Cabeçalho da lição */}
      <div className="border-b border-slate-100 pb-5 space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
          <span>Lição 0{lesson.order} de 0{totalLessons}</span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {lesson.duration}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
          {lesson.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {lesson.summary}
        </p>
      </div>

      {/* Blocos de conteúdo da lição */}
      <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        {lesson.blocks.map((block, idx) => {
          if (block.type === 'paragraph') {
            return (
              <p key={idx} className="leading-relaxed text-slate-700">
                {block.text}
              </p>
            );
          }

          if (block.type === 'highlight') {
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950 space-y-1.5"
              >
                {block.title && (
                  <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>{block.title}</span>
                  </h4>
                )}
                <div className="text-sm sm:text-base whitespace-pre-line leading-relaxed text-blue-900/90">
                  {block.text}
                </div>
              </div>
            );
          }

          if (block.type === 'tip') {
            return (
              <InfoCallout key={idx} type="tip" title={block.title}>
                <p className="whitespace-pre-line">{block.text}</p>
              </InfoCallout>
            );
          }

          if (block.type === 'warning') {
            return (
              <InfoCallout key={idx} type="warning" title={block.title}>
                <p className="whitespace-pre-line">{block.text}</p>
              </InfoCallout>
            );
          }

          if (block.type === 'stepList') {
            return (
              <StepByStep
                key={idx}
                title={block.title}
                steps={block.items || []}
              />
            );
          }

          if (block.type === 'comparison') {
            return (
              <div key={idx} className="space-y-3">
                {block.title && (
                  <h4 className="text-sm font-bold text-slate-900">
                    {block.title}
                  </h4>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Coluna esquerda */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h5 className="font-bold text-slate-900 text-sm text-blue-700">
                      {block.leftTitle}
                    </h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {block.leftContent?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coluna direita */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h5 className="font-bold text-slate-900 text-sm text-emerald-700">
                      {block.rightTitle}
                    </h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {block.rightContent?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }

          if (block.type === 'visualExample') {
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2"
              >
                {block.title && (
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {block.title}
                  </div>
                )}
                <div className="font-mono text-xs sm:text-sm bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-blue-300 overflow-x-auto whitespace-pre">
                  {block.text}
                </div>
                {block.caption && (
                  <p className="text-xs text-slate-400 italic">
                    {block.caption}
                  </p>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Destaque principal */}
      <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
          O que você deve levar desta lição:
        </span>
        <p className="text-sm font-medium text-emerald-900 leading-relaxed">
          {lesson.keyTakeaway}
        </p>
      </div>

      {/* Navegação inferior e ação de conclusão */}
      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              Lição concluída!
            </span>
          ) : (
            <button
              type="button"
              onClick={onMarkComplete}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
              <span>Marcar como concluída</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          {hasPrevious && (
            <button
              type="button"
              onClick={onPreviousLesson}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-hidden min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span>Lição anterior</span>
            </button>
          )}

          {hasNext ? (
            <button
              type="button"
              onClick={onNextLesson}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
            >
              <span>Próxima lição</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onGoToActivities}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
            >
              <span>Ir para Atividades Práticas</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
