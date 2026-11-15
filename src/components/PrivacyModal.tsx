import React, { useEffect } from 'react';
import {
  ShieldCheck,
  HardDrive,
  AlertTriangle,
  FileSpreadsheet,
  Trash2,
  X,
  CheckCircle2
} from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-7 max-h-[90vh] overflow-y-auto space-y-6">
        {/* Botão de fechar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Fechar aviso de privacidade"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-start gap-3.5 pr-8">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
              Transparência & Proteção de Dados
            </span>
            <h2 id="privacy-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              Aviso de Privacidade e Dados Locais
            </h2>
          </div>
        </div>

        {/* Princípio 1: dados coletados e dados que não são coletados */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>O que a plataforma armazena e o que NÃO coleta</span>
          </h3>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
            <p>
              O <strong>Conecta Digital</strong> segue o princípio da <em>minimização estrita de dados</em>:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-slate-700">
              <li>
                <strong>O que é salvo:</strong> Apenas o seu progresso pedagógico (módulos iniciados, lições concluídas, atividades realizadas, questionários e pontuação na Avaliação Final).
              </li>
              <li>
                <strong>O que NÃO é coletado:</strong> Não solicitamos nem armazenamos nomes completos, CPF, RG, telefone, senhas pessoais, e-mails reais ou dados bancários.
              </li>
            </ul>
          </div>
        </div>

        {/* Princípio 2: armazenamento local e limitações do LocalStorage */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span>Onde as informações ficam guardadas (Armazenamento Local)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            O progresso de aprendizagem é mantido no armazenamento local do navegador deste dispositivo, por meio do recurso tecnológico padrão <strong className="font-semibold text-slate-800">localStorage</strong>. A aplicação não envia esse progresso para servidores externos nem utiliza um banco de dados remoto. Para exibir a tipografia do projeto, a página também solicita arquivos de fonte ao Google Fonts; essa conexão pode transmitir dados técnicos, como o endereço IP e informações do navegador.
          </p>
        </div>

        {/* Princípio 3: aviso claro sobre as limitações */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
            <span>Limitações importantes do armazenamento no navegador</span>
          </div>
          <ul className="space-y-1 text-xs text-amber-800 leading-relaxed list-disc list-inside">
            <li>
              <strong>Sem sincronização em nuvem:</strong> O progresso feito em um computador ou celular não aparecerá automaticamente em outro aparelho.
            </li>
            <li>
              <strong>Limpeza de histórico:</strong> Se você limpar o cache e os dados de navegação do navegador, ou utilizar a navegação em aba anônima, o progresso local poderá ser apagado.
            </li>
            <li>
              <strong>Não é autenticação por senha:</strong> O armazenamento do navegador serve para manter a continuidade didática no dispositivo e não oferece conta com senha ou proteção centralizada contra acesso de outras pessoas ao mesmo aparelho físico.
            </li>
          </ul>
        </div>

        {/* Princípio 4: controle do usuário */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-slate-700" aria-hidden="true" />
            <span>Seu controle sobre as informações</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <strong className="font-bold text-slate-900 block">Armazenamento Local</strong>
              <span>
                O histórico pedagógico permanece no armazenamento local deste navegador e não é enviado para um banco de dados da aplicação.
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <strong className="font-bold text-slate-900 block">Exclusão e Limpeza</strong>
              <span>
                É possível limpar os dados armazenados a qualquer momento limpando os dados de navegação do seu próprio navegador.
              </span>
            </div>
          </div>
        </div>

        {/* Ações do rodapé */}
        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Conecta Digital — Plataforma Pública e Sem Fins Lucrativos
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs min-h-[44px] flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            Entendi, fechar aviso
          </button>
        </div>
      </div>
    </div>
  );
};
