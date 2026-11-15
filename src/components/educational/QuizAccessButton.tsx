import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

interface QuizAccessButtonProps {
  quizLength: number;
  onOpenQuiz: () => void;
  className?: string;
}

export const QuizAccessButton: React.FC<QuizAccessButtonProps> = ({
  quizLength,
  onOpenQuiz,
  className = ''
}) => {
  return (
    <div className={`p-5 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5 shadow-2xs">
          <Award className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">
            Pronto para testar o que aprendeu?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
            Faça a verificação de conhecimento deste módulo com {quizLength} perguntas rápidas e comentários explicativos.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenQuiz}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs shrink-0 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
      >
        <span>Fazer verificação do módulo</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
};
