import React, { useState } from 'react';
import {
  Award,
  RotateCcw,
  FileCheck,
  BarChart3,
  BookOpen
} from 'lucide-react';
import { AssessmentResult, NavigationSection } from '../types';
import { FINAL_ASSESSMENT_QUESTIONS } from '../data/assessmentsData';
import { InteractiveQuestionnaireRunner } from '../components/educational/InteractiveQuestionnaireRunner';

interface FinalAssessmentPageProps {
  savedResult: AssessmentResult | null;
  onSaveResult: (result: AssessmentResult) => void;
  onNavigate: (section: NavigationSection) => void;
}

export const FinalAssessmentPage: React.FC<FinalAssessmentPageProps> = ({
  savedResult,
  onSaveResult,
  onNavigate
}) => {
  const [currentResult, setCurrentResult] = useState<AssessmentResult | null>(savedResult);
  const [isTakingTest, setIsTakingTest] = useState<boolean>(!savedResult);

  const handleAssessmentComplete = (
    score: number,
    totalQuestions: number,
    answers: Record<string, number>
  ) => {
    const percentage = Math.round((score / totalQuestions) * 100);

    let levelLabel = 'Conhecimento em Construção';
    let summaryFeedback =
      'Você concluiu a avaliação! Recomendamos revisar os módulos do Conecta Digital para reforçar os pontos onde surgiram dúvidas.';

    if (percentage >= 80) {
      levelLabel = 'Habilidade Digital Autônoma';
      summaryFeedback =
        'Parabéns! Você demonstrou excelente domínio das noções práticas de informática, navegação segura, e-mail e serviços Gov.br.';
    } else if (percentage >= 60) {
      levelLabel = 'Habilidade Básica Consolidada';
      summaryFeedback =
        'Muito bom resultado! Você já tem segurança nas rotinas mais comuns e está apto a usar a tecnologia no dia a dia com autonomia.';
    }

    const result: AssessmentResult = {
      type: 'final',
      completedAt: new Date().toISOString(),
      score,
      totalQuestions,
      percentage,
      levelLabel,
      summaryFeedback,
      answers
    };

    setCurrentResult(result);
    setIsTakingTest(false);
    onSaveResult(result);
  };

  const handleStartOrRetake = () => {
    setIsTakingTest(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      {/* Cabeçalho */}
      <div>
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
          Verificação de Aprendizado
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Avaliação final de competências digitais
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          Esta avaliação afere os 5 eixos práticos trabalhados no Conecta Digital. Responda a cada questão com atenção e confirme sua resposta para receber explicações imediatas.
        </p>
      </div>

      {/* Quando a avaliação estiver em andamento ou sendo refeita */}
      {isTakingTest ? (
        <InteractiveQuestionnaireRunner
          title="Avaliação Final de Competências Digitais"
          badgeLabel="Avaliação Final — Todos os Eixos"
          questions={FINAL_ASSESSMENT_QUESTIONS}
          onComplete={handleAssessmentComplete}
          onRetry={handleStartOrRetake}
          onFinishNavigate={() => onNavigate('progress')}
          finishNavigateLabel="Ver histórico no Meu Progresso"
          finishNavigateIcon="progress"
          showCertificatePreview={true}
        />
      ) : currentResult ? (
        /* Resumo do resultado salvo ou da avaliação concluída */
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <Award className="w-7 h-7" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Resultado Oficial Registrado
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  {currentResult.levelLabel} ({currentResult.score} de {currentResult.totalQuestions} acertos)
                </h2>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-blue-600 tabular-nums">
                {currentResult.percentage}%
              </span>
              <span className="text-xs text-slate-500 font-semibold uppercase">de aproveitamento</span>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {currentResult.summaryFeedback}
          </p>

          {/* Prévia da declaração de conclusão */}
          {currentResult.percentage >= 60 && (
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-emerald-900 text-sm">
                    Declaração de Conclusão Prática Disponível
                  </h3>
                  <p className="text-xs text-emerald-900/80 leading-relaxed mt-0.5">
                    Você atingiu a pontuação mínima necessária e demonstrou aptidão nas habilidades fundamentais de inclusão digital.
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">
                Aptidão Verificada
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={handleStartOrRetake}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Refazer avaliação</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('learn')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Revisar módulos</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('progress')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
              >
                <BarChart3 className="w-4 h-4" aria-hidden="true" />
                <span>Ver no Meu Progresso</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
