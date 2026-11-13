# 3. Product Backlog

Lista priorizada em User Stories. Formato: *Como [quem], quero [o quê], para [benefício].*
Prioridade: **Alta** (necessário para a entrega), **Média** (melhora a entrega) e **Baixa** (pode ficar para depois).
Situação em **13/11/2026**.

## Estrutura e base do projeto

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-01 | Como equipe, quero a estrutura do projeto em React com Vite e rotas, para dividir o trabalho por componentes e páginas. | Alta | 1 | Concluído |
| PB-02 | Como visitante, quero navegar entre as páginas sem recarregar o site e ver em qual página estou, para me localizar (NavLink). | Alta | 1 | Concluído |
| PB-03 | Como equipe, quero componentes reutilizáveis (Hero, Secao, Card, Header, Footer), para não repetir código entre as páginas. | Alta | 1 e 2 | Concluído |
| PB-04 | Como visitante, quero que a navegação funcione em celular, com menu hambúrguer, para usar o site em qualquer tela. | Alta | 1 | Concluído |

## Páginas

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-05 | Como visitante, quero um Hub que me leve à PKZ Lab, à One To One ou à Fisioterapia, para escolher o que me interessa. | Alta | 2 | Concluído |
| PB-06 | Como pai ou atleta, quero a página da PKZ Lab com planos, dúvidas, localização e opiniões, para conhecer o treino. | Alta | 1 e 3 | Concluído |
| PB-07 | Como adulto, quero a página da One To One completa, para conhecer o treino individual. | Alta | 2 | Concluído |
| PB-08 | Como visitante, quero uma página de Fisioterapia com "Quem somos nós" e um botão que abre o WhatsApp, para falar direto com a equipe. | Alta | 2 | Concluído |
| PB-09 | Como visitante, quero uma página de contato de cada empresa, para falar com ela. | Alta | 3 | Concluído |
| PB-10 | Como aluno, quero agendar uma aula experimental, para começar a treinar. | Alta | 3 | Concluído |

## Componentes com comportamento

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-11 | Como visitante, quero perguntas e respostas que abrem e fecham (Acordeon), para ler só o que me interessa. | Média | 2 | Concluído |
| PB-12 | Como visitante, quero ver os planos em um carrossel, para comparar sem rolar demais. | Média | 2 | Concluído |
| PB-13 | Como equipe, quero que Acordeon e Carrossel usem `useState`, `useEffect` e `useRef`, para seguir a matéria de React. | Alta | 2 | Concluído |

## Requisitos do cliente e do professor

| ID | User Story | Prioridade | Sprint | Situação |
|---|---|---|---|---|
| PB-14 | Como professor, quero as imagens em mais de um formato (AVIF, WebP e JPG) e com `object-fit`, para validar acessibilidade e desempenho. | Alta | 2 | Concluído |
| PB-15 | Como cliente, quero o cancelamento de agendamento fora do site, pois ele depende de back-end. | Alta | 2 | Concluído |
| PB-16 | Como professor, quero o site publicado em um endereço público (Vercel), para avaliar a entrega. | Alta | 3 | Concluído |
| PB-17 | Como visitante, quero que a primeira tela de cada página seja ocupada pelo hero, para ter uma boa primeira impressão. | Média | 3 | Concluído *(fora do chat)* |
| PB-18 | Como visitante, quero o site funcionando ao abrir uma URL direta ou atualizar a página (`vercel.json`), para não ver erro 404. | Alta | 3 | Concluído *(fora do chat)* |
| PB-19 | Como cliente, quero a logo vetorial oficial da PKZ Lab e da One To One no site. | Média | 3 | **Em andamento** (SVGs recebidos em 12/11; a troca não aparece confirmada no chat) |

## Pendências e riscos

| ID | Item | Prioridade | Situação |
|---|---|---|---|
| PB-20 | Trocar o WhatsApp, o e-mail e os links de redes sociais genéricos pelos oficiais. A equipe não achou e-mail do cliente, e a Fisioterapia não recebeu dados de contato. | Alta | **Em aberto** (WhatsApp e Instagram da PKZ Lab e da One To One já entraram; e-mail e dados da Fisioterapia seguem genéricos) |
| PB-21 | Criar uma cópia do site sem o Agendamento, usando o repositório atual como template, e enviar os dois sites por e-mail ao professor. | Alta | **Em aberto** (combinado em 13/11) |
| PB-22 | Preparar a equipe para as perguntas do professor sobre a lógica do código. | Alta | **Em andamento** |
| PB-23 | Substituir o favicon padrão e revisar imagens e textos provisórios. | Baixa | Em aberto |
| PB-24 | Migrar as interações que ainda usam manipulação direta do DOM (calendário, formulário e modal) para estado do React. | Média | Em aberto |
