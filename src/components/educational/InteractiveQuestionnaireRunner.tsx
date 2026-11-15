import React, { useState, useRef } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Award,
  BookOpen,
  FileCheck,
  BarChart3
} from 'lucide-react';

export interface QuestionnaireQuestion {
  id: string;
  question: string;
  category?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface InteractiveQuestionnaireRunnerProps {
  title: string;
  badgeLabel?: string;
  questions: QuestionnaireQuestion[];
  onComplete: (score: number, totalQuestions: number, answers: Record<string, number>) => void;
  onRetry?: () => void;
  onFinishNavigate?: () => void;
  finishNavigateLabel?: string;
  finishNavigateIcon?: 'learn' | 'progress';
  showCertificatePreview?: boolean;
}

export const InteractiveQuestionnaireRunner: React.FC<InteractiveQuestionnaireRunnerProps> = ({
  title,
  badgeLabel = 'Questionário de Verificação',
  questions,
  onComplete,
  onRetry,
  onFinishNavigate,
  finishNavigateLabel = 'Continuar jornada',
  finishNavigateIcon = 'learn',
  showCertificatePreview = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  if (!currentQuestion && !isFinished) {
    return null;
  }
  const handleSelectOption = (optIdx: number) => {
    if (isConfirmed) return;
    setSelectedOption(optIdx);
  };
  const handleConfirmAnswer = () => {
    if (selectedOption === null || isConfirmed) return;

    setIsConfirmed(true);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedOption
    }));
  };
  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsConfirmed(false);

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const navbarOffset = 76;
        if (rect.top < navbarOffset || rect.top > window.innerHeight * 0.45) {
          const targetY = window.scrollY + rect.top - navbarOffset;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      }
    }
  };
  const handleFinishQuestionnaire = () => {
    // Garante que a questão atual seja considerada nas respostas
    const finalAnswers = {
      ...answers,
      [currentQuestion.id]: selectedOption ?? -1
    };

    let score = 0;
    questions.forEach((q) => {
      if (finalAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    setFinalScore(score);
    setIsFinished(true);
    onComplete(score, totalQuestions, finalAnswers);

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const navbarOffset = 76;
      if (rect.top < navbarOffset || rect.top > window.innerHeight * 0.45) {
        const targetY = window.scrollY + rect.top - navbarOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsConfirmed(false);
    setAnswers({});
    setIsFinished(false);
    setFinalScore(0);
    if (onRetry) {
      onRetry();
    }

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const navbarOffset = 76;
      if (rect.top < navbarOffset) {
        const targetY = window.scrollY + rect.top - navbarOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }
  };
  if (isFinished) {
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    const passed = percentage >= 60;

    return (
      <div
        ref={cardRef}
        className="scroll-mt-24 max-w-2xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6"
      >
        <div className="text-center space-y-3 pb-2 border-b border-slate-100">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 mb-1">
            <Award className="w-8 h-8" aria-hidden="true" />
          </div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
            Resultado da Avaliação
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Você acertou {finalScore} de {totalQuestions} perguntas!
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-extrabold text-blue-600 tabular-nums">
              {percentage}%
            </span>
            <span className="text-xs text-slate-500 font-semibold uppercase">
              de aproveitamento
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 text-center max-w-lg mx-auto leading-relaxed">
          {passed
            ? 'Excelente aproveitamento! Você demonstrou pleno domínio e compreensão dos conceitos abordados.'
            : 'Bom esforço! Recomendamos revisar os conteúdos e explicações para fixar ainda mais as competências digitais.'}
        </p>

        {showCertificatePreview && passed && (
          <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <FileCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-emerald-900 text-sm">
                  Declaração de Conclusão Prática Disponível
                </h4>
                <p className="text-xs text-emerald-900/80 leading-relaxed mt-0.5">
                  Você atingiu o aproveitamento satisfatório na avaliação final de inclusão digital.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">
              Aptidão Verificada
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Tentar novamente</span>
          </button>

          {onFinishNavigate && (
            <button
              type="button"
              onClick={onFinishNavigate}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
            >
              {finishNavigateIcon === 'progress' ? (
                <BarChart3 className="w-4 h-4" aria-hidden="true" />
              ) : (
                <BookOpen className="w-4 h-4" aria-hidden="true" />
              )}
              <span>{finishNavigateLabel}</span>
            </button>
          )}
        </div>
      </div>
    );
  }
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const isCorrect = isConfirmed && selectedOption === currentQuestion.correctAnswer;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div
      ref={cardRef}
      className="scroll-mt-24 max-w-2xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6"
    >
      {/* Cabeçalho do questionário e barra de progresso */}
      <div className="space-y-3 pb-4 border-b border-slate-100">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
              {badgeLabel}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {title}
            </h2>
          </div>

          <span className="text-xs font-bold text-slate-600 px-3 py-1 rounded-full bg-slate-100 shrink-0">
            Questão {currentIndex + 1} de {totalQuestions}
          </span>
        </div>

        {/* Barra de progresso */}
        <div
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
          aria-label={`Progresso: Questão ${currentIndex + 1} de ${totalQuestions}`}
          className="w-full h-2 rounded-full bg-slate-100 overflow-hidden"
        >
          <div
            className="h-full bg-blue-600 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Enunciado da questão */}
      <div className="space-y-2">
        {currentQuestion.category && (
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Eixo: {currentQuestion.category}
          </span>
        )}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Lista de alternativas */}
      <div className="space-y-3" role="radiogroup" aria-label={currentQuestion.question}>
        {currentQuestion.options.map((optionText, optIdx) => {
          const isSelected = selectedOption === optIdx;

          let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700 hover:border-slate-300';

          if (isConfirmed) {
            if (optIdx === currentQuestion.correctAnswer) {
              optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through opacity-90';
            } else {
              optionStyle = 'bg-white border-slate-200 opacity-50 text-slate-400';
            }
          } else if (isSelected) {
            optionStyle = 'bg-blue-50/80 border-blue-600 text-blue-900 font-medium ring-1 ring-blue-600 shadow-2xs';
          }

          return (
            <button
              key={optIdx}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isConfirmed}
              onClick={() => handleSelectOption(optIdx)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base transition-all flex items-start justify-between gap-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[48px] ${optionStyle}`}
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 shrink-0 mt-0.5">
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span className="leading-relaxed flex-1">{optionText}</span>
              </div>

              <span className="shrink-0 mt-0.5">
                {!isConfirmed ? (
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-blue-600 bg-white' : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                  </span>
                ) : (
                  <>
                    {optIdx === currentQuestion.correctAnswer && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                        <span>Resposta correta</span>
                      </span>
                    )}
                    {isSelected && !isCorrect && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700">
                        <AlertCircle className="w-4 h-4 text-rose-600" aria-hidden="true" />
                        <span>Sua resposta</span>
                      </span>
                    )}
                    {!isSelected && optIdx !== currentQuestion.correctAnswer && (
                      <span className="w-5 h-5 rounded-full border border-slate-200 block" />
                    )}
                  </>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Retorno exibido após a confirmação */}
      {isConfirmed && (
        <div
          className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed space-y-2 border ${
            isCorrect
              ? 'bg-emerald-50/90 text-emerald-950 border-emerald-200'
              : 'bg-rose-50/90 text-rose-950 border-rose-200'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                <span>Excelente! Resposta correta.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" aria-hidden="true" />
                <span>Resposta incorreta. Veja a correção:</span>
              </>
            )}
          </div>
          <div className="text-xs text-slate-700 border-t border-slate-200/60 pt-2">
            <strong className="font-semibold text-slate-900">Explicação: </strong>
            {currentQuestion.explanation}
          </div>
        </div>
      )}

      {/* Botões de ação: confirmar resposta, avançar ou ver resultado */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <span className="text-xs text-slate-500 font-medium">
          {!isConfirmed
            ? selectedOption === null
              ? 'Selecione uma alternativa para habilitar a confirmação.'
              : 'Clique em confirmar para avaliar sua resposta.'
            : isLastQuestion
            ? 'Última questão respondida. Veja seu resultado!'
            : 'Resposta conferida. Prossiga para a próxima.'}
        </span>

        {!isConfirmed ? (
          <button
            type="button"
            disabled={selectedOption === null}
            onClick={handleConfirmAnswer}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
          >
            Confirmar resposta
          </button>
        ) : !isLastQuestion ? (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
          >
            <span>Próxima questão</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleFinishQuestionnaire}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-hidden min-h-[44px]"
          >
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            <span>Ver resultado final</span>
          </button>
        )}
      </div>
    </div>
  );
};
