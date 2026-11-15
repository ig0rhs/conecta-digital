import React from 'react';
import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  BookOpen,
  Users,
  Lightbulb,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { NavigationSection } from '../types';

interface AboutPageProps {
  onNavigate: (section: NavigationSection) => void;
  onOpenPrivacyModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenPrivacyModal }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Cabeçalho e apresentação */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
          <span>Projeto de Extensão & Cidadania Digital</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Sobre o Conecta Digital
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          O <strong>Conecta Digital</strong> é uma plataforma educacional desenvolvida para promover a inclusão digital e a cidadania, capacitando pessoas com pouca ou nenhuma intimidade com computadores e internet para que desenvolvam autonomia em suas vidas práticas.
        </p>
      </div>

      {/* Pilares principais */}
      <section aria-labelledby="pillars-heading" className="space-y-4">
        <h3 id="pillars-heading" className="text-xl font-bold text-slate-900">
          Nossos pilares fundamentais
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Acesso Universal e Gratuito
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O conhecimento digital é um direito fundamental. Todo o material do Conecta Digital é aberto, sem custos e sem exigência de assinaturas ou cadastros complexos.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Segurança e Privacidade
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Aprender com segurança é nossa maior prioridade. Não coletamos dados pessoais sensíveis e enfatizamos em todos os módulos como evitar fraudes e golpes virtuais.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
              <Lightbulb className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Didática Descomplicada
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Eliminamos termos técnicos desnecessários e estrangeirismos difíceis. Nossas lições trazem exemplos práticos da vida real de qualquer família brasileira.
            </p>
          </div>
        </div>
      </section>

      {/* Público-alvo e metodologia */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <h4 className="text-base font-bold text-slate-900">
              A quem se destina a plataforma?
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            O Conecta Digital foi concebido para atender:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Adultos e idosos que desejam usar computadores sem depender de familiares.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Cidadãos em busca de emprego que necessitam enviar currículos e documentos por e-mail.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Pessoas que necessitam acessar serviços essenciais como Gov.br, Meu INSS e Carteira de Trabalho Digital.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <h4 className="text-base font-bold text-slate-900">
              Metodologia de Aprendizagem
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A estrutura pedagógica foi desenhada em 5 blocos progressivos:
          </p>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
            <li><strong>O Computador:</strong> Hardware físico, cliques do mouse, teclado e pastas.</li>
            <li><strong>Internet:</strong> Navegadores, buscas no Google e páginas favoritas.</li>
            <li><strong>E-mail:</strong> Envio de mensagens formais e arquivos anexados.</li>
            <li><strong>Segurança:</strong> Senhas fortes e identificação de links suspeitos.</li>
            <li><strong>Cidadania:</strong> Plataforma Gov.br e certidões públicas.</li>
          </ol>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section aria-labelledby="faq-heading" className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
          <h3 id="faq-heading" className="text-xl font-bold text-slate-900">
            Perguntas Frequentes (Dúvidas comuns)
          </h3>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <h5 className="font-bold text-sm text-slate-900 mb-1">
              Preciso pagar alguma taxa ou mensalidade?
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Não. O Conecta Digital é um projeto educacional totalmente gratuito. Nenhum valor jamais será cobrado para acessar qualquer lição ou avaliação.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <h5 className="font-bold text-sm text-slate-900 mb-1">
              É necessário criar conta ou fornecer meu CPF para estudar?
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Não. Você não precisa criar uma conta nem informar CPF para utilizar a plataforma. O progresso de leitura e questionários fica armazenado localmente no navegador do dispositivo utilizado, sem sincronização com outros aparelhos.
            </p>
            {onOpenPrivacyModal && (
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Consultar aviso detalhado de privacidade e dados locais</span>
              </button>
            )}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <h5 className="font-bold text-sm text-slate-900 mb-1">
              Tenho receio de estragar o computador clicando em algo errado. O que fazer?
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Esse é o medo mais frequente de quem está começando, mas é um mito! O computador é projetado para avisar antes de qualquer alteração importante. No Módulo 1 ensinamos exatamente como explorar sem qualquer receio.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <h5 className="font-bold text-sm text-slate-900 mb-1">
              Como começar os estudos agora?
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Basta clicar no botão abaixo ou acessar a aba "Aprender" no menu lateral. Você pode iniciar diretamente pelo Módulo 1 (Conhecendo o computador) e seguir a trilha no seu próprio ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para ação no final da página */}
      <div className="p-6 rounded-2xl bg-blue-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h4 className="text-lg font-bold">Pronto para dar o próximo passo?</h4>
          <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
            Comece hoje mesmo a transformar sua relação com o mundo digital.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('learn')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-white text-blue-700 hover:bg-blue-50 transition-colors shadow-xs shrink-0 self-start sm:self-auto min-h-[44px] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span>Acessar os módulos de estudo</span>
        </button>
      </div>
    </div>
  );
};
