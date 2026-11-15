import React from 'react';
import { Menu, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { NavigationSection } from '../types';

interface NavbarProps {
  currentSection: NavigationSection;
  onOpenSidebar: () => void;
  onContinueLearning: () => void;
  completedModulesCount: number;
  totalModulesCount: number;
}

const SECTION_TITLES: Record<NavigationSection, { title: string; subtitle: string }> = {
  home: { title: 'Início', subtitle: 'Visão geral do aprendizado' },
  learn: { title: 'Aprender', subtitle: 'Módulos e lições práticas' },
  progress: { title: 'Meu progresso', subtitle: 'Acompanhe suas conquistas' },
  'final-assessment': { title: 'Avaliação final', subtitle: 'Verificação de aprendizado' },
  about: { title: 'Sobre o projeto', subtitle: 'Propósito, metodologia e inclusão' }
};

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onOpenSidebar,
  onContinueLearning,
  completedModulesCount,
  totalModulesCount
}) => {
  const currentInfo = SECTION_TITLES[currentSection] || SECTION_TITLES.home;

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-18 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      {/* Área esquerda: menu para dispositivos móveis e título de navegação */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="p-2 -ml-2 text-slate-700 hover:text-slate-900 rounded-lg lg:hidden hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white">
            <Compass className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="font-bold text-slate-900 text-base">Conecta Digital</span>
        </div>

        {/* Caminho de navegação para desktop */}
        <div className="hidden lg:flex items-center gap-2 text-sm">
          <span className="font-semibold text-slate-500">Conecta Digital</span>
          <span className="text-slate-300">/</span>
          <h1 className="font-bold text-slate-900 text-base">{currentInfo.title}</h1>
        </div>
      </div>

      {/* Área direita: ação e status do progresso */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Indicador de conclusão do módulo */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
          <span>
            <strong className="font-bold tabular-nums text-slate-900">{completedModulesCount}</strong> de{' '}
            <strong className="font-bold tabular-nums text-slate-900">{totalModulesCount}</strong> módulos concluídos
          </span>
        </div>

        {/* Botão de ação principal */}
        {currentSection !== 'learn' && (
          <button
            type="button"
            onClick={onContinueLearning}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden min-h-[40px] sm:min-h-[44px]"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>Continuar aprendendo</span>
          </button>
        )}
      </div>
    </header>
  );
};
