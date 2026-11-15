# Conecta Digital

Plataforma educacional e comunitária voltada à inclusão digital. O projeto oferece conteúdos explicativos, atividades práticas e uma avaliação de conhecimentos. O progresso é armazenado localmente no navegador.

## Requisitos

- Node.js 20.19 ou superior (ou 22.12 ou superior)
- npm

## Executar em ambiente local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra o endereço informado pelo Vite, normalmente `http://localhost:3000/`.

## Verificações

- `npm run typecheck`: verifica os tipos TypeScript.
- `npm run build`: gera a versão de produção em `dist/`.
- `npm run preview`: inicia uma prévia da versão gerada.
- `npm run clean`: remove a pasta `dist/`.

## Estrutura do código

- `src/components/`: componentes reutilizáveis da interface.
- `src/data/`: conteúdo dos módulos e das avaliações.
- `src/hooks/`: hooks React para estado e progresso.
- `src/pages/`: páginas principais da aplicação.
- `src/services/`: regras de persistência e avaliação.
- `src/types/`: tipos compartilhados do TypeScript.

## Dados e privacidade

O progresso de aprendizagem é salvo no `localStorage` do navegador. Não há autenticação, API própria ou banco de dados remoto nesta versão. A página utiliza Google Fonts para carregar a família tipográfica definida no layout; essa requisição externa pode transmitir ao provedor dados técnicos de conexão.
