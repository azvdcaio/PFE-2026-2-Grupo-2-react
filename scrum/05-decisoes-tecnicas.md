# 5. Decisões técnicas e de processo

Registro das escolhas feitas ao longo do projeto e o motivo de cada uma.

## Fase 1: Documentação (AP1)

| # | Decisão | Motivo | Quem e quando |
|---|---|---|---|
| 1 | **Site de hackathon como produto do primeiro Documento de Visão** | O documento precisa de um produto como base; o tema se relaciona com a área do grupo | Caio e Danilo, 21/08 |
| 2 | **Cada pessoa escreve uma ou duas seções** e as outras leem para alinhar | Divide o trabalho e mantém o texto coerente | Equipe, 21/08 e 22/08 |
| 3 | **O site será um Hub** que leva à PKZ Lab e à One To One, cada uma com landing page, hero e CTA | Orientação do professor na aula de 04/09 | Equipe, 04/09 |
| 4 | **Chatbot em JavaScript adiado** para depois da AP1 | Não entrava no escopo da apresentação | Danilo e Caio, 31/08 |
| 5 | **AHT em imagem `.png`, gerada com PlantUML** | Pedido do professor | Vitor, 24/09 |
| 6 | **Fonte Work Sans** no Figma e no site | Padronização visual | Danilo, 24/09 |
| 7 | **Atas e resumos de reunião** guardados no repositório | O professor quer ver o registro das conversas com o cliente | Caio, 18/09 |
| 8 | **`.gitignore`** para arquivos do sistema (`.DS_Store`) | Arquivos de Mac foram parar no GitHub | Ester, 10/10 |
| 9 | **Login e cadastro trocados por Agendamento** | Login depende de back-end; o agendamento cabe em front-end. O Figma manteve as telas antigas por precaução | Danilo, 11/10 |
| 10 | **Hero padronizado nas três landing pages:** título que não seja o nome da página, subtítulo em parágrafo e CTA, no estilo do Hub | Feedback do professor | Ester, 13/10 |

## Fase 2: Site vanilla

| # | Decisão | Motivo | Quem e quando |
|---|---|---|---|
| 11 | **Header e footer iguais em todas as páginas**, mudando só as cores por empresa; logo do Hub no footer | Menos código e visual consistente. O professor confirmou que o footer pode ser padronizado ou individual | Equipe, 17/10 a 20/10 |
| 12 | **Um único CSS** para todas as páginas, com classes reutilizáveis e mobile-first (breakpoints 601, 768 e 1025px) | Reduz linhas e retrabalho, já que há páginas quase idênticas | Equipe, 18/10 a 25/10 |
| 13 | **Padding horizontal de 64px até 1100px**, `line-height` 1,6 e espaçamentos de texto conforme o WCAG | Legibilidade e acessibilidade | Ester e Danilo, 23/10 |
| 14 | **JavaScript só para menu hambúrguer, agendamento e modal do Hub**, em arquivo separado | Orientação do professor | Ester, 10/10 |
| 15 | **Nome das páginas em português** (`inicio.html`) e arquivo por empresa (`pkz-contato`) | Organização | Ester e Danilo, 10/10 |
| 16 | **Carrossel de opiniões removido** | O Figma não tem esse carrossel | Ester, 24/10 |
| 17 | **Imagens representativas** em vez de placeholders explícitos | O professor valoriza imagens funcionais | Equipe, 28/10 |
| 18 | **Publicação no GitHub Pages** (vanilla) e **Vercel** (React) | Orientação para cada versão | Equipe, 29/10 |
| 19 | **`git pull` antes de todo `push`** e avisar o grupo antes de editar | Houve conflitos de merge no vanilla | Ester, 24/10 e 25/10 |

## Fase 3: Site em React

| # | Decisão | Motivo | Quem e quando |
|---|---|---|---|
| 15 | **React com Vite** e hospedagem no **Vercel** | É a stack da disciplina; o Vercel publica a cada `push` na `main` | Equipe, 29/10 |
| 16 | **Cada página é um componente**, e as partes repetidas viram componentes | Evita repetir código; a página só monta e passa dados | Danilo, 01/11 |
| 17 | **Um único `Hero`**, com textos e botões por props | Mantém as páginas iguais e evita um `PkzHero` específico | Danilo e Ester, 02/11 |
| 18 | **Só vira componente o que aparece em mais de uma página**; o resto fica em JSX na página | Componente específico demais não é reaproveitado | Danilo, 02/11 |
| 19 | **React Router com `NavLink`** | Já traz a classe `active`, que marca a página atual no menu | Ester e Danilo, 02/11 |
| 20 | **`useState` no menu hambúrguer** e **`useState`, `useEffect` e `useRef` no Carrossel** | Segue o material da matéria e evita manipular o DOM na mão | Equipe, 01/11 e 06/11 |
| 21 | **`Acordeon` e `Carrossel` como componentes** | Reaproveitamento nas páginas da PKZ Lab e da One To One | Danilo e Caio, 06/11 |
| 22 | **Imagens em AVIF, WebP e JPG**, via `ImagemResponsiva`, e `object-fit` no CSS | Pedido do professor por acessibilidade e desempenho; passou de 25 para 104 arquivos | Ester, 06/11 |
| 23 | **Fisioterapia sem página de contato e de agendamento**, com botão de WhatsApp | Orientação do professor (cliente) | Caio, 06/11 |
| 24 | **Cancelamento de agendamento removido** | Depende de back-end, que está fora do escopo | Ester e Caio, 30/10 e 06/11 |
| 25 | **Código simples**, no nível dos componentes do professor | Evitar termos avançados que a equipe não consiga explicar | Danilo, 06/11 |
| 26 | **Vanilla não é alterado** | Pedido do professor | Caio, 06/11 |
| 27 | **`vercel.json` com `rewrites` para `index.html`** | Sem ele, abrir a URL direta ou atualizar a página dá erro 404 | Caio, 12/11 *(fora do chat)* |
| 28 | **Hero com `min-height: max(Npx, calc(100vh - 64px))`** | Ocupar a primeira tela, descontando o header | Caio, 12/11 *(fora do chat)* |
| 29 | **Contato e Agendamento ficam em `components/`**, e as páginas só os chamam | Organização; o `Agendamento.jsx` não é uma página | Danilo, 10/11 e 11/11 |
| 30 | **`siteConfig.js` guarda rotas, marcas e links do menu** | Um só lugar para mudar dados do site | Ester e Danilo, 06/11 e 09/11 |

## Pontos que ainda não seguem o "React puro"

O calendário, o formulário de contato e o modal ainda usam `interactions/interacoes.js`, um script que manipula o DOM diretamente e foi aproveitado do site vanilla. A migração para estado do React (`useState`) está no backlog (PB-46).