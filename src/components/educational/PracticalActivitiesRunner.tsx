import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ShieldAlert,
  BookOpen
} from 'lucide-react';
import { PracticalActivity, PracticalActivityState } from '../../types';

interface PracticalActivitiesRunnerProps {
  moduleOrder: number;
  moduleTitle: string;
  activities: PracticalActivity[];
  savedStates?: Record<string, PracticalActivityState>;
  onSaveState?: (state: PracticalActivityState) => void;
  onResetState?: (activityId: string) => void;
  onCompleted?: (activityId: string) => void;
  onAllCompleted?: () => void;
}

export const PracticalActivitiesRunner: React.FC<PracticalActivitiesRunnerProps> = ({
  moduleOrder,
  moduleTitle,
  activities,
  savedStates = {},
  onSaveState,
  onResetState,
  onCompleted,
  onAllCompleted
}) => {
  const articleRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const currentActivity = activities[currentIndex];
  const totalQuestions = activities.length;

  // Sincroniza o estado quando o índice, as atividades ou os dados salvos mudam
  useEffect(() => {
    if (!currentActivity) return;

    const saved = savedStates[currentActivity.id];
    if (saved && saved.isCompleted && saved.selectedOptionId) {
      setSelectedOptionId(saved.selectedOptionId);
      setIsConfirmed(true);
    } else if (!saved?.isCompleted) {
      setSelectedOptionId(null);
      setIsConfirmed(false);
    }
  }, [currentIndex, currentActivity?.id, savedStates]);

  if (!currentActivity) {
    return null;
  }
  const handleSelectOption = (optionId: string) => {
    if (isConfirmed) return;
    setSelectedOptionId(optionId);
  };
  const handleConfirmAnswer = () => {
    if (!selectedOptionId || isConfirmed || !currentActivity.options) return;

    setIsConfirmed(true);

    const newState: PracticalActivityState = {
      activityId: currentActivity.id,
      isCompleted: true,
      selectedOptionId: selectedOptionId
    };

    if (onSaveState) onSaveState(newState);
    if (onCompleted) onCompleted(currentActivity.id);
  };
  const handleJumpToQuestion = (targetIndex: number) => {
    if (targetIndex >= 0 && targetIndex < totalQuestions) {
      setCurrentIndex(targetIndex);
      const targetAct = activities[targetIndex];
      const targetSaved = targetAct ? savedStates[targetAct.id] : null;
      if (targetSaved && targetSaved.isCompleted && targetSaved.selectedOptionId) {
        setSelectedOptionId(targetSaved.selectedOptionId);
        setIsConfirmed(true);
      } else {
        setSelectedOptionId(null);
        setIsConfirmed(false);
      }

      // Mantém a questão visível sem deslocar a página até o topo
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        const navbarOffset = 76;
        // Ajusta a posição suavemente se o início do cartão estiver oculto pela barra fixa ou fora da área visível
        if (rect.top < navbarOffset || rect.top > window.innerHeight * 0.45) {
          const targetY = window.scrollY + rect.top - navbarOffset;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      }
    }
  };
  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      handleJumpToQuestion(currentIndex - 1);
    }
  };
  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      handleJumpToQuestion(currentIndex + 1);
    }
  };
  const handleRestartActivities = () => {
    activities.forEach((act) => {
      if (onResetState) {
        onResetState(act.id);
      }
    });
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsConfirmed(false);

    if (articleRef.current) {
      const rect = articleRef.current.getBoundingClientRect();
      const navbarOffset = 76;
      if (rect.top < navbarOffset) {
        const targetY = window.scrollY + rect.top - navbarOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }
  };
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const selectedOption = currentActivity.options?.find((o) => o.id === selectedOptionId);
  const isCorrect = isConfirmed && selectedOption?.isCorrect;
  const isLastActivity = currentIndex === totalQuestions - 1;
  const allActivitiesDone = activities.length > 0 && activities.every((act) => savedStates[act.id]?.isCompleted);

  return (
    <article
      ref={articleRef}
      className="scroll-mt-24 max-w-2xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6"
    >
      {/* Aviso de atividade concluída */}
      {allActivitiesDone && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>
              Atividades concluídas. Suas alternativas escolhidas estão salvas abaixo para consulta.
            </span>
          </div>
          <button
            type="button"
            onClick={handleRestartActivities}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 shrink-0 cursor-pointer"
          >
            Refazer
          </button>
        </div>
      )}

      {/* Cabeçalho do questionário e barra de progresso */}
      <div className="space-y-3 pb-4 border-b border-slate-100">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
              Atividades Práticas — Módulo {moduleOrder}: {moduleTitle}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {currentActivity.title}
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

        {/* Seletor de questões */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          {activities.map((act, idx) => {
            const isActDone = !!savedStates[act.id]?.isCompleted;
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => handleJumpToQuestion(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all min-h-[32px] flex items-center gap-1.5 cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : isActDone
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title={`Ir para questão ${idx + 1}`}
              >
                <span>Questão {idx + 1}</span>
                {isActDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Descrição */}
      {currentActivity.description && (
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {currentActivity.description}
        </p>
      )}

      {/* Cenário opcional */}
      {currentActivity.scenarioText && (
        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs sm:text-sm space-y-1.5 border border-slate-800">
          <div className="flex items-center gap-2 font-bold text-blue-400 text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Exemplo para análise:</span>
          </div>
          <div className="whitespace-pre-line leading-relaxed text-slate-200">
            {currentActivity.scenarioText}
          </div>
        </div>
      )}

      {/* Enunciado da questão */}
      <div className="space-y-2">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {currentActivity.question}
        </h3>
      </div>

      {/* Alternativas de múltipla escolha com resposta única */}
      {currentActivity.options && (
        <div className="space-y-3" role="radiogroup" aria-label={currentActivity.question}>
          {currentActivity.options.map((option, optIdx) => {
            const isSelected = selectedOptionId === option.id;

            let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700 hover:border-slate-300';

            if (isConfirmed) {
              if (option.isCorrect) {
                optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
              } else if (isSelected && !option.isCorrect) {
                optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through opacity-90';
              } else {
                optionStyle = 'bg-white border-slate-200 opacity-50 text-slate-400';
              }
            } else if (isSelected) {
              optionStyle = 'bg-blue-50/80 border-blue-600 text-blue-900 font-medium ring-1 ring-blue-600 shadow-2xs';
            }

            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={isConfirmed}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base transition-all flex items-start justify-between gap-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[48px] ${optionStyle}`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 shrink-0 mt-0.5">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="leading-relaxed flex-1">{option.text}</span>
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
                      {option.isCorrect && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                          <span>Resposta correta</span>
                        </span>
                      )}
                      {isSelected && !option.isCorrect && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700">
                          <AlertCircle className="w-4 h-4 text-rose-600" aria-hidden="true" />
                          <span>Sua resposta</span>
                        </span>
                      )}
                      {!isSelected && !option.isCorrect && (
                        <span className="w-5 h-5 rounded-full border border-slate-200 block" />
                      )}
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Retorno exibido após a confirmação */}
      {isConfirmed && selectedOption && (
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
                <span>Excelente raciocínio! Resposta correta.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" aria-hidden="true" />
                <span>Resposta incorreta. Veja a correção:</span>
              </>
            )}
          </div>
          {selectedOption.feedback && (
            <p className="leading-relaxed">{selectedOption.feedback}</p>
          )}
          {currentActivity.explanation && (
            <div className="text-xs text-slate-700 border-t border-slate-200/60 pt-2">
              <strong className="font-semibold text-slate-900">Explicação: </strong>
              {currentActivity.explanation}
            </div>
          )}
        </div>
      )}

      {/* Botões de ação: confirmar resposta, avançar ou concluir */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePreviousQuestion}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Questão anterior</span>
            </button>
          )}

          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            {!isConfirmed
              ? !selectedOptionId
                ? 'Selecione uma alternativa para habilitar a confirmação.'
                : 'Clique em confirmar para avaliar sua resposta.'
              : isLastActivity
              ? 'Última atividade respondida e salva com sucesso.'
              : 'Resposta conferida. Prossiga para a próxima atividade.'}
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {!isConfirmed ? (
            <button
              type="button"
              disabled={!selectedOptionId}
              onClick={handleConfirmAnswer}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
            >
              Confirmar resposta
            </button>
          ) : !isLastActivity ? (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden min-h-[44px]"
            >
              <span>Próxima questão</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
};
