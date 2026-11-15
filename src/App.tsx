import React, { useState, useEffect } from 'react';
import { NavigationSection } from './types';
import { MODULES_DATA } from './data/modulesData';
import { useUserProgress } from './hooks/useUserProgress';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { DashboardPage } from './pages/DashboardPage';
import { LearnPage } from './pages/LearnPage';
import { ProgressPage } from './pages/ProgressPage';
import { FinalAssessmentPage } from './pages/FinalAssessmentPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyModal } from './components/PrivacyModal';

function parseHashRoute(): { section: NavigationSection; moduleId: string | null } {
  if (typeof window === 'undefined') return { section: 'home', moduleId: null };
  const validSections: NavigationSection[] = [
    'home',
    'learn',
    'progress',
    'final-assessment',
    'about'
  ];

  let rawRoute = window.location.hash.replace(/^#\/?/, '');
  if (!rawRoute && window.location.pathname && window.location.pathname !== '/') {
    rawRoute = window.location.pathname.replace(/^\/?/, '');
  }

  const [sec, mod] = rawRoute.split('/');

  if (validSections.includes(sec as NavigationSection)) {
    return {
      section: sec as NavigationSection,
      moduleId: mod || null
    };
  }

  return { section: 'home', moduleId: null };
}

export default function App() {
  const initialRoute = parseHashRoute();
  const [currentSection, setCurrentSection] = useState<NavigationSection>(initialRoute.section);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(initialRoute.moduleId);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);

  const {
    progress,
    totalModulesCount,
    completedModulesCount,
    progressPercentage,
    isModuleCompleted,
    isModuleInProgress,
    isLessonCompleted,
    nextRecommendedModule,
    markLessonComplete,
    markActivityComplete,
    saveActivityState,
    resetActivityState,
    activityAnswers,
    startModule,
    saveAssessmentResult,
    recordQuizAttempt
  } = useUserProgress();

  // Acompanha mudanças na rota para permitir voltar, avançar e atualizar a página
  useEffect(() => {
    const handleHashChange = () => {
      const { section, moduleId } = parseHashRoute();
      setCurrentSection(section);
      setSelectedModuleId(moduleId);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const syncHash = (section: NavigationSection, moduleId: string | null) => {
    const targetHash =
      section === 'learn' && moduleId
        ? `#/${section}/${moduleId}`
        : `#/${section}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
  };

  const handleNavigate = (section: NavigationSection) => {
    setCurrentSection(section);
    if (section !== 'learn') {
      setSelectedModuleId(null);
      syncHash(section, null);
    } else {
      syncHash(section, selectedModuleId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: string | null) => {
    setSelectedModuleId(moduleId);
    setCurrentSection('learn');
    syncHash('learn', moduleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueLearning = () => {
    const targetModuleId = selectedModuleId || nextRecommendedModule.id;
    setSelectedModuleId(targetModuleId);
    setCurrentSection('learn');
    syncHash('learn', targetModuleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Navegação lateral */}
      <Sidebar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        completedModulesCount={completedModulesCount}
        totalModulesCount={totalModulesCount}
      />

      {/* Área principal do conteúdo */}
      <div className="flex-1 flex flex-col lg:pl-72 transition-all duration-200">
        {/* Barra superior de navegação */}
        <Navbar
          currentSection={currentSection}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onContinueLearning={handleContinueLearning}
          completedModulesCount={completedModulesCount}
          totalModulesCount={totalModulesCount}
        />

        {/* Conteúdo da página */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl w-full mx-auto">
          {currentSection === 'home' && (
            <DashboardPage
              modules={MODULES_DATA}
              completedModulesCount={completedModulesCount}
              totalModulesCount={totalModulesCount}
              progressPercentage={progressPercentage}
              nextRecommendedModule={nextRecommendedModule}
              isModuleCompleted={isModuleCompleted}
              isModuleInProgress={isModuleInProgress}
              completedLessonIds={progress.completedLessonIds}
              onSelectModule={handleSelectModule}
              onNavigate={handleNavigate}
            />
          )}

          {currentSection === 'learn' && (
            <LearnPage
              modules={MODULES_DATA}
              selectedModuleId={selectedModuleId}
              onSelectModule={handleSelectModule}
              isModuleCompleted={isModuleCompleted}
              isModuleInProgress={isModuleInProgress}
              isLessonCompleted={isLessonCompleted}
              completedLessonIds={progress.completedLessonIds}
              completedActivityIds={progress.completedActivityIds}
              activityAnswers={activityAnswers}
              onMarkLessonComplete={markLessonComplete}
              onRecordQuizAttempt={recordQuizAttempt}
              onStartModule={startModule}
              onSaveActivityState={saveActivityState}
              onResetActivityState={resetActivityState}
              onMarkActivityComplete={markActivityComplete}
            />
          )}

          {currentSection === 'progress' && (
            <ProgressPage
              modules={MODULES_DATA}
              progress={progress}
              completedModulesCount={completedModulesCount}
              totalModulesCount={totalModulesCount}
              progressPercentage={progressPercentage}
              onSelectModule={handleSelectModule}
              onNavigate={handleNavigate}
            />
          )}

          {currentSection === 'final-assessment' && (
            <FinalAssessmentPage
              savedResult={progress.finalAssessmentResult}
              onSaveResult={saveAssessmentResult}
              onNavigate={handleNavigate}
            />
          )}

          {currentSection === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
            />
          )}
        </main>

        {/* Rodapé discreto e acessível */}
        <footer className="border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <strong className="font-bold text-slate-700">Conecta Digital</strong>
              <span>—</span>
              <span>Plataforma Comunitária de Inclusão Digital</span>
            </div>

            <div className="flex items-center gap-4 text-slate-500">
              <span>Uso Livre &amp; Gratuito</span>
              <span>·</span>
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-blue-700 transition-colors underline underline-offset-2 cursor-pointer font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                Privacidade &amp; Dados Locais
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Aviso de privacidade e armazenamento local */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
