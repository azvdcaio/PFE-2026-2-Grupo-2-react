# 1. Visão geral

## Objetivo do produto (Product Goal)

Entregar um site responsivo e publicado que apresente o Hub e suas empresas (PKZ Lab, One To One e Fisioterapia) e leve o visitante ao contato ou ao agendamento, primeiro em HTML, CSS e JavaScript, e depois em React com componentes reutilizáveis.

## Cliente e contexto

- O cliente é um grupo de dois estúdios de treino esportivo: **PKZ Lab** (treino de jovens atletas, de 7 a 17 anos) e **One To One** (treino individual para adultos). Os dois funcionam no mesmo endereço, em lojas diferentes.
- A disciplina Projeto Front-End atua como "cliente": o professor avalia o site como avaliaria uma entrega real.
- Dificuldade principal do cliente: concentrar os dados dos alunos (testes, treinos, relatórios, agendamento e cobrança) em um só sistema.
- Em 06/11 o cliente pediu uma **terceira página, de Fisioterapia**, com a mesma importância das outras duas.

## Escopo

**Dentro do escopo**

- Documentação do projeto: Documento de Visão, Brainstorm, mapa mental, 5W2H, AHT (fluxo de ações do usuário), Figma, atas de reunião e Scrum.
- Site em duas versões: vanilla (HTML, CSS e JS) e React com Vite.
- Páginas: Hub, PKZ Lab, One To One, Fisioterapia (só no React), Contato e Agendamento.
- Acessibilidade (WAVE e validador HTML), responsividade e publicação (GitHub Pages e Vercel).

**Fora do escopo** (confirmado com o professor ou por depender de back-end)

- Login, cadastro, relatórios e dashboards de alunos, cobrança e notificações: dependem de back-end. Login e Cadastro foram trocados pelo Agendamento (11/10).
- Página de contato e de agendamento da Fisioterapia: ela tem só um botão para o WhatsApp.
- Cancelamento de agendamento: retirado do projeto final.
- Chatbot em JavaScript (ideia do Danilo, 31/08): adiado e não implementado.
- Alterações no site vanilla depois da migração: o professor pediu para não mexer nele.

## Linha do tempo

| Data | Marco |
|---|---|
| 21/08 | Grupo criado; início do Documento de Visão de exercício |
| 28/08 | Apresentação do documento |
| 29/08 a 30/08 | Repositório da AP1 e áudio da entrevista com o cliente |
| 04/09 | Aula de Scrum, Figma e WAVE; briefing do Hub |
| 10/09 a 24/09 | Brainstorm, Documento de Visão, mapa mental, 5W2H, AHT e Figma |
| 25/09 | Apresentação da AP1; feedback do professor |
| 07/10 | Novo repositório (vanilla) |
| 14/10 | Nota da AP1: 8,5 |
| 14/10 a 27/10 | HTML, CSS, responsividade e interações do site vanilla |
| 30/10 | Site vanilla publicado no GitHub Pages |
| 01/11 a 09/11 | Migração para React, Fisioterapia, componentes e imagens |
| 10/11 a 11/11 | Contato e agendamento em React |
| 12/11 | Site em React publicado no Vercel; início da AP2 |
| 13/11 | Ajustes finais e documentação Scrum |

## Páginas e rotas (versão React)

| Rota | Página |
|---|---|
| `/` | Hub |
| `/pkz-lab` | PKZ Lab |
| `/one-to-one` | One To One |
| `/fisioterapia` | Fisioterapia |
| `/pkz-lab/contato` e `/one-to-one/contato` | Contato |
| `/pkz-lab/agendamento` e `/one-to-one/agendamento` | Agendamento |

## Tecnologias

Vanilla: HTML, CSS (mobile-first) e JavaScript, publicado no GitHub Pages. React: React 19, Vite 8 e React Router 7, publicado no Vercel. Em comum: Git/GitHub, Figma, PlantUML (AHT), WAVE e validador HTML.

## Equipe

| Integrante | Atuação observada |
|---|---|
| Caio | Scrum Master; Brainstorm, atas e README; One To One; Fisioterapia, CtaFinal, Carrossel; publicações no GitHub Pages e no Vercel |
| Danilo | Figma; Hub e agendamento; Acordeon, Hero e estrutura de componentes em React |
| Ester | 5W2H; PKZ Lab; acessibilidade, responsividade e imagens; ImagemResponsiva |
| Pedro | Introdução do Documento de Visão; contato (PKZ Lab, e depois One To One); links e dados de redes sociais; publicação |
| Vitor | AHT; contato da One To One (vanilla); agendamento (React) |
