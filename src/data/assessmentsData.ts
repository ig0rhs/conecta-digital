import { AssessmentQuestion } from '../types';

export const FINAL_ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // 1. Conhecendo o computador (Q1 e Q2)
  {
    id: 'fin-q1',
    order: 1,
    category: 'Conhecendo o computador',
    moduleId: 'modulo-1',
    question: 'Seu Antônio comprou um computador e quer saber em qual categoria se encaixam o navegador Google Chrome e o editor de texto instalados nele:',
    options: [
      'São exemplos de Software (programas e aplicativos lógicos que executam tarefas).',
      'São peças de Hardware que podem ser tocadas com as mãos.',
      'São apenas tipos de cabos elétricos que ligam a tela na tomada.',
      'São aparelhos periféricos semelhantes ao mouse e à impressora.'
    ],
    correctAnswer: 0,
    explanation: 'Navegadores, editores de texto e sistemas operacionais são instruções lógicas e programas de computador, classificados como software.'
  },
  {
    id: 'fin-q2',
    order: 2,
    category: 'Conhecendo o computador',
    moduleId: 'modulo-1',
    question: 'Ao selecionar um trecho de texto ou arquivo no computador, quais atalhos de teclado são usados, respectivamente, para COPIAR e DEPOIS COLAR esse conteúdo?',
    options: [
      'Ctrl + C para copiar e Ctrl + V para colar.',
      'Ctrl + A para copiar e Ctrl + Z para colar.',
      'Alt + F4 para copiar e Enter para colar.',
      'Shift + Del para copiar e Barra de Espaço para colar.'
    ],
    correctAnswer: 0,
    explanation: 'Ctrl+C é o atalho universal para copiar um elemento para a área de transferência, e Ctrl+V insere o item copiado no local apontado.'
  },

  // 2. Internet e navegação (Q3 e Q4)
  {
    id: 'fin-q3',
    order: 3,
    category: 'Internet e navegação',
    moduleId: 'modulo-2',
    question: 'O que é um Navegador Web (como Google Chrome, Microsoft Edge ou Mozilla Firefox)?',
    options: [
      'É a rede física de cabos submarinos que conecta os continentes.',
      'É o programa utilizado no computador ou celular para abrir e visualizar páginas da internet.',
      'É a empresa de energia elétrica que fornece eletricidade para o computador.',
      'É um tipo especial de teclado com letras coloridas.'
    ],
    correctAnswer: 1,
    explanation: 'O navegador (browser) é a aplicação que interpreta o código das páginas e permite que você veja fotos, leia textos e navegue por sites na web.'
  },
  {
    id: 'fin-q4',
    order: 4,
    category: 'Internet e navegação',
    moduleId: 'modulo-2',
    question: 'Ao baixar arquivos da internet, qual cuidado preventivo ajuda a evitar que seu computador seja infectado por vírus?',
    options: [
      'Desligar o monitor sempre que abrir qualquer site novo.',
      'Evitar abrir arquivos com extensões desconhecidas ou executáveis (.exe) vindos de sites não confiáveis.',
      'Apenas baixar arquivos que estejam com todas as letras em maiúsculo.',
      'Clicar em todos os anúncios piscantes que prometem limpar o computador de graça.'
    ],
    correctAnswer: 1,
    explanation: 'Arquivos com terminação ".exe" são programas executáveis. Baixá-los de fontes duvidosas é o principal caminho para infecção por vírus e programas espiões.'
  },

  // 3. E-mail e comunicação (Q5 e Q6)
  {
    id: 'fin-q5',
    order: 5,
    category: 'E-mail e comunicação',
    moduleId: 'modulo-3',
    question: 'Ao enviar um currículo em formato PDF por correio eletrônico, qual recurso da ferramenta de e-mail deve ser acionado para anexar o documento?',
    options: [
      'O botão com ícone de clipe de papel (Anexar arquivo).',
      'O botão de excluir mensagem na lixeira.',
      'O campo com o símbolo de arroba (@).',
      'A tecla de barra de espaço pressionada dez vezes seguidas.'
    ],
    correctAnswer: 0,
    explanation: 'O ícone de clipe de papel é o botão padronizado em serviços de e-mail para selecionar arquivos do computador e anexá-los à mensagem.'
  },
  {
    id: 'fin-q6',
    order: 6,
    category: 'E-mail e comunicação',
    moduleId: 'modulo-3',
    question: 'De acordo com as boas práticas de convivência na internet (Netiqueta), qual é o efeito de redigir um e-mail ou mensagem inteira com LETRAS MAIÚSCULAS?',
    options: [
      'Faz o e-mail ser entregue em dobro para o destinatário.',
      'Passa a impressão de agressividade ou de estar GRITANDO com quem lê a mensagem.',
      'Deixa o texto imune a vírus de computador.',
      'É a forma obrigatória exigida por todos os órgãos públicos.'
    ],
    correctAnswer: 1,
    explanation: 'Na comunicação digital, textos totalmente em maiúsculas equivalem a falar aos gritos, gerando ruído e desconforto na conversa.'
  },

  // 4. Segurança digital (Q7 e Q8)
  {
    id: 'fin-q7',
    order: 7,
    category: 'Segurança digital',
    moduleId: 'modulo-4',
    question: 'O que é a Autenticação em Duas Etapas (ou verificação em dois fatores - 2FA) e qual é o seu principal benefício?',
    options: [
      'É um método para o computador digitar a senha duas vezes sozinho.',
      'É uma camada extra de proteção que exige confirmação além da senha (como um código no celular), impedindo invasões mesmo com a senha vazada.',
      'É uma cobrança mensal feita pelos bancos para permitir acesso aos fins de semana.',
      'É a obrigação de ter dois computadores ligados ao mesmo tempo.'
    ],
    correctAnswer: 1,
    explanation: 'A verificação em duas etapas combina algo que você sabe (senha) com algo que você tem (código temporário no celular), bloqueando invasões externas.'
  },
  {
    id: 'fin-q8',
    order: 8,
    category: 'Segurança digital',
    moduleId: 'modulo-4',
    question: 'Você recebe uma mensagem no celular com a foto da logomarca do seu banco dizendo: "Sua conta será bloqueada hoje! Clique urgente neste link para atualizar seu cadastro". Qual é o procedimento seguro?',
    options: [
      'Clicar no link imediatamente e preencher o número do cartão com a senha de 4 dígitos.',
      'Não clicar no link, não fornecer dados e abrir o aplicativo oficial do banco ou ligar no número do verso do cartão para checar.',
      'Encaminhar o link para todos os seus grupos de família.',
      'Mandar uma mensagem com uma foto do seu documento de identidade (RG).'
    ],
    correctAnswer: 1,
    explanation: 'Mensagens alarmistas com links são a estratégia clássica de phishing (golpe virtual). Bancos legítimos não solicitam senhas ou dados por links em mensagens SMS ou WhatsApp.'
  },

  // 5. Serviços digitais (Q9 e Q10)
  {
    id: 'fin-q9',
    order: 9,
    category: 'Serviços digitais',
    moduleId: 'modulo-5',
    question: 'Como um cidadão brasileiro pode ter certeza de que está acessando uma página oficial legítima da administração pública pela internet?',
    options: [
      'Verificando se o endereço do site termina obrigatoriamente com o domínio oficial ".gov.br" (ou ".jus.br" para a Justiça).',
      'Conferindo se o site possui muitas propagandas piscantes coloridas.',
      'Verificando se o site tem a terminação comercial ".com" ou ".xyz".',
      'Acreditando no primeiro resultado que tiver a palavra "Patrocinado" no Google.'
    ],
    correctAnswer: 0,
    explanation: 'O domínio ".gov.br" é restrito e exclusivo de entidades públicas brasileiras, assegurando a autenticidade e a gratuidade dos serviços governamentais.'
  },
  {
    id: 'fin-q10',
    order: 10,
    category: 'Serviços digitais',
    moduleId: 'modulo-5',
    question: 'Ao finalizar um agendamento de atendimento presencial ou uma solicitação de benefício em um portal de serviços públicos, qual ação é indispensável?',
    options: [
      'Salvar ou anotar o Número de Protocolo ou comprovante em PDF gerado pelo sistema.',
      'Apagar imediatamente o navegador de internet do computador.',
      'Trocar o monitor do computador por um modelo mais recente.',
      'Divulgar sua senha da conta Gov.br nos comentários de redes sociais.'
    ],
    correctAnswer: 0,
    explanation: 'O protocolo ou comprovante emitido é o seu documento comprobatório oficial de que a solicitação foi registrada no sistema governamental.'
  }
];

export const CATEGORIES_LIST: Array<{
  category: string;
  moduleId: string;
  title: string;
}> = [
  { category: 'Conhecendo o computador', moduleId: 'modulo-1', title: 'Conhecendo o computador' },
  { category: 'Internet e navegação', moduleId: 'modulo-2', title: 'Internet e navegação' },
  { category: 'E-mail e comunicação', moduleId: 'modulo-3', title: 'E-mail e comunicação' },
  { category: 'Segurança digital', moduleId: 'modulo-4', title: 'Segurança digital' },
  { category: 'Serviços digitais', moduleId: 'modulo-5', title: 'Serviços digitais' }
];
