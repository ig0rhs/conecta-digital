import { LearningModule } from '../types';

export const MODULES_DATA: LearningModule[] = [
  /* ==========================================================================
     MÓDULO 1: Conhecendo o computador
     ========================================================================== */
  {
    id: 'modulo-1',
    order: 1,
    title: 'Conhecendo o computador',
    shortDescription: 'Conceitos fundamentais de informática: partes do computador, hardware e software, janelas, arquivos, pastas e atalhos essenciais.',
    fullDescription: 'Este módulo foi pensado especialmente para quem está tendo os primeiros contatos com um computador de mesa ou notebook. Você aprenderá como o computador funciona, a diferença entre peças físicas e programas, como manusear o mouse e o teclado com firmeza, e como organizar seus arquivos sem receio.',
    introduction: 'O computador não precisa ser um mistério. Ele é apenas uma ferramenta de trabalho, estudo e lazer que executa tarefas que você comanda. Compreendendo seus componentes e a lógica básica de pastas e janelas, você ganha autonomia para usar qualquer máquina com confiança e sem medo de errar.',
    iconName: 'Monitor',
    estimatedTime: '45 min',
    level: 'Iniciante',
    learningObjectives: [
      'Identificar as partes principais de um computador e a função de cada periférico',
      'Distinguir claramente o que é Hardware (peças físicas) e o que é Software (programas)',
      'Controlar janelas do sistema operacional (minimizar, restaurar e fechar)',
      'Criar, renomear, mover e organizar arquivos e pastas com segurança',
      'Aplicar atalhos úteis do teclado (Ctrl+C, Ctrl+V, Ctrl+Z) para agilizar o trabalho'
    ],
    lessons: [
      {
        id: 'mod1-aula1',
        moduleId: 'modulo-1',
        order: 1,
        title: 'O que é o computador, componentes e Hardware vs. Software',
        summary: 'Entenda como o computador processa informações e aprenda a diferença fundamental entre peças físicas e programas instalados.',
        duration: '15 min',
        keyTakeaway: 'Hardware é tudo o que você pode tocar (a máquina física); software é tudo o que faz a máquina funcionar (os programas e sistemas).',
        blocks: [
          {
            type: 'paragraph',
            text: 'Um computador é uma máquina eletrônica projetada para receber dados, processar essas informações de acordo com instruções prévias e entregar resultados úteis — seja exibir um vídeo, calcular despesas do mês ou imprimir um documento.'
          },
          {
            type: 'comparison',
            title: 'Diferença Fundamental: Hardware vs. Software',
            leftTitle: 'Hardware (A parte física)',
            leftContent: [
              'O monitor ou tela que exibe imagens.',
              'O teclado onde você digita textos e comandos.',
              'O mouse que você move para apontar na tela.',
              'O gabinete (ou corpo do notebook) que guarda o processador e a memória.',
              'Regra de ouro: Se você pode tocar com as mãos, é hardware.'
            ],
            rightTitle: 'Software (A parte lógica / programas)',
            rightContent: [
              'O Sistema Operacional (Windows, Linux, macOS).',
              'O navegador de internet (Google Chrome, Edge).',
              'Programas de edição de texto e planilhas.',
              'Aplicativos de mensagens e visualizadores de fotos.',
              'Regra de ouro: São as instruções e programas que dão utilidade ao hardware.'
            ]
          },
          {
            type: 'highlight',
            title: 'O coração do computador: Processador e Memória',
            text: 'Dentro do gabinete ou notebook trabalham dois componentes vitais:\n• Processador (CPU): É o "cérebro" que faz as contas e executa ordens.\n• Memória RAM: É a mesa de trabalho temporária. Quando você desliga a máquina, ela esvazia.\n• Armazenamento (HD ou SSD): É o armário permanente onde ficam gravadas suas fotos e arquivos mesmo quando o computador está desligado.'
          },
          {
            type: 'tip',
            title: 'Você não vai quebrar o computador com um clique',
            text: 'Muitas pessoas têm receio de mexer no computador por medo de quebrar. O sistema operacional foi feito com travas e sempre pede confirmação antes de apagar arquivos importantes. Explore com curiosidade e calma!'
          }
        ]
      },
      {
        id: 'mod1-aula2',
        moduleId: 'modulo-1',
        order: 2,
        title: 'Periféricos, o Sistema Operacional e Janelas',
        summary: 'Descubra para que servem os periféricos de entrada e saída e domine o controle de janelas na Área de Trabalho.',
        duration: '15 min',
        keyTakeaway: 'Janelas são retângulos na tela onde os programas funcionam; no canto superior direito estão os botões para minimizar (-), maximizar (quadrado) e fechar (X).',
        blocks: [
          {
            type: 'paragraph',
            text: 'Periféricos são todos os aparelhos que conectamos ao computador para colocar informações nele (entrada) ou receber informações dele (saída).'
          },
          {
            type: 'stepList',
            title: 'Os periféricos mais comuns do dia a dia:',
            items: [
              'Teclado e Mouse (Entrada): Enviam seus toques e movimentos para dentro do sistema.',
              'Monitor (Saída): Mostra visualmente o que está acontecendo na máquina.',
              'Impressora (Saída): Passa documentos e fotos digitais para o papel físico.',
              'Caixas de som e Fones (Saída): Reproduzem áudios, músicas e vídeos.',
              'Pen drive (Entrada e Saída): Pequeno dispositivo portátil para transportar arquivos de um computador para outro.'
            ]
          },
          {
            type: 'highlight',
            title: 'A Área de Trabalho (Desktop) e a Barra de Tarefas',
            text: 'Assim que o computador liga, você visualiza a Área de Trabalho — equivalente ao tampo de uma mesa organizada.\n• Barra de Tarefas: Fica na parte inferior e mostra os programas abertos no momento e o relógio.\n• Botão Iniciar: Fica no canto inferior esquerdo e lista todos os programas instalados no computador.'
          },
          {
            type: 'stepList',
            title: 'Os 3 botões mágicos no topo de qualquer janela:',
            items: [
              'Traço horizontal (-): Minimizar. A janela se esconde na barra de tarefas sem fechar o programa.',
              'Quadrado (ou dois quadradinhos): Maximizar / Restaurar. Faz a janela ocupar a tela inteira ou voltar ao tamanho médio.',
              'X em vermelho: Fechar. Encerra o programa. Se houver alterações não salvas, o sistema perguntará se você deseja salvar.'
            ]
          }
        ]
      },
      {
        id: 'mod1-aula3',
        moduleId: 'modulo-1',
        order: 3,
        title: 'Arquivos, pastas, organização e atalhos essenciais',
        summary: 'Aprenda a criar pastas, renomear documentos, organizar a pasta Downloads e utilizar atalhos que economizam tempo.',
        duration: '15 min',
        keyTakeaway: 'Pastas são como gavetas etiquetadas que guardam arquivos agrupados; atalhos como Ctrl+C (copiar) e Ctrl+V (colar) facilitam a rotina.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Entender a diferença entre arquivo e pasta é o segredo para nunca mais perder um documento no computador. Um arquivo é o conteúdo em si (um texto, uma foto, uma música). A pasta é apenas um organizador amarelo que abriga vários arquivos juntos.'
          },
          {
            type: 'stepList',
            title: 'Como criar e renomear uma nova pasta passo a passo:',
            items: [
              'Passo 1: Clique com o botão direito do mouse em uma área vazia da pasta Documentos ou Área de Trabalho.',
              'Passo 2: No menu que abrir, aponte a seta para "Novo" e clique em "Pasta".',
              'Passo 3: Uma pasta amarela aparecerá com o nome destacado. Digite imediatamente o nome desejado (exemplo: "Contas de Casa 2026").',
              'Passo 4: Pressione a tecla ENTER no teclado para confirmar o nome.',
              'Para renomear depois: Clique com o botão direito sobre a pasta e selecione "Renomear" (ou pressione a tecla F2).'
            ]
          },
          {
            type: 'tip',
            title: 'Cuidado com a pasta "Downloads"',
            text: 'Tudo o que você baixa da internet vai direto para a pasta "Downloads". O hábito recomendado é abrir essa pasta semanalmente e mover os arquivos importantes para as pastas "Documentos" ou "Imagens", apagando o que não for mais útil.'
          },
          {
            type: 'comparison',
            title: 'Atalhos de teclado mais úteis do mundo',
            leftTitle: 'Atalho no Teclado',
            leftContent: [
              'Ctrl + C (Pressione Ctrl e depois C juntos)',
              'Ctrl + V',
              'Ctrl + X',
              'Ctrl + Z',
              'Ctrl + A'
            ],
            rightTitle: 'O que ele faz',
            rightContent: [
              'Copiar: Memoriza o texto ou arquivo selecionado sem apagá-lo.',
              'Colar: Insere onde você apontar o cursor o que acabou de copiar.',
              'Recortar: Remove do lugar original para colar em outro local.',
              'Desfazer: O "botão de arrependimento". Cancela a última ação feita por engano!',
              'Selecionar Tudo: Marca todos os textos ou arquivos da janela aberta de uma vez.'
            ]
          }
        ]
      }
    ],
    practicalActivities: [
      {
        id: 'act1-1',
        order: 1,
        title: 'Classificando os componentes do computador',
        description: 'Verifique se você sabe diferenciar o que é peça física (Hardware) e o que é programa ou sistema (Software).',
        type: 'choice',
        question: 'Dona Maria comprou um notebook novo e quer entender os itens da embalagem. Qual dos itens abaixo é um exemplo de SOFTWARE?',
        options: [
          {
            id: 'opt1',
            text: 'O carregador de bateria do notebook',
            isCorrect: false,
            feedback: 'O carregador é uma peça física com fios e plástico, logo é um componente de hardware.'
          },
          {
            id: 'opt2',
            text: 'O Sistema Operacional Windows instalado na máquina',
            isCorrect: true,
            feedback: 'Correto! O sistema operacional é um programa com instruções digitais que comanda o computador, sendo portanto software.'
          },
          {
            id: 'opt3',
            text: 'A tela de cristal líquido do monitor',
            isCorrect: false,
            feedback: 'A tela é uma peça física que você consegue ver e tocar, classificada como hardware.'
          },
          {
            id: 'opt4',
            text: 'O teclado embutido do notebook',
            isCorrect: false,
            feedback: 'O teclado é um periférico físico de entrada, caracterizado como hardware.'
          }
        ],
        explanation: 'Hardware é toda a parte mecânica e eletrônica tangível; software representa os programas, aplicativos e sistemas operacionais.'
      },
      {
        id: 'act1-2',
        order: 2,
        title: 'Organizando arquivos na pasta correta',
        description: 'Pratique a lógica de organização em pastas para manter seus documentos e fotos fáceis de encontrar.',
        type: 'scenario',
        scenarioText: 'Situação de rotina:\nVocê acabou de baixar da internet um comprovante de pagamento em formato PDF chamado "Comprovante_Agua_Marco.pdf". Ele está atualmente na pasta "Downloads", junto com dezenas de outros arquivos misturados.',
        question: 'Qual é o procedimento correto e seguro para organizar esse comprovante para consultas futuras?',
        options: [
          {
            id: 'scen1',
            text: 'Deixar o comprovante na pasta Downloads para sempre e confiar que vai achar na barra de busca depois.',
            isCorrect: false,
            feedback: 'A pasta Downloads acumula muitos arquivos temporários e pode ficar confusa ou ser esvaziada acidentalmente.'
          },
          {
            id: 'scen2',
            text: 'Recortar ou mover o arquivo para uma pasta nomeada dentro de "Documentos", como "Contas Pagas 2026".',
            isCorrect: true,
            feedback: 'Perfeito! Mover para uma pasta temática e identificada garante que você encontre o comprovante em poucos segundos quando precisar.'
          },
          {
            id: 'scen3',
            text: 'Clicar com o botão direito e escolher "Excluir" para liberar espaço na hora.',
            isCorrect: false,
            feedback: 'Excluir o arquivo apagará seu comprovante de pagamento!'
          }
        ],
        explanation: 'Manter arquivos importantes na pasta Documentos organizados por assunto (ex: Contas, Saúde, Família) previne perdas e facilita a localização.'
      }
    ],
    summary: {
      headline: 'Você dominou a base física e lógica do computador!',
      keyTakeaways: [
        'Hardware é a parte física (mouse, tela, processador); software são os programas e sistemas.',
        'O mouse tem 3 funções principais: clique esquerdo (selecionar), duplo clique (abrir) e clique direito (opções).',
        'As janelas possuem três controles no canto: minimizar (-), maximizar e fechar (X).',
        'Pastas são gavetas virtuais para guardar arquivos sem bagunça.',
        'O atalho Ctrl+Z é seu aliado para desfazer enganos a qualquer momento.'
      ],
      practicalHabit: 'Ao terminar de usar o computador, feche seus programas e use sempre o comando Iniciar > Desligar. Nunca desligue direto na tomada.',
      encouragement: 'Com essa base, você já conhece os fundamentos de qualquer computador do mundo!'
    },
    quiz: [
      {
        id: 'q1-1',
        question: 'Qual é a função do atalho de teclado Ctrl + C?',
        options: [
          'Desligar o monitor do computador',
          'Copiar o texto ou arquivo selecionado para a memória',
          'Fechar a janela imediatamente',
          'Abrir a calculadora do sistema'
        ],
        correctAnswer: 1,
        explanation: 'Ctrl+C copia o conteúdo selecionado, permitindo que você o cole em outro local usando Ctrl+V.'
      },
      {
        id: 'q1-2',
        question: 'O que acontece ao clicar no botão com um traço (-) no canto superior direito de uma janela?',
        options: [
          'O programa é excluído para sempre',
          'A janela é minimizada para a barra de tarefas sem encerrar o programa',
          'O computador reinicia na hora',
          'A impressora imprime a tela'
        ],
        correctAnswer: 1,
        explanation: 'Minimizar esconde a janela na barra de tarefas para liberar a tela, mas mantém o programa aberto com seu trabalho em andamento.'
      },
      {
        id: 'q1-3',
        question: 'Para que serve um periférico como a impressora?',
        options: [
          'Apenas para ligar a internet sem fio',
          'Para transferir textos e imagens do computador para folhas de papel',
          'Para aumentar o volume das músicas',
          'Para digitar senhas no banco'
        ],
        correctAnswer: 1,
        explanation: 'A impressora é um periférico de saída que converte documentos digitais em formato físico no papel.'
      }
    ]
  },

  /* ==========================================================================
     MÓDULO 2: Internet e navegação
     ========================================================================== */
  {
    id: 'modulo-2',
    order: 2,
    title: 'Internet e navegação',
    shortDescription: 'Como navegar na web com autonomia: navegadores, barra de endereços, buscas úteis no Google, abas e identificação de sites suspeitos.',
    fullDescription: 'Aprenda a explorar a internet com segurança e tranquilidade. Descubra a diferença entre um navegador e um site de busca, aprenda a digitar endereços oficiais sem cair em pegadinhas, saiba fazer pesquisas certeiras e compreenda as conexões Wi-Fi e dados móveis.',
    introduction: 'A internet é como uma gigantesca biblioteca e avenida comercial aberta 24 horas por dia. Para passear por ela sem se perder, você precisa de um bom mapa: saber como funciona o navegador, como ler o endereço de uma página e como diferenciar links confiáveis de propagandas enganosas.',
    iconName: 'Globe',
    estimatedTime: '50 min',
    level: 'Iniciante',
    learningObjectives: [
      'Compreender o que é a internet e diferenciá-la de um navegador e de um site',
      'Identificar navegadores populares (Google Chrome, Microsoft Edge, Mozilla Firefox)',
      'Utilizar corretamente a barra de endereços e a barra de pesquisa do Google',
      'Trabalhar com abas (guias) para manter várias páginas abertas simultaneamente',
      'Baixar arquivos com segurança e identificar links e páginas suspeitas',
      'Entender a diferença prática entre conexão Wi-Fi e internet móvel (4G/5G)'
    ],
    lessons: [
      {
        id: 'mod2-aula1',
        moduleId: 'modulo-2',
        order: 1,
        title: 'O que é a internet e a diferença entre Navegador e Site',
        summary: 'Compreenda a rede mundial de computadores e conheça o programa que você usa para abrir páginas na web.',
        duration: '15 min',
        keyTakeaway: 'A internet é a rede que conecta o mundo; o navegador é o aplicativo que você abre (como Chrome ou Edge); o site é o destino onde você chega.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Muitas pessoas chamam tudo de "internet", mas existem três conceitos fáceis e diferentes que você precisa conhecer:'
          },
          {
            type: 'stepList',
            title: 'A analogia da viagem:',
            items: [
              'A Internet: É o sistema de ruas e estradas que conecta milhões de computadores pelo planeta.',
              'O Navegador (Browser): É o seu carro. É o programa instalado no computador que você usa para trafegar por essas estradas (exemplos: Google Chrome, Microsoft Edge, Mozilla Firefox e Apple Safari).',
              'O Site (Página Web): É a casa ou loja que você visita ao final do caminho (exemplo: o site de notícias, o site do seu banco ou o portal Gov.br).'
            ]
          },
          {
            type: 'highlight',
            title: 'Exemplos de Navegadores Populares',
            text: '• Google Chrome: Ícone de círculo colorido em vermelho, amarelo, verde e azul no centro.\n• Microsoft Edge: Ícone em forma de onda espiralada azul e verde (já vem no Windows).\n• Mozilla Firefox: Ícone de uma raposa alaranjada abraçando um globo azul.\nTodos eles realizam a mesma função básica: abrir e exibir páginas da internet.'
          },
          {
            type: 'tip',
            title: 'Wi-Fi vs. Internet Móvel (Dados móveis)',
            text: '• Wi-Fi: Conexão sem fio gerada pelo roteador da sua casa ou trabalho. Geralmente é ilimitada e não consome seu pacote de créditos de celular.\n• Dados Móveis (4G / 5G): Internet fornecida pela sua operadora de telefonia pelo chip do celular. Costuma ter um pacote de franquia mensal limitado.'
          }
        ]
      },
      {
        id: 'mod2-aula2',
        moduleId: 'modulo-2',
        order: 2,
        title: 'Acessando sites: Barra de endereços vs. Buscas no Google',
        summary: 'Aprenda a anatomia de um endereço de site e como fazer pesquisas objetivas no Google para achar o que precisa.',
        duration: '15 min',
        keyTakeaway: 'Se você já sabe o endereço completo do site, digite na barra do topo; se você tem uma dúvida ou quer encontrar algo, use o Google.',
        blocks: [
          {
            type: 'paragraph',
            text: 'A confusão mais comum para quem está começando é digitar o endereço do site dentro do campo de busca, ou digitar perguntas inteiras na barra de endereços.'
          },
          {
            type: 'comparison',
            title: 'Onde digitar cada informação no navegador?',
            leftTitle: 'Barra de Endereços (Fica no topo da janela)',
            leftContent: [
              'Use quando você já sabe o endereço exato do site.',
              'Exemplo: "www.correios.com.br" ou "portal.mec.gov.br".',
              'Não use espaços em branco em endereços web.',
              'Repare no cadeado de segurança ao lado do endereço.'
            ],
            rightTitle: 'Mecanismo de Pesquisa (Campo do Google)',
            rightContent: [
              'Use quando você tem uma dúvida ou procura um serviço.',
              'Exemplo: "onde tomar vacina da gripe no centro da cidade".',
              'Não precisa escrever frases compridas ou formais.',
              'Use palavras-chave diretas e simples.'
            ]
          },
          {
            type: 'visualExample',
            title: 'Anatomia de um endereço de site seguro (URL)',
            text: 'https://www.saude.gov.br/vacinacao\n  ▲           ▲           ▲\n  │           │           └── Página específica dentro do site\n  │           └────────────── Nome oficial do domínio (.gov.br)\n  └────────────────────────── Protocolo com "s" de segurança (com cadeado)',
            caption: 'A terminação ".gov.br" garante que a página pertence a um órgão governamental brasileiro oficial.'
          },
          {
            type: 'stepList',
            title: 'Três dicas de ouro para pesquisas no Google:',
            items: [
              '1. Seja direto: Prefira "receita bolo de cenoura liquidificador" em vez de "olá gostaria de saber como fazer um bolo bom de cenoura".',
              '2. Inclua sua cidade quando o assunto for presencial: "horário posto de saúde campinas centro".',
              '3. Cuidado com os primeiros resultados marcados como "Patrocinado" ou "Anúncio": Eles são propagandas pagas e nem sempre representam o site oficial.'
            ]
          }
        ]
      },
      {
        id: 'mod2-aula3',
        moduleId: 'modulo-2',
        order: 3,
        title: 'Navegação com abas, downloads seguros e sites suspeitos',
        summary: 'Como abrir vários sites sem perder os anteriores, salvar favoritos e identificar perigos na web.',
        duration: '20 min',
        keyTakeaway: 'Use abas para não perder a página onde estava; nunca baixe arquivos estranhos com extensão ".exe" vindos de sites não confiáveis.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Antigamente, para olhar dois sites era preciso abrir duas janelas gigantes. Hoje os navegadores usam o sistema de Abas (ou Guias), como se fossem fichas de um fichário.'
          },
          {
            type: 'stepList',
            title: 'Como usar as abas com maestria:',
            items: [
              'Abrir nova aba em branco: Clique no sinal de mais (+) no topo do navegador.',
              'Abrir um link em outra aba: Em vez de clicar com o botão esquerdo, clique com o botão direito sobre o link e escolha "Abrir link em nova guia". A página atual continua aberta!',
              'Fechar uma aba: Clique no "x" pequeno que fica dentro da aba no topo.',
              'Salvar nos Favoritos: Gostou do site? Clique na estrelinha ao lado da barra de endereços para guardá-lo.'
            ]
          },
          {
            type: 'warning',
            title: 'Alerta sobre downloads e sites suspeitos',
            text: 'Download significa baixar um arquivo da internet para dentro do seu computador. Siga estas regras de segurança:\n• Verifique a extensão: Arquivos de texto e formulários legítimos terminam em ".pdf" ou ".docx". Fotos terminam em ".jpg" ou ".png".\n• Cuidado extremo com ".exe", ".scr" ou ".bat": São programas executáveis. Se você não solicitou a instalação de nada, não abra!\n• Desconfie de janelas piscando: Mensagens que dizem "Seu computador está infectado com 5 vírus, clique aqui para limpar" são golpes publicitários para fazer você instalar vírus de verdade.'
          }
        ]
      }
    ],
    practicalActivities: [
      {
        id: 'act2-1',
        order: 1,
        title: 'Diferenciando Navegador de Mecanismo de Busca',
        description: 'Avalie a situação abaixo e identifique a ferramenta correta para realizar a ação.',
        type: 'choice',
        question: 'Dona Neusa precisa descobrir qual é a farmácia de plantão mais perto da casa dela, mas ela não conhece o endereço de nenhum site de farmácia. O que ela deve fazer?',
        options: [
          {
            id: 'n1',
            text: 'Digitar "farmacia de plantao hoje" direto na tomada do computador.',
            isCorrect: false,
            feedback: 'A tomada apenas fornece energia elétrica para o equipamento.'
          },
          {
            id: 'n2',
            text: 'Abrir seu navegador (como o Google Chrome) e digitar no campo de pesquisa do Google: "farmacia plantao centro [nome da cidade]".',
            isCorrect: true,
            feedback: 'Exatamente! O navegador abre o acesso e o mecanismo de busca localiza as opções e horários de farmácias na região dela.'
          },
          {
            id: 'n3',
            text: 'Digitar a palavra "farmácia" na lixeira do computador.',
            isCorrect: false,
            feedback: 'A lixeira serve apenas para recuperar ou apagar arquivos excluídos do computador.'
          }
        ],
        explanation: 'Para achar informações desconhecidas, abrimos o navegador e usamos um mecanismo de busca (como o Google) com palavras-chave claras.'
      },
      {
        id: 'act2-2',
        order: 2,
        title: 'Detetive da barra de endereços',
        description: 'Examine com atenção os endereços web abaixo e descubra qual deles aparenta ser seguro e autêntico.',
        type: 'scenario',
        scenarioText: 'Você quer consultar a tabela de vacinação infantil no portal oficial do Ministério da Saúde do Brasil e encontrou três links diferentes em uma busca:',
        question: 'Qual dos três links é o endereço oficial e confiável do governo federal brasileiro?',
        options: [
          {
            id: 'l1',
            text: 'http://saude-vacinas-promocao-gratis.site-estranho.com/baixar',
            isCorrect: false,
            feedback: 'Suspeito! Não usa https (sem cadeado), usa um domínio comercial desconhecido (.com) e induz a baixar algo.'
          },
          {
            id: 'l2',
            text: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/v/vacinacao',
            isCorrect: true,
            feedback: 'Parabéns! Tem protocolo seguro (https) e termina com o domínio oficial governamental brasileiro (.gov.br).'
          },
          {
            id: 'l3',
            text: 'http://vacinacao-urgente-clique-aqui.net/cadastro',
            isCorrect: false,
            feedback: 'Inseguro! Usa tom de urgência e termina em .net, sem nenhuma ligação oficial com o Ministério da Saúde.'
          }
        ],
        explanation: 'Órgãos públicos federais e estaduais no Brasil utilizam o domínio ".gov.br" e conexões seguras com HTTPS.'
      }
    ],
    summary: {
      headline: 'Você já sabe se locomover na grande rede!',
      keyTakeaways: [
        'O navegador é o seu veículo para abrir sites na internet.',
        'A barra de endereços fica no topo para sites conhecidos; o Google serve para procurar o que você ainda não sabe.',
        'Use novas abas para consultar links sem fechar a página onde você estava lendo.',
        'A presença do cadeado e o prefixo "https://" indicam que a comunicação com o site é protegida.',
        'Desconfie de anúncios com promessas exageradas ou alertas falsos de que seu computador está com vírus.'
      ],
      practicalHabit: 'Sempre observe os primeiros caracteres do endereço do site antes de preencher qualquer cadastro.',
      encouragement: 'Navegar com atenção é o melhor antivírus que existe!'
    },
    quiz: [
      {
        id: 'q2-1',
        question: 'Qual a finalidade de clicar com o botão direito em um link e selecionar "Abrir link em nova guia"?',
        options: [
          'Desligar a internet da casa',
          'Abrir a página nova sem perder nem fechar a página onde você estava navegando',
          'Apagar o histórico de navegação',
          'Enviar uma mensagem para os Correios'
        ],
        correctAnswer: 1,
        explanation: 'Abrir em nova guia mantém sua página de origem aberta ao lado da página nova, facilitando a consulta simultânea.'
      },
      {
        id: 'q2-2',
        question: 'O que significa a letra "s" em "https://" no início do endereço de um site?',
        options: [
          'Significa que o site é exclusivo para sextas-feiras',
          'Significa "Segurança" (Security), indicando que os dados entre seu computador e o site são criptografados',
          'Significa que o site é somente para computadores da marca Sony',
          'Significa que o site é muito lento'
        ],
        correctAnswer: 1,
        explanation: 'O protocolo HTTPS garante criptografia na transmissão dos dados, dificultando que terceiros interceptem suas informações.'
      }
    ]
  },

  /* ==========================================================================
     MÓDULO 3: E-mail e comunicação digital
     ========================================================================== */
  {
    id: 'modulo-3',
    order: 3,
    title: 'E-mail e comunicação digital',
    shortDescription: 'Criação e uso de correio eletrônico, estrutura formal de mensagens, envio de anexos com documentos, CC vs. CCO e etiqueta digital.',
    fullDescription: 'O e-mail é a sua identidade formal no ambiente online, necessária para cadastros públicos, vagas de trabalho, bancos e serviços. Aprenda a escrever mensagens claras, anexar comprovantes e fotos, organizar sua caixa postal e se comunicar com educação e segurança.',
    introduction: 'Enquanto o aplicativo de mensagens rápidas serve para conversas imediatas do cotidiano, o correio eletrônico (e-mail) é a carta registrada do mundo virtual. Ele serve como comprovante formal de acordos, envio de currículos, notas fiscais e comunicações oficiais de empresas e governos.',
    iconName: 'Mail',
    estimatedTime: '40 min',
    level: 'Básico',
    learningObjectives: [
      'Entender a estrutura e composição de um endereço de e-mail autêntico',
      'Compreender as pastas fundamentais: Entrada, Enviados, Rascunhos e Spam',
      'Escrever mensagens formais utilizando saudação, texto claro e assunto adequado',
      'Anexar documentos em PDF e fotografias utilizando o ícone de clipe',
      'Dominar a diferença crucial entre Com Cópia (CC) e Cópia Oculta (CCO)',
      'Praticar as regras de boa convivência digital (Netiqueta) e reconhecer e-mails suspeitos'
    ],
    lessons: [
      {
        id: 'mod3-aula1',
        moduleId: 'modulo-3',
        order: 1,
        title: 'Como funciona o e-mail e a anatomia de um endereço',
        summary: 'Entenda como as mensagens eletrônicas circulam pelo mundo e como um endereço de e-mail é estruturado.',
        duration: '10 min',
        keyTakeaway: 'O endereço de e-mail é único no mundo e se divide em: nome do usuário + símbolo @ + nome do provedor.',
        blocks: [
          {
            type: 'paragraph',
            text: 'O e-mail funciona como uma caixa de correio virtual. Qualquer pessoa no mundo que saiba o seu endereço exato pode lhe enviar uma mensagem instantaneamente, sem custos de postagem.'
          },
          {
            type: 'visualExample',
            title: 'Anatomia de um endereço de e-mail:',
            text: 'joao.silva.trabalho@gmail.com\n └──────┬─────────┘ └┬┘ └──┬────┘\n   Nome do Usuário   │  Provedor de E-mail\n                     └── Símbolo "Arroba" (significa "em" ou "pertencente a")',
            caption: 'Regras: Não use espaços, nem acentos (como ç, ã, é) em endereços de e-mail.'
          },
          {
            type: 'stepList',
            title: 'As 4 pastas essenciais da sua caixa de e-mails:',
            items: [
              'Caixa de Entrada (Inbox): Onde chegam todas as novas mensagens recebidas.',
              'Enviados: Cópia exata de todas as mensagens que você disparou para outras pessoas (serve como comprovante de envio).',
              'Rascunhos: Mensagens que você começou a escrever, mas ainda não clicou em enviar.',
              'Spam / Lixo Eletrônico: Mensagens indesejadas, propagandas chatas ou tentativas de fraude bloqueadas pelo provedor.'
            ]
          },
          {
            type: 'tip',
            title: 'Dica para escolher um e-mail respeitável',
            text: 'Se você vai usar o e-mail para procurar emprego ou resolver burocracias, evite apelidos de infância como "gatinha123" ou "joaozinhodogame". Prefira combinações do seu nome e sobrenome: "joao.silva.pereira@...".'
          }
        ]
      },
      {
        id: 'mod3-aula2',
        moduleId: 'modulo-3',
        order: 2,
        title: 'Escrevendo mensagens, anexando arquivos e CC vs. CCO',
        summary: 'Aprenda os campos de preenchimento de um e-mail, como colocar anexos de até 25MB e para que serve a cópia oculta.',
        duration: '15 min',
        keyTakeaway: 'Sempre preencha um assunto objetivo; use o ícone de clipe para anexar arquivos e CCO quando for mandar para muitas pessoas sem expor os e-mails delas.',
        blocks: [
          {
            type: 'stepList',
            title: 'Os campos obrigatórios ao escrever um e-mail:',
            items: [
              'Para: O endereço exato da pessoa que deve responder ou receber a mensagem principal.',
              'Assunto: Um resumo de poucas palavras sobre o que se trata. Exemplos: "Envio de currículo - João Silva" ou "Dúvida sobre boleto vencido". Nunca deixe o assunto em branco!',
              'Corpo do texto: O texto completo da sua mensagem contendo saudação ("Prezado(a)"), mensagem clara e despedida cortês.'
            ]
          },
          {
            type: 'highlight',
            title: 'O botão de Anexo (Ícone de clipe de papel)',
            text: 'Para enviar uma foto, documento do Word ou comprovante em PDF junto com seu e-mail, clique no botão com ícone de clipe de papel. Uma janela do seu computador se abrirá para você escolher o arquivo desejado.\n• Lembrete: A maioria dos serviços de e-mail permite anexos de até 25 Megabytes (MB). Documentos e fotos comuns passam tranquilamente.'
          },
          {
            type: 'comparison',
            title: 'Diferença crucial: CC vs. CCO',
            leftTitle: 'CC (Com Cópia)',
            leftContent: [
              'Envia a mensagem para outros interessados acompanharem.',
              'Todos os destinatários conseguem ver os endereços uns dos outros.',
              'Use quando todos os envolvidos já se conhecem e participam do mesmo projeto ou assunto de família.'
            ],
            rightTitle: 'CCO (Cópia Oculta / Cco)',
            rightContent: [
              'Envia a mensagem protegendo a privacidade dos contatos.',
              'Nenhum destinatário consegue ver para quem mais a mensagem foi enviada.',
              'Essencial ao mandar um comunicado para dezenas de clientes, vizinhos ou conhecidos para não expor seus dados (em conformidade com a LGPD).'
            ]
          }
        ]
      },
      {
        id: 'mod3-aula3',
        moduleId: 'modulo-3',
        order: 3,
        title: 'Netiqueta e identificação de e-mails suspeitos',
        summary: 'Boas maneiras na comunicação digital e como não cair em armadilhas enviadas para sua caixa postal.',
        duration: '15 min',
        keyTakeaway: 'Escrever em letras maiúsculas significa GRITAR; e-mails de bancos desconhecidos pedindo senhas devem ser deletados sem abrir anexos.',
        blocks: [
          {
            type: 'stepList',
            title: 'Regras fundamentais de Netiqueta (Etiqueta na Internet):',
            items: [
              'NÃO ESCREVA ASSIM: Na internet, escrever um texto inteiro em letras maiúsculas equivale a gritar com o leitor. Use maiúsculas apenas no início das frases.',
              'Comece sempre com uma saudação: "Bom dia, Fulano", "Olá, Maria".',
              'Seja claro e conciso: Ninguém gosta de ler mensagens gigantes sem parágrafos.',
              'Revise antes de enviar: Confira se anexou o arquivo mencionado no texto e se o e-mail de destino está digitado corretamente.'
            ]
          },
          {
            type: 'warning',
            title: 'Como reconhecer um e-mail perigoso (Phishing):',
            text: '• Remetente suspeito: O e-mail diz que é da Receita Federal, mas o endereço do remetente é "contato@sorteio-premiado-123.com".\n• Ameaças urgentes: "Seu nome será negativado no Serasa em 2 horas caso não abra o anexo". Bancos e órgãos oficiais não enviam boletos ou cobranças em anexo por e-mail sem sua solicitação prévia.\n• Anexos com final ".zip" ou ".exe": NUNCA abra arquivos compactados ou programas vindos por e-mail.'
          }
        ]
      }
    ],
    practicalActivities: [
      {
        id: 'act3-1',
        order: 1,
        title: 'Avaliando o assunto de um e-mail profissional',
        description: 'Um assunto claro e educado faz com que sua mensagem seja lida rapidamente e levada a sério.',
        type: 'choice',
        question: 'Você precisa enviar seu currículo atualizado para uma vaga de auxiliar administrativo na empresa XYZ. Qual dos assuntos abaixo é o mais adequado e profissional?',
        options: [
          {
            id: 'a1',
            text: 'OLÁ PRECISO MUITO TRABALHAR ME AJUDEM POR FAVOR',
            isCorrect: false,
            feedback: 'Inadequado. Escrever tudo em maiúsculas soa desesperado e passa a impressão de grito, sem identificar a vaga nem seu nome.'
          },
          {
            id: 'a2',
            text: 'Currículo - Auxiliar Administrativo - Carlos Eduardo da Silva',
            isCorrect: true,
            feedback: 'Excelente! Indica o objetivo (Currículo), a vaga de interesse e o seu nome completo, facilitando o trabalho do recrutador.'
          },
          {
            id: 'a3',
            text: '(Deixar o campo Assunto completamente em branco)',
            isCorrect: false,
            feedback: 'E-mails sem assunto frequentemente caem direto na caixa de Spam e são ignorados.'
          }
        ],
        explanation: 'O campo Assunto deve funcionar como a manchete de um jornal: resumir o tema e identificar você de forma objetiva.'
      },
      {
        id: 'act3-2',
        order: 2,
        title: 'Privacidade de dados: Quando usar CCO?',
        description: 'Aplique o conceito de Cópia Oculta para proteger a privacidade de terceiros.',
        type: 'scenario',
        scenarioText: 'Situação prática:\nVocê é síndico do seu prédio e precisa enviar o aviso sobre a manutenção da caixa d\'água para todos os 40 moradores do condomínio por e-mail.',
        question: 'Em qual campo você deve inserir os 40 endereços de e-mail dos moradores?',
        options: [
          {
            id: 'cco1',
            text: 'No campo "Para", colocando todos juntos separados por vírgula.',
            isCorrect: false,
            feedback: 'Dessa forma, todos os moradores verão o e-mail pessoal uns dos outros, violando a privacidade de quem não autorizou a divulgação.'
          },
          {
            id: 'cco2',
            text: 'No campo "CCO" (Cópia Oculta).',
            isCorrect: true,
            feedback: 'Perfeito! Usando CCO, cada morador recebe a mensagem normalmente, mas nenhum morador consegue ver o e-mail dos vizinhos.'
          },
          {
            id: 'cco3',
            text: 'No campo "Assunto".',
            isCorrect: false,
            feedback: 'O campo Assunto serve para resumir o tema da mensagem, e não para colocar endereços.'
          }
        ],
        explanation: 'O campo CCO protege a lista de contatos contra vazamentos e respeita as regras de privacidade digital (LGPD).'
      }
    ],
    summary: {
      headline: 'Você dominou a comunicação formal da era digital!',
      keyTakeaways: [
        'O e-mail é a sua identidade oficial para cadastros, trabalho e comunicações governamentais.',
        'Um bom e-mail sempre tem: destinatário correto, assunto informativo, texto claro e cordial.',
        'Arquivos de documentos ou fotos devem ser anexados pelo ícone de clipe de papel.',
        'Use Cópia Oculta (CCO) ao enviar mensagens para muitas pessoas para preservar a privacidade delas.',
        'Não abra anexos nem clique em links de e-mails desconhecidos que usem ameaças de bloqueio ou cobrança urgente.'
      ],
      practicalHabit: 'Revise o endereço da pessoa e confira se anexou o documento antes de apertar o botão Enviar.',
      encouragement: 'Saber usar o e-mail abre portas reais de cidadania e oportunidades profissionais!'
    },
    quiz: [
      {
        id: 'q3-1',
        question: 'O que você deve fazer se receber um e-mail de um remetente desconhecido dizendo que seu CPF foi cancelado e pedindo para abrir um anexo chamado "regularizacao.exe"?',
        options: [
          'Abrir o anexo imediatamente para ver o que aconteceu',
          'Não abrir o anexo, marcar o e-mail como Spam/Lixo Eletrônico e excluí-lo, pois trata-se de um golpe com vírus',
          'Encaminhar o e-mail para todos os seus amigos',
          'Responder o e-mail mandando sua senha do banco'
        ],
        correctAnswer: 1,
        explanation: 'Arquivos com extensão ".exe" são programas executáveis. E-mails alarmistas com esses arquivos carregam vírus para infectar o computador.'
      },
      {
        id: 'q3-2',
        question: 'Qual é o símbolo obrigatório em qualquer endereço de correio eletrônico que separa o nome do usuário do serviço de e-mail?',
        options: [
          'O símbolo de porcentagem (%)',
          'O símbolo de arroba (@)',
          'O símbolo de sustenido (#)',
          'O símbolo de cifrão ($)'
        ],
        correctAnswer: 1,
        explanation: 'A arroba (@) é o caractere padrão mundial que indica a qual domínio ou servidor a conta de e-mail pertence.'
      }
    ]
  },

  /* ==========================================================================
     MÓDULO 4: Segurança digital
     ========================================================================== */
  {
    id: 'modulo-4',
    order: 4,
    title: 'Segurança digital',
    shortDescription: 'Criação de senhas fortes, proteção de dados pessoais, identificação de golpes no WhatsApp, autenticação em duas etapas e Wi-Fi público.',
    fullDescription: 'A segurança é o pilar mais importante da inclusão digital. Descubra como criar senhas que ninguém descobre, como identificar mensagens falsas de bancos e criminosos no WhatsApp, e como navegar sem expor sua privacidade, sua família e suas economias.',
    introduction: 'No mundo virtual, assim como no mundo real, trancamos a porta de casa e olhamos quem está batendo antes de abrir. A segurança digital não exige que você seja um gênio da computação, mas sim que desenvolva uma postura atenta e preventiva diante de mensagens e links suspeitos.',
    iconName: 'ShieldCheck',
    estimatedTime: '55 min',
    level: 'Intermediário',
    learningObjectives: [
      'Criar senhas fortes e fáceis de memorizar usando a técnica da frase secreta',
      'Compreender o perigo de reutilizar a mesma senha em múltiplos sites',
      'Ativar e entender a importância da Autenticação em Duas Etapas (2FA)',
      'Identificar tentativas de golpe virtual (Phishing) no WhatsApp, SMS e e-mails',
      'Reconhecer páginas falsas e checar domínios autênticos antes de digitar dados',
      'Proteger informações sensíveis (CPF, fotos de documentos e cartões) em redes sociais e Wi-Fi público'
    ],
    lessons: [
      {
        id: 'mod4-aula1',
        moduleId: 'modulo-4',
        order: 1,
        title: 'Senhas fortes, a regra de não reutilização e 2FA',
        summary: 'Aprenda a construir senhas seguras sem esquecer e conheça a camada dupla de proteção que impede invasões.',
        duration: '15 min',
        keyTakeaway: 'Uma senha segura combina tamanho e variedade; a verificação em duas etapas (2FA) impede invasões mesmo se alguém descobrir sua senha.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Criminosos não tentam adivinhar sua senha digitando letrinha por letrinha. Eles usam programas automáticos que testam milhares de palavras comuns por segundo. Por isso, senhas como "123456", "brasil2026" ou sua data de nascimento são quebradas em menos de um segundo.'
          },
          {
            type: 'highlight',
            title: 'Técnica da Frase Secreta (Fácil de lembrar, impossível de adivinhar):',
            text: 'Escolha uma frase engraçada ou memorável da sua vida:\n"Em 1995 eu tomei café com bolo de milho!"\nPegue as iniciais e números:\nE1995etcbm!\nPronto: Você tem uma senha com mais de 10 caracteres, com maiúsculas, minúsculas, números e ponto de exclamação!'
          },
          {
            type: 'warning',
            title: 'O perigo fatal: Usar a mesma senha para tudo',
            text: 'Se você usa a mesma senha no joguinho de celular, na loja de calçados e no seu banco, basta que a lojinha sofra um vazamento para que os criminosos tentem essa mesma combinação na sua conta bancária e no seu e-mail. Crie senhas exclusivas para suas contas críticas!'
          },
          {
            type: 'stepList',
            title: 'O que é a Autenticação em Duas Etapas (2FA)?',
            items: [
              '1ª Etapa (O que você sabe): Sua senha habitual cadastrada no site.',
              '2ª Etapa (O que você tem): Um código temporário de 6 dígitos que chega no seu aplicativo autenticador ou no seu telefone.',
              'Por que ela é vital: Se um invasor do outro lado do mundo descobrir sua senha, ele ainda não conseguirá entrar, pois não tem o seu celular em mãos para pegar o segundo código.'
            ]
          }
        ]
      },
      {
        id: 'mod4-aula2',
        moduleId: 'modulo-4',
        order: 2,
        title: 'Como funciona o Phishing e os golpes no WhatsApp',
        summary: 'Entenda a tática de manipulação psicológica mais usada por estelionatários digitais e aprenda a desmascará-la.',
        duration: '20 min',
        keyTakeaway: 'Golpistas sempre usam três gatilhos: URGÊNCIA extrema, PROMESSA de dinheiro fácil ou MEDO de punição imediata.',
        blocks: [
          {
            type: 'paragraph',
            text: 'A palavra Phishing vem de "pescaria". O criminoso lança uma isca atraente (um prêmio, um falso desconto, uma dívida urgente) esperando que você morda o anzol clicando em um link ou fornecendo dados pessoais.'
          },
          {
            type: 'stepList',
            title: 'Os 4 sinais universais de golpe no WhatsApp ou SMS:',
            items: [
              '1. Número desconhecido com a foto de um familiar: Dizendo "Troquei de número, anota o novo aí" e pedindo um Pix logo em seguida porque está no médico ou com o carro quebrado.',
              '2. Pedido de código de 6 dígitos recebido por SMS: "Oi, estou agendando um serviço e enviei um código de protocolo no seu SMS por engano, me passa aí?". NUNCA passe! É o código para clonar seu WhatsApp.',
              '3. Notificações bancárias falsas: "Sua conta do Banco do Brasil foi bloqueada, clique no link para desbloquear em 30 minutos". Bancos NUNCA enviam links de desbloqueio por SMS.',
              '4. Promessas milagrosas de renda extra: "Trabalhe 15 minutos por dia curtindo vídeos e ganhe R$ 800 por dia".'
            ]
          },
          {
            type: 'tip',
            title: 'Regra de ouro: O teste da ligação real',
            text: 'Se um amigo ou filho mandar mensagem pedindo dinheiro emprestado ou dizendo que trocou de número, NUNCA faça transferência imediata. Ligue para o número antigo que você já tinha salvo na agenda ou faça uma chamada de vídeo para confirmar a identidade.'
          }
        ]
      },
      {
        id: 'mod4-aula3',
        moduleId: 'modulo-4',
        order: 3,
        title: 'Wi-Fi público, redes sociais e proteção do CPF',
        summary: 'Cuidados com conexões abertas na rua e postura segura ao publicar fotos e informações pessoais.',
        duration: '20 min',
        keyTakeaway: 'Evite fazer transações bancárias em redes Wi-Fi abertas de shopping ou praça; nunca publique fotos do seu cartão ou documentos.',
        blocks: [
          {
            type: 'paragraph',
            text: 'O sinal de Wi-Fi gratuito em praças, rodoviárias e lanchonetes é muito prático, mas por ser aberto, outros aparelhos conectados na mesma rede podem tentar interceptar o que você está navegando.'
          },
          {
            type: 'comparison',
            title: 'O que pode e o que evitar no Wi-Fi público gratuito?',
            leftTitle: 'Pode fazer tranquilamente:',
            leftContent: [
              'Ler notícias e blogs gerais.',
              'Consultar horários de ônibus e mapas.',
              'Assistir a vídeos e ler artigos educativos.'
            ],
            rightTitle: 'Evite terminantemente:',
            rightContent: [
              'Abrir o aplicativo do banco ou fazer compras com cartão.',
              'Digitar senhas principais de e-mail e contas do governo.',
              'Dica: Se precisar mexer no banco na rua, desligue o Wi-Fi e use sua rede 4G/5G do chip.'
            ]
          },
          {
            type: 'warning',
            title: 'Seus dados pessoais valem ouro: Proteja seu CPF',
            text: 'Seu CPF e data de nascimento são usados para abrir contas fraudulentas ou solicitar empréstimos em seu nome. Nunca tire foto da sua carteira de identidade (RG) ou CNH para postar em redes sociais comemorando uma conquista sem cobrir todos os números!'
          }
        ]
      }
    ],
    practicalActivities: [
      {
        id: 'act4-1',
        order: 1,
        title: 'Detecção de Phishing no WhatsApp',
        description: 'Analise a mensagem real simulada abaixo e aponte os elementos que comprovam que se trata de uma fraude.',
        type: 'scenario',
        scenarioText: 'Mensagem recebida no seu WhatsApp de um número com DDD diferente:\n\n"AVISO URGENTE CAIXA: Prezado cliente, identificamos uma tentativa de acesso não autorizada na sua conta poupança. Para evitar o cancelamento definitivo e multa de R$ 420,00, clique agora no link e confirme seus dados: http://caixa-seguranca-atualizacao2026.com/entrar"',
        question: 'Por que você pode ter 100% de certeza de que essa mensagem é um GOLPE?',
        options: [
          {
            id: 'ph1',
            text: 'Porque a Caixa Econômica Federal e outros bancos não enviam links por WhatsApp cobrando multas nem ameaçando cancelar contas por mensagem.',
            isCorrect: true,
            feedback: 'Exato! O tom alarmista com ameaça de multa, link não oficial e cobrança urgente são as marcas registradas de um golpe de phishing.'
          },
          {
            id: 'ph2',
            text: 'Porque o texto tem palavras em letras maiúsculas.',
            isCorrect: false,
            feedback: 'Embora letras maiúsculas sejam usadas para chamar atenção, o maior perigo reside no link falso e na ameaça indevida.'
          },
          {
            id: 'ph3',
            text: 'Não é golpe, é uma mensagem legítima e devemos clicar rápido.',
            isCorrect: false,
            feedback: 'Cuidado! Clicar nesse link levará para uma página clonada criada para roubar sua agência, conta e senha.'
          }
        ],
        explanation: 'Instituições financeiras oficiais nunca solicitam confirmação de senha ou dados por mensagens com links externos.'
      },
      {
        id: 'act4-2',
        order: 2,
        title: 'Verdadeiro ou Falso da Segurança Digital',
        description: 'Julgue se as afirmações sobre senhas e proteção pessoal estão corretas.',
        type: 'true-false',
        question: 'Um atendente que diz trabalhar no suporte técnico da operadora de celular telefona para você e pede que você leia o código de 6 números que acabou de chegar por SMS na sua tela para "confirmar a linha". Você deve informar o código?',
        options: [
          {
            id: 'tf1',
            text: 'Verdadeiro: Devo falar o código, pois ele precisa comprovar que o telefone é meu.',
            isCorrect: false,
            feedback: 'Perigo grave! Nenhum atendente legítimo pede seu código pessoal de SMS. Esse código é a chave de ativação da sua conta.'
          },
          {
            id: 'tf2',
            text: 'Falso: NUNCA se deve passar códigos recebidos por SMS para ninguém por telefone.',
            isCorrect: true,
            feedback: 'Perfeito! Esse código é a senha descartável de uso estritamente seu. Compartilhar permite que terceiros assumam seu WhatsApp ou suas contas.'
          }
        ],
        explanation: 'Códigos por SMS enviados para o seu aparelho são de uso exclusivo e confidencial. Nenhuma empresa séria solicita esses códigos por ligação.'
      }
    ],
    summary: {
      headline: 'Você desenvolveu um escudo de proteção digital!',
      keyTakeaways: [
        'Crie senhas com a técnica da frase secreta e nunca reutilize a mesma senha do banco em outros sites.',
        'Ative a autenticação em duas etapas (2FA) no WhatsApp e no seu e-mail principal.',
        'Desconfie de qualquer mensagem com senso de urgência, promessas fáceis ou pedidos repentinos de Pix.',
        'Nunca, sob hipótese alguma, compartilhe códigos recebidos por SMS com terceiros.',
        'Prefira usar os dados móveis do chip ao acessar aplicativos de bancos quando estiver fora de casa.'
      ],
      practicalHabit: 'Diante de qualquer mensagem alarmista, pare, respire e confirme ligando diretamente para o canal oficial.',
      encouragement: 'A desconfiança preventiva na internet não é medo, é sabedoria e inteligência digital!'
    },
    quiz: [
      {
        id: 'q4-1',
        question: 'Por que você não deve usar sua data de aniversário ou o nome do seu cachorro como senha?',
        options: [
          'Porque os computadores não aceitam datas de aniversário',
          'Porque são informações públicas ou fáceis de descobrir em redes sociais, facilitando a quebra da senha por invasores',
          'Porque gasta mais bateria do celular',
          'Porque a internet desliga aos finais de semana'
        ],
        correctAnswer: 1,
        explanation: 'Dados biográficos e familiares são as primeiras opções testadas em ataques de força bruta contra senhas.'
      },
      {
        id: 'q4-2',
        question: 'O que você deve fazer ao receber uma mensagem no WhatsApp de um número desconhecido usando a foto da sua filha pedindo dinheiro para pagar uma conta urgente?',
        options: [
          'Fazer o Pix na hora sem falar com ninguém',
          'Ligar para o número antigo e habitual da sua filha para falar com a voz dela e checar a história',
          'Passar os dados do seu cartão de crédito na conversa',
          'Pedir para o golpista cobrar juros'
        ],
        correctAnswer: 1,
        explanation: 'Ligar para a voz real da pessoa no número que você já tinha salvo desmonta imediatamente o golpe do falso filho/parente.'
      }
    ]
  },

  /* ==========================================================================
     MÓDULO 5: Serviços digitais
     ========================================================================== */
  {
    id: 'modulo-5',
    order: 5,
    title: 'Serviços digitais',
    shortDescription: 'Cidadania na prática: conta Gov.br, agendamentos do SUS e poupatempo, documentos digitais oficiais, emissão de certidões e prevenção a sites falsos.',
    fullDescription: 'Os serviços públicos e as utilidades da cidadania migraram em grande parte para a internet. Aprenda a utilizar a plataforma Gov.br com segurança, consultar benefícios, agendar atendimentos presenciais, emitir certidões gratuitas e identificar sites falsos que cobram por serviços públicos que são gratuitos.',
    introduction: 'A transformação digital do Brasil facilitou a vida de milhões de cidadãos: hoje você pode consultar sua aposentadoria, emitir certidões de quitação eleitoral, acompanhar a carteira de trabalho e agendar consultas médicas sem passar horas em filas. Mas é preciso saber onde acessar para não ser enganado por intermediários mal-intencionados.',
    iconName: 'Smartphone',
    estimatedTime: '60 min',
    level: 'Básico',
    learningObjectives: [
      'Entender o papel da conta Gov.br como chave única para os serviços do cidadão brasileiro',
      'Conhecer os níveis de segurança da conta Gov.br (Bronze, Prata e Ouro) e suas diferenças',
      'Identificar domínios governamentais legítimos (.gov.br e .jus.br) e diferenciá-los de sites comerciais',
      'Realizar agendamentos de atendimento e emitir documentos oficiais de forma autônoma',
      'Reconhecer páginas fraudulentas que cobram taxas ilegais por serviços públicos que são 100% gratuitos',
      'Adotar cuidados ao preencher formulários online e guardar protocolos de atendimento'
    ],
    lessons: [
      {
        id: 'mod5-aula1',
        moduleId: 'modulo-5',
        order: 1,
        title: 'A Conta Gov.br: A chave de acesso do cidadão',
        summary: 'Descubra como funciona o login único federal e conheça os três níveis de segurança da conta.',
        duration: '20 min',
        keyTakeaway: 'A conta Gov.br utiliza o seu CPF como identificador único e dá acesso seguro a mais de 4.000 serviços públicos.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Antigamente, cada órgão público exigia um cadastro com login e senha diferentes: uma senha para o INSS, outra para a Receita Federal, outra para a Carteira de Trabalho. O portal Gov.br unificou tudo isso em uma única chave de acesso: o seu CPF e uma senha forte.'
          },
          {
            type: 'comparison',
            title: 'Os 3 Níveis da Conta Gov.br:',
            leftTitle: 'Nível Bronze (Básico)',
            leftContent: [
              'Criado ao fazer o cadastro básico informando dados pessoais ou da Previdência.',
              'Permite acessar serviços digitais simples e assinar alguns documentos básicos.',
              'Tem limites de segurança para proteger o cidadão contra fraudes financeiras.'
            ],
            rightTitle: 'Níveis Prata e Ouro (Avançados)',
            rightContent: [
              'Prata: Obtido ao validar a conta pelo seu aplicativo de banco credenciado ou reconhecimento facial da CNH.',
              'Ouro: Obtido com Certificado Digital ou validação facial da biometria do Tribunal Superior Eleitoral (TSE).',
              'Permitem acessar a restituição do Imposto de Renda, assinar documentos digitais com validade jurídica e visualizar dados do SUS.'
            ]
          },
          {
            type: 'tip',
            title: 'Aviso importante sobre filiação',
            text: 'O Conecta Digital é uma plataforma educacional de apoio e inclusão digital. Nós não somos o governo federal nem prestamos serviços em nome de órgãos públicos. Nosso objetivo é ensinar você a acessar os portais oficiais de forma autônoma.'
          }
        ]
      },
      {
        id: 'mod5-aula2',
        moduleId: 'modulo-5',
        order: 2,
        title: 'Documentos digitais, certidões e agendamentos',
        summary: 'Conheça os aplicativos oficiais do Brasil e aprenda a emitir certidões gratuitas sem intermediários.',
        duration: '20 min',
        keyTakeaway: 'Documentos em aplicativos oficiais homologados possuem o mesmo valor legal dos impressos em papel.',
        blocks: [
          {
            type: 'stepList',
            title: 'Os aplicativos oficiais mais úteis para ter no celular:',
            items: [
              'Meu INSS: Extrato de contribuições, histórico de benefícios e agendamento de perícias médicas.',
              'Carteira de Trabalho Digital: Acompanhamento de contratos de trabalho, férias e solicitação de seguro-desemprego.',
              'Meu SUS Digital (antigo Conecte SUS): Carteira nacional de vacinação, histórico de medicamentos e exames.',
              'e-Título: Título eleitoral digital com foto, quitação eleitoral e local de votação para o dia da eleição.',
              'CDT (Carteira Digital de Trânsito): Sua CNH e documento do veículo (CRLV) no celular.'
            ]
          },
          {
            type: 'highlight',
            title: 'Como fazer agendamentos e emissões sem sair de casa:',
            text: 'Muitos serviços ainda exigem presença física (como tirar a nova Carteira de Identidade Nacional - CIN). Nesses casos, o portal do Poupatempo, Vapt-Vupt ou órgão estadual equivalente permite agendar dia e horário exatos, evitando filas de espera.'
          },
          {
            type: 'warning',
            title: 'Sempre salve o número de Protocolo!',
            text: 'Toda vez que você solicita um serviço, faz um agendamento ou emite um documento pela internet, a página gera um Número de Protocolo ou Comprovante em PDF. Anote esse número na sua caderneta ou guarde o comprovante em PDF na sua pasta de Documentos.'
          }
        ]
      },
      {
        id: 'mod5-aula3',
        moduleId: 'modulo-5',
        order: 3,
        title: 'Cuidado com sites falsos que cobram por serviços gratuitos',
        summary: 'Aprenda a reconhecer empresas fraudulentas que cobram taxas para emitir documentos públicos.',
        duration: '20 min',
        keyTakeaway: 'Serviços como emissão de CPF, certidão de quitação eleitoral e agendamento no Poupatempo são 100% gratuitos no site oficial.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Um dos golpes mais recorrentes na internet brasileira envolve empresas de fachada que compram anúncios no topo do Google para se passar por órgãos oficiais. Quando a pessoa clica para emitir o CPF ou agendar um serviço, o site cobra uma taxa de R$ 30 a R$ 80 por um serviço que é totalmente gratuito no portal oficial!'
          },
          {
            type: 'stepList',
            title: 'Como nunca cair nessa armadilha:',
            items: [
              '1. Olhe o final do endereço web: Se o site não termina em ".gov.br" (ou ".jus.br" no caso da Justiça), ELE NÃO É O SITE OFICIAL.',
              '2. Não clique no primeiro resultado marcado com "Patrocinado": Role a página um pouquinho para baixo até achar o link oficial com o domínio gov.br.',
              '3. Nenhuma taxa para agendar: Órgãos públicos nunca cobram taxa para marcar dia e hora no Poupatempo, Detran ou postos de saúde.',
              '4. Peça apoio se tiver dúvidas: Se não tiver certeza, procure o CRAS da sua cidade, uma biblioteca pública ou o próprio posto de atendimento.'
            ]
          },
          {
            type: 'tip',
            title: 'Regra de ouro ao preencher formulários online',
            text: 'Preencha apenas os campos que possuem asterisco (*) — eles são os obrigatórios. Nunca forneça dados bancários ou senhas quando o formulário for apenas para um agendamento ou cadastro de saúde.'
          }
        ]
      }
    ],
    practicalActivities: [
      {
        id: 'act5-1',
        order: 1,
        title: 'Identificando o site oficial de um serviço público',
        description: 'Dona Cida quer consultar a situação do CPF dela na Receita Federal. Analise os três links abaixo.',
        type: 'scenario',
        scenarioText: 'Dona Cida pesquisou no Google "consultar situacao do cpf" e viu três opções na tela:',
        question: 'Qual dos links abaixo é o canal oficial e gratuito da Receita Federal do Brasil?',
        options: [
          {
            id: 'gov1',
            text: 'https://consulta-cpf-rapido-taxa-tax.online-despachante.com',
            isCorrect: false,
            feedback: 'Site comercial intermediário que tentará cobrar taxas indevidas por uma consulta pública gratuita.'
          },
          {
            id: 'gov2',
            text: 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp',
            isCorrect: true,
            feedback: 'Perfeito! O endereço termina em ".fazenda.gov.br", com conexão segura HTTPS e sem cobrança alguma.'
          },
          {
            id: 'gov3',
            text: 'http://despachante-online-imediato.net/cpf-regularizar',
            isCorrect: false,
            feedback: 'Página sem protocolo de segurança e domínio .net não governamental.'
          }
        ],
        explanation: 'Todas as páginas da administração pública federal brasileira são hospedadas sob o domínio unificado ".gov.br".'
      },
      {
        id: 'act5-2',
        order: 2,
        title: 'Sequência correta para agendar um serviço online',
        description: 'Organize a ordem correta dos passos para realizar um agendamento público sem se perder.',
        type: 'choice',
        question: 'Ordene os passos lógicos que você deve seguir para realizar um agendamento em um serviço público digital:',
        options: [
          {
            id: 'seq-1',
            text: '1. Acessar o portal oficial conferindo o domínio (.gov.br) → 2. Fazer login seguro com o CPF na conta Gov.br → 3. Escolher o serviço, data e horário desejados → 4. Concluir e salvar o número de protocolo e comprovante.',
            isCorrect: true,
            feedback: 'Sequência perfeita! Primeiro acessa-se o portal oficial conferindo o endereço, realiza-se o login protegido, escolhe-se o atendimento e guarda-se a comprovação do protocolo.'
          },
          {
            id: 'seq-2',
            text: '1. Fazer login seguro com o CPF na conta Gov.br → 2. Escolher o serviço, data e horário desejados → 3. Acessar o portal oficial conferindo o domínio (.gov.br) → 4. Concluir e salvar o número de protocolo e comprovante.',
            isCorrect: false,
            feedback: 'Atenção na ordem: é indispensável acessar e conferir o site oficial (.gov.br) ANTES de digitar seus dados e senha da conta Gov.br.'
          },
          {
            id: 'seq-3',
            text: '1. Concluir e salvar o número de protocolo e comprovante → 2. Escolher o serviço, data e horário desejados → 3. Fazer login seguro com o CPF na conta Gov.br → 4. Acessar o portal oficial conferindo o domínio (.gov.br).',
            isCorrect: false,
            feedback: 'Atenção na ordem: o protocolo só é emitido no final de todo o processo, após a escolha do serviço e a confirmação.'
          },
          {
            id: 'seq-4',
            text: '1. Escolher o serviço, data e horário desejados → 2. Acessar o portal oficial conferindo o domínio (.gov.br) → 3. Concluir e salvar o número de protocolo → 4. Fazer login seguro com o CPF na conta Gov.br.',
            isCorrect: false,
            feedback: 'Atenção na ordem: não é possível selecionar serviços governamentais sem estar no portal oficial e devidamente autenticado.'
          }
        ],
        stepItems: [
          {
            id: 'st1',
            text: 'Acessar o portal oficial conferindo o domínio (.gov.br)',
            correctPosition: 1
          },
          {
            id: 'st2',
            text: 'Fazer login seguro com o CPF na conta Gov.br',
            correctPosition: 2
          },
          {
            id: 'st3',
            text: 'Escolher o serviço, data e horário desejados',
            correctPosition: 3
          },
          {
            id: 'st4',
            text: 'Concluir e salvar o número de protocolo e comprovante',
            correctPosition: 4
          }
        ],
        explanation: 'A sequência correta garante que você use o canal autêntico, se autentique, escolha seu atendimento e guarde a comprovação necessária.'
      }
    ],
    summary: {
      headline: 'Você conquistou sua autonomia cidadã na internet!',
      keyTakeaways: [
        'A conta Gov.br unifica o acesso a milhares de serviços públicos gratuitos no Brasil.',
        'Os níveis Bronze, Prata e Ouro oferecem camadas adicionais de segurança para proteger seus dados.',
        'Documentos em aplicativos oficiais (como CNH Digital e e-Título) têm o mesmo valor de documentos impressos.',
        'Serviços públicos oficiais são hospedados em domínios terminados em ".gov.br".',
        'Sempre guarde o número de protocolo ou baixe o comprovante em PDF ao concluir uma solicitação.'
      ],
      practicalHabit: 'Nunca pague taxas por serviços públicos gratuitos. Se cobrarem para agendar um atendimento público, saia do site imediatamente.',
      encouragement: 'A cidadania digital devolve seu tempo e coloca o poder das decisões em suas próprias mãos!'
    },
    quiz: [
      {
        id: 'q5-1',
        question: 'Qual é o domínio padrão de internet que identifica que uma página pertence oficialmente ao governo brasileiro?',
        options: [
          '.com.br',
          '.gov.br',
          '.net',
          '.org'
        ],
        correctAnswer: 1,
        explanation: 'O sufixo ".gov.br" é exclusivo e restrito a entidades governamentais oficiais no Brasil.'
      },
      {
        id: 'q5-2',
        question: 'Ao concluir um agendamento ou solicitação de benefício em um portal de serviços públicos, o que você deve sempre guardar?',
        options: [
          'Apenas a cor de fundo da página',
          'O número do protocolo ou o comprovante em PDF emitido pelo sistema',
          'A senha do seu e-mail pessoal',
          'O cabo do monitor do computador'
        ],
        correctAnswer: 1,
        explanation: 'O número de protocolo é a sua garantia e comprovação oficial de que o pedido foi registrado no sistema público.'
      }
    ]
  }
];

export const FINAL_ASSESSMENT_QUESTIONS: Array<{
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}> = [
  {
    id: 'fin-1',
    category: 'Operação Básica',
    question: 'Se você precisa selecionar um arquivo e depois abrir esse mesmo arquivo, quais ações do mouse são necessárias?',
    options: [
      'Um clique simples para selecionar e dois cliques rápidos com o botão esquerdo para abrir',
      'Pressionar o botão direito cinco vezes',
      'Puxar o cabo do mouse da tomada',
      'Clicar apenas com a barra de espaço'
    ],
    correctAnswer: 0,
    explanation: 'O clique simples seleciona o elemento e o duplo clique abre o arquivo ou pasta.'
  },
  {
    id: 'fin-2',
    category: 'Navegação na Web',
    question: 'Você precisa entrar no site oficial da Previdência Social e já anotou o endereço completo. Onde você deve digitar esse endereço?',
    options: [
      'Na lixeira do computador',
      'Na barra de endereços (URL) localizada no topo do navegador de internet',
      'Em um aplicativo de desenho',
      'No bloco de notas do celular'
    ],
    correctAnswer: 1,
    explanation: 'A barra de endereços é o campo apropriado para digitar diretamente a URL do site desejado.'
  },
  {
    id: 'fin-3',
    category: 'Comunicação Digital',
    question: 'Ao enviar um currículo em PDF por e-mail para uma oportunidade de emprego, o que você deve fazer?',
    options: [
      'Escrever o texto no campo Assunto e deixar o e-mail sem anexo',
      'Preencher o destinatário, colocar um assunto claro e usar o ícone de anexo (clipe) para incluir o PDF',
      'Enviar apenas a senha do seu banco no corpo do e-mail',
      'Tirar uma foto da tela com flash e mandar por carta'
    ],
    correctAnswer: 1,
    explanation: 'A estrutura formal do e-mail inclui destinatário, assunto objetivo, texto e o arquivo anexado pelo clipe.'
  },
  {
    id: 'fin-4',
    category: 'Segurança da Informação',
    question: 'Você recebe uma mensagem de um número desconhecido no WhatsApp dizendo que sua conta bancária foi invadida e pede para clicar em um link urgente. Qual a atitude correta?',
    options: [
      'Clicar no link imediatamente e digitar todas as suas senhas',
      'Não clicar no link, não fornecer dados e consultar seu banco pelos canais oficiais conhecidos',
      'Encaminhar a mensagem para todos os seus parentes',
      'Mandar foto do cartão com o código de segurança'
    ],
    correctAnswer: 1,
    explanation: 'Mensagens alarmistas com links são o método mais comum de golpe. Nunca clique nem forneça senhas.'
  },
  {
    id: 'fin-5',
    category: 'Cidadania Digital',
    question: 'Para que serve a conta unificada Gov.br?',
    options: [
      'Para assistir a filmes de streaming e séries pagas',
      'Para acessar de forma gratuita e centralizada serviços públicos municipais, estaduais e federais com o seu CPF',
      'Para trocar a cor da carcaça do monitor',
      'Para enviar e-mails anônimos para vizinhos'
    ],
    correctAnswer: 1,
    explanation: 'A conta Gov.br é a plataforma digital oficial brasileira que unifica serviços públicos para o cidadão.'
  }
];
