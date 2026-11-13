# 3. Product Backlog

Lista priorizada em User Stories de todo o projeto. Formato: *Como [quem], quero [o quê], para [benefício].*
Prioridade: **Alta** (necessário para a entrega), **Média** (melhora a entrega) e **Baixa** (pode ficar para depois).
Situação em **13/11/2026**.

## Fase 1: Documentação e protótipo (AP1)

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-01 | Como professor, quero um Documento de Visão com 7 seções, para avaliar se o grupo entende como descrever um produto (exercício com site de hackathon). | Alta | 1 | Concluído |
| PB-02 | Como equipe, quero entender o cliente a partir da entrevista, para saber o que é possível entregar em front-end. | Alta | 2 | Concluído |
| PB-03 | Como equipe, quero um Brainstorm das ideias do grupo, para guiar o Documento de Visão. | Alta | 3 | Concluído |
| PB-04 | Como professor e cliente, quero um Documento de Visão do projeto real, para validar o escopo. | Alta | 3 | Concluído |
| PB-05 | Como equipe, quero um mapa mental do projeto, para organizar visualmente as ideias. | Média | 3 | Concluído |
| PB-06 | Como equipe, quero um 5W2H, para planejar o que, quem, onde, quando, por que, como e quanto. | Alta | 4 | Concluído |
| PB-07 | Como equipe, quero a AHT (fluxo de ações do usuário) em imagem, para mostrar os caminhos de cada página. | Alta | 4 e 5 | Concluído (corrigida em 13/10) |
| PB-08 | Como equipe, quero um protótipo no Figma, para validar o visual antes de programar. | Alta | 3 e 4 | Concluído |
| PB-09 | Como professor, quero atas e resumos das reuniões com o cliente, para ver como o grupo registra as decisões. | Alta | 3 | Concluído |
| PB-10 | Como equipe, quero um repositório organizado, com README, guia de comandos Git, `.gitignore` e instruções, para trabalharmos juntos. | Média | 1 a 5 | Concluído |
| PB-11 | Como professor, quero a documentação Scrum do projeto, para acompanhar o processo da equipe. | Alta | 4 a 11 | **Concluído com esta pasta** |
| PB-12 | Como cliente, quero um CTA no hero de cada empresa, para agendar uma aula experimental; e contraste adequado entre imagem e texto (feedback de 25/09). | Alta | 5 a 7 | Concluído |

## Fase 2: Site vanilla (HTML, CSS e JavaScript)

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-13 | Como visitante, quero o HTML do Hub, da PKZ Lab, da One To One, do contato e do agendamento, para navegar pelo site. | Alta | 5 e 6 | Concluído |
| PB-14 | Como visitante, quero header, footer e hero padronizados entre as páginas, para me orientar com facilidade. | Alta | 6 e 7 | Concluído |
| PB-15 | Como visitante, quero um site estilizado e legível, com tipografia e espaçamentos acessíveis (WCAG). | Alta | 6 e 7 | Concluído |
| PB-16 | Como visitante com deficiência, quero contraste, rótulos e HTML válidos, para usar o site com leitores de tela (WAVE e validador). | Alta | 7 e 8 | Concluído |
| PB-17 | Como visitante, quero o site responsivo, com menu hambúrguer e indicação da página atual, para usá-lo no celular. | Alta | 7 | Concluído |
| PB-18 | Como visitante, quero um modal de escolha no Hub e um calendário de agendamento, para falar com a empresa e marcar uma aula. | Alta | 7 e 8 | Concluído |
| PB-19 | Como visitante, quero um carrossel de opiniões, para ler depoimentos. | Baixa | 7 | Removido: o Figma não tem esse carrossel |
| PB-20 | Como visitante, quero imagens e textos representativos, sem placeholders explícitos, para ter uma ideia do serviço real. | Alta | 8 | Concluído |
| PB-21 | Como visitante, quero perguntas e respostas (FAQ) em cada empresa, para tirar dúvidas. | Média | 8 | Concluído |
| PB-22 | Como professor, quero o site vanilla publicado, para avaliar a entrega (GitHub Pages). | Alta | 8 | Concluído |

## Fase 3: Site em React (AP2)

### Estrutura e base do projeto

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-23 | Como equipe, quero a estrutura do projeto em React com Vite e rotas, para dividir o trabalho por componentes e páginas. | Alta | 9 | Concluído |
| PB-24 | Como visitante, quero navegar entre as páginas sem recarregar o site e ver em qual página estou, para me localizar (NavLink). | Alta | 9 | Concluído |
| PB-25 | Como equipe, quero componentes reutilizáveis (Hero, Secao, Card, Header, Footer), para não repetir código entre as páginas. | Alta | 9 e 10 | Concluído |
| PB-26 | Como visitante, quero que a navegação funcione em celular, com menu hambúrguer, para usar o site em qualquer tela. | Alta | 9 | Concluído |

### Páginas

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-27 | Como visitante, quero um Hub que me leve à PKZ Lab, à One To One ou à Fisioterapia, para escolher o que me interessa. | Alta | 10 | Concluído |
| PB-28 | Como pai ou atleta, quero a página da PKZ Lab com planos, dúvidas, localização e opiniões, para conhecer o treino. | Alta | 9 e 11 | Concluído |
| PB-29 | Como adulto, quero a página da One To One completa, para conhecer o treino individual. | Alta | 10 | Concluído |
| PB-30 | Como visitante, quero uma página de Fisioterapia com "Quem somos nós" e um botão que abre o WhatsApp, para falar direto com a equipe. | Alta | 10 | Concluído |
| PB-31 | Como visitante, quero uma página de contato de cada empresa, para falar com ela. | Alta | 11 | Concluído |
| PB-32 | Como aluno, quero agendar uma aula experimental, para começar a treinar. | Alta | 11 | Concluído |

### Componentes com comportamento

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-33 | Como visitante, quero perguntas e respostas que abrem e fecham (Acordeon), para ler só o que me interessa. | Média | 10 | Concluído |
| PB-34 | Como visitante, quero ver os planos em um carrossel, para comparar sem rolar demais. | Média | 10 | Concluído |
| PB-35 | Como equipe, quero que Acordeon e Carrossel usem `useState`, `useEffect` e `useRef`, para seguir a matéria de React. | Alta | 10 | Concluído |

### Requisitos do cliente e do professor

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-36 | Como professor, quero as imagens em mais de um formato (AVIF, WebP e JPG) e com `object-fit`, para validar acessibilidade e desempenho. | Alta | 10 | Concluído |
| PB-37 | Como cliente, quero o cancelamento de agendamento fora do site, pois ele depende de back-end. | Alta | 10 | Concluído |
| PB-38 | Como professor, quero o site publicado em um endereço público (Vercel), para avaliar a entrega. | Alta | 11 | Concluído |
| PB-39 | Como visitante, quero que a primeira tela de cada página seja ocupada pelo hero, para ter uma boa primeira impressão. | Média | 11 | Concluído *(fora do chat)* |
| PB-40 | Como visitante, quero o site funcionando ao abrir uma URL direta ou atualizar a página (`vercel.json`), para não ver erro 404. | Alta | 11 | Concluído *(fora do chat)* |
| PB-41 | Como cliente, quero a logo vetorial oficial da PKZ Lab e da One To One no site. | Média | 11 | **Em andamento** (SVGs recebidos em 12/11; a troca não aparece confirmada no chat) |

### Pendências e riscos

| ID | Item | Prioridade | Situação |
|---|---|---|---|
| PB-42 | Trocar o WhatsApp, o e-mail e os links de redes sociais genéricos pelos oficiais. A equipe não achou e-mail do cliente, e a Fisioterapia não recebeu dados de contato. | Alta | **Em aberto** (WhatsApp e Instagram da PKZ Lab e da One To One já entraram; e-mail e dados da Fisioterapia seguem genéricos) |
| PB-43 | Criar uma cópia do site sem o Agendamento, usando o repositório atual como template, e enviar os dois sites por e-mail ao professor. | Alta | **Em aberto** (combinado em 13/11) |
| PB-44 | Preparar a equipe para as perguntas do professor sobre a lógica do código. | Alta | **Em andamento** |
| PB-45 | Substituir o favicon padrão e revisar imagens e textos provisórios. | Baixa | Em aberto |
| PB-46 | Migrar as interações que ainda usam manipulação direta do DOM (calendário, formulário e modal) para estado do React. | Média | Em aberto |
