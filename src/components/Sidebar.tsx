import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Award,
  Info,
  X,
  Compass
} from 'lucide-react';
import { NavigationSection } from '../types';

interface SidebarProps {
  currentSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  isOpen: boolean;
  onClose: () => void;
  completedModulesCount: number;
  totalModulesCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onNavigate,
  isOpen,
  onClose,
  completedModulesCount,
  totalModulesCount
}) => {
  const navItems = [
    {
      id: 'home' as NavigationSection,
      label: 'Início',
      icon: LayoutDashboard,
      description: 'Painel principal'
    },
    {
      id: 'learn' as NavigationSection,
      label: 'Aprender',
      icon: BookOpen,
      description: 'Módulos e lições'
    },
    {
      id: 'progress' as NavigationSection,
      label: 'Meu progresso',
      icon: BarChart3,
      description: 'Estatísticas e conquistas'
    },
    {
      id: 'final-assessment' as NavigationSection,
      label: 'Avaliação final',
      icon: Award,
      description: 'Teste suas habilidades'
    },
    {
      id: 'about' as NavigationSection,
      label: 'Sobre o projeto',
      icon: Info,
      description: 'Inclusão e metodologia'
    }
  ];

  const handleItemClick = (section: NavigationSection) => {
    onNavigate(section);
    onClose();
  };

  return (
    <>
      {/* Fundo sobreposto no modo móvel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Contêiner da navegação lateral */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-72 bg-slate-900 text-slate-100 transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Navegação principal da plataforma"
      >
        {/* Cabeçalho da marca */}
        <div className="flex items-center justify-between h-18 px-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white shadow-xs">
              <Compass className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-tight">
                Conecta Digital
              </span>
              <span className="text-xs text-slate-400 block font-normal">
                Inclusão Digital
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg lg:hidden hover:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Fechar menu de navegação"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Links de navegação */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-lg text-left text-sm font-medium transition-colors min-h-[44px] ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`}
                  aria-hidden="true"
                />
                <div className="flex-1 truncate">
                  <div className="font-semibold leading-tight">{item.label}</div>
                  <div className={`text-xs truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Resumo rápido do progresso */}
        <div className="p-4 mx-4 mb-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
          <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-medium">
            <span>Módulos concluídos</span>
            <span className="font-bold text-white tabular-nums">
              {completedModulesCount}/{totalModulesCount}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
              style={{
                width: `${totalModulesCount > 0 ? (completedModulesCount / totalModulesCount) * 100 : 0}%`
              }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-normal">
            Estude no seu ritmo, sem pressa e quantas vezes precisar.
          </p>
        </div>

        {/* Nota sobre acessibilidade e comunidade */}
        <div className="px-6 py-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Iniciativa Comunitária</span>
          <span className="text-slate-400 font-medium">100% Gratuito</span>
        </div>
      </aside>
    </>
  );
};
