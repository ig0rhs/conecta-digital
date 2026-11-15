import {
  AssessmentQuestion,
  AssessmentResult,
  CategoryScore
} from '../types';
import { CATEGORIES_LIST } from '../data/assessmentsData';

/**
 * Calcula o resultado da avaliação final.
 */
export function calculateAssessmentResult(
  type: 'final',
  answers: Record<string, number>,
  questions: AssessmentQuestion[]
): AssessmentResult {
  let score = 0;
  const categoryScores: Record<string, CategoryScore> = {};

  // Inicializa os contadores por categoria
  CATEGORIES_LIST.forEach((cat) => {
    categoryScores[cat.category] = {
      category: cat.category,
      moduleId: cat.moduleId,
      correct: 0,
      total: 0,
      percentage: 0
    };
  });

  // Calcula as pontuações por questão e categoria
  questions.forEach((q) => {
    const selectedAnswer = answers[q.id];
    const isCorrect = selectedAnswer === q.correctAnswer;

    if (categoryScores[q.category]) {
      categoryScores[q.category].total += 1;
      if (isCorrect) {
        categoryScores[q.category].correct += 1;
        score += 1;
      }
    } else {
      categoryScores[q.category] = {
        category: q.category,
        moduleId: q.moduleId,
        correct: isCorrect ? 1 : 0,
        total: 1,
        percentage: 0
      };
      if (isCorrect) score += 1;
    }
  });

  // Calcula os percentuais por categoria
  Object.keys(categoryScores).forEach((catKey) => {
    const cat = categoryScores[catKey];
    cat.percentage = cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 0;
  });

  const totalQuestions = questions.length;
  const incorrectCount = totalQuestions - score;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  let levelLabel = 'Em Desenvolvimento Prático';
  let summaryFeedback =
    'Você concluiu a avaliação final e deu passos importantes na sua inclusão digital. Recomendamos revisar os módulos em que teve mais dúvidas para reforçar sua confiança.';

  if (percentage >= 80) {
    levelLabel = 'Autonomia Digital Avançada';
    summaryFeedback =
      'Excelente desempenho! Você demonstrou pleno domínio das competências essenciais de informática, navegação web, e-mail, segurança digital e serviços públicos.';
  } else if (percentage >= 60) {
    levelLabel = 'Autonomia Básica Consolidada';
    summaryFeedback =
      'Muito bom resultado! Você adquiriu as habilidades fundamentais para utilizar o computador, a internet e serviços Gov.br com independência no seu cotidiano.';
  }

  return {
    type: 'final',
    completedAt: new Date().toISOString(),
    score,
    incorrectCount,
    totalQuestions,
    percentage,
    levelLabel,
    summaryFeedback,
    categoryScores,
    answers
  };
}
