export type ModuleStatus = 'not_started' | 'in_progress' | 'completed';

export interface LessonContentBlock {
  type: 'paragraph' | 'tip' | 'stepList' | 'warning' | 'highlight' | 'visualExample' | 'comparison';
  text?: string;
  items?: string[];
  title?: string;
  leftTitle?: string;
  leftContent?: string[];
  rightTitle?: string;
  rightContent?: string[];
  caption?: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  summary: string;
  duration: string;
  keyTakeaway: string;
  blocks: LessonContentBlock[];
}

export interface ActivityOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface OrderStepItem {
  id: string;
  text: string;
  correctPosition: number;
}

export interface PracticalActivity {
  id: string;
  order: number;
  title: string;
  description: string;
  scenarioText?: string;
  type: 'choice' | 'scenario' | 'true-false' | 'step-order';
  question: string;
  options?: ActivityOption[];
  stepItems?: OrderStepItem[];
  explanation: string;
}

export interface ModuleSummary {
  headline: string;
  keyTakeaways: string[];
  practicalHabit: string;
  encouragement: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizAttempt {
  moduleId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  passed: boolean;
}

export interface LearningModule {
  id: string;
  order: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  introduction: string;
  iconName: 'Monitor' | 'Globe' | 'Mail' | 'ShieldCheck' | 'Smartphone';
  estimatedTime: string;
  level: 'Iniciante' | 'Básico' | 'Intermediário';
  learningObjectives: string[];
  lessons: Lesson[];
  practicalActivities: PracticalActivity[];
  summary: ModuleSummary;
  quiz: QuizQuestion[];
}

export interface AssessmentQuestion {
  id: string;
  order?: number;
  category: string;
  moduleId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CategoryScore {
  category: string;
  moduleId: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface AssessmentResult {
  type: 'final';
  completedAt: string;
  score: number;
  incorrectCount?: number;
  totalQuestions: number;
  percentage: number;
  levelLabel: string;
  summaryFeedback: string;
  categoryScores?: Record<string, CategoryScore>;
  answers: Record<string, number>;
}

export interface PracticalActivityState {
  activityId: string;
  isCompleted: boolean;
  selectedOptionId?: string | null;
  orderedSteps?: string[];
  isStepOrderChecked?: boolean;
  isStepOrderCorrect?: boolean;
  customData?: Record<string, unknown>;
  updatedAt?: string;
}

export interface UserProgress {
  completedModuleIds: string[];
  inProgressModuleIds: string[];
  completedLessonIds: string[];
  completedActivityIds: string[];
  activityAnswers?: Record<string, PracticalActivityState>;
  currentModuleId: string | null;
  lastVisitedAt: string;
  finalAssessmentResult: AssessmentResult | null;
  quizAttempts: Record<string, QuizAttempt>;
}

export type NavigationSection = 
  | 'home' 
  | 'learn' 
  | 'progress' 
  | 'final-assessment' 
  | 'about';
