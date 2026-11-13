# 1. Visão geral

## Objetivo do produto (Product Goal)

Entregar um site em React, publicado e responsivo, que apresente o Hub e suas empresas (PKZ Lab, One To One e Fisioterapia) e leve o visitante ao contato ou ao agendamento, reaproveitando componentes entre as páginas.

## Cliente e contexto

- O cliente é um grupo de dois estúdios de treino esportivo: **PKZ Lab** (treino de jovens atletas) e **One To One** (treino individual para adultos). Os dois funcionam no mesmo endereço, em lojas diferentes.
- A disciplina Projeto Front-End atua como "cliente": o professor avalia o site como avaliaria uma entrega real.
- Em 06/11 o cliente pediu uma **terceira página, de Fisioterapia**, com a mesma importância das outras duas.

## Escopo da AP2

**Dentro do escopo**

- Migrar o site vanilla (HTML, CSS e JS) para React com Vite.
- Páginas: Hub, PKZ Lab, One To One, Fisioterapia, Contato e Agendamento (PKZ Lab e One To One).
- Componentes reutilizáveis, rotas com React Router e publicação no Vercel.
- Imagens em mais de um formato (AVIF, WebP e JPG), por acessibilidade e desempenho.

**Fora do escopo** (confirmado com o professor)

- Login, cadastro e relatórios de alunos: dependem de back-end.
- Página de contato e de agendamento da Fisioterapia: ela tem só um botão que abre o WhatsApp.
- Cancelamento de agendamento: foi retirado do projeto.
- Alterações no site vanilla: o professor pediu para não mexer nele.

## Páginas e rotas

| Rota | Página |
|---|---|
| `/` | Hub |
| `/pkz-lab` | PKZ Lab |
| `/one-to-one` | One To One |
| `/fisioterapia` | Fisioterapia |
| `/pkz-lab/contato` e `/one-to-one/contato` | Contato |
| `/pkz-lab/agendamento` e `/one-to-one/agendamento` | Agendamento |

## Tecnologias

React 19, Vite 8, React Router 7, CSS puro (mobile-first), Git/GitHub e Vercel.

## Equipe

| Integrante | Atuação observada nesta fase |
|---|---|
| Caio | One To One, Fisioterapia, CtaFinal, Carrossel, README, publicação no Vercel e ajustes de hero |
| Danilo | Estrutura em componentes, Hub, Hero, Secao, Card, rotas e Header, Acordeon, otimização de imagens |
| Ester | PKZ Lab, ImagemResponsiva, imagens em vários formatos, config, integração do contato da Fisioterapia |
| Pedro | Contato (One To One e PKZ Lab), links e dados de redes sociais |
| Vitor | Agendamento |
