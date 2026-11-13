# Sprint 2

**Período:** 06/11 a 09/11
**Sprint Goal:** Incluir a página de Fisioterapia pedida pelo cliente, criar os componentes com comportamento (Acordeon e Carrossel), trocar as imagens por versões em vários formatos e dividir as páginas entre a equipe.

> O período foi definido por quem escreveu esta documentação, com base nas datas do chat.

## Contexto de entrada

- Em 06/11 o cliente pediu uma **página de Fisioterapia**, com a mesma importância da PKZ Lab e da One To One (Danilo, 06/11).
- O professor informou ao Caio que a Fisioterapia **não deve ter página de contato nem de agendamento**, só um botão que leva direto ao número do cliente (Caio, 06/11).
- O professor pediu mais formatos de imagem, por acessibilidade (Ester, 06/11).
- A matéria de React pede estado e efeitos (`useState` e `useEffect`) nos componentes.

## Sprint Backlog

- [x] Criar o componente `Acordeon` para as dúvidas e respostas da PKZ Lab e da One To One (Danilo, 06/11)
- [x] Criar uma versão do site com a Fisioterapia, sem o cancelamento de agendamento e com `Carrossel` e `Acordeon` como componentes (Caio, 06/11). A equipe usou essa versão como base, e Pedro também gerou a dele
- [x] Retirar a legenda do menu de navegação (Ester, 06/11)
- [x] Retirar o cancelamento de agendamento (já saiu na versão do Caio; Ester confirmou em 06/11)
- [x] Ajustar a Fisioterapia ao pedido do professor: "Quem somos nós" no formato texto e foto da PKZ Lab, botão para o WhatsApp e nenhuma página de contato (Caio, 06/11)
- [x] Trocar as imagens por versões em AVIF, WebP e JPG, com o componente `ImagemResponsiva` e `object-fit` no CSS. Passou de 25 para 104 arquivos (Ester, 06/11)
- [x] Copiar a pasta de imagens para o repositório em um único commit (Ester, 06/11)
- [x] Preparar todos os arquivos do projeto no repositório, com `siteConfig.js` ajustado depois pelo Danilo (Ester e Danilo, 06/11 e 09/11)
- [x] Corrigir o erro de navegação que impedia abrir a PKZ Lab: o caminho da rota no `App.jsx` estava diferente do `siteConfig.js` (Ester, 09/11)
- [x] Criar o Hub e o Agendamento em React (Danilo, 09/11)
- [x] Criar `CtaFinal` e `Carrossel`, e montar a página One To One completa, a Fisioterapia, a rota e o README (Caio, 09/11)
- [x] Dividir o restante: Pedro ou Vitor fazem o contato, e o outro faz o agendamento (Danilo, 09/11)
- [ ] Preencher as páginas no repositório: em 06/11 só a PKZ Lab estava preenchida; cada pessoa colava a sua parte no código do GitHub a partir de 09/11
- [ ] Definir o conteúdo da Fisioterapia: o professor não especificou serviços (Ester perguntou em 06/11; ficou só o "Quem somos nós" e o CTA)

## Resultado da Sprint Review

- A versão do Caio foi aprovada pela Ester ("gostei", 06/11), com ajustes a fazer na mão.
- Ester achou que a Fisioterapia deveria ser um serviço dentro das empresas, mas confirmou que o professor pediu uma página própria.
- Foi apontado que, no celular, "Quem somos nós" ficava colado no hero na Fisioterapia (Ester, 06/11).
- Feedback do professor e do cliente nesta sprint: só o que foi dito sobre a Fisioterapia; nada sobre as demais páginas.

## Retrospectiva

- **O que funcionou bem:**
  - Partir de uma versão pronta (a do Caio) e ajustar à mão poupou tempo.
  - A divisão por partes (Hub e Agendamento, PKZ Lab, One To One e Fisioterapia, Contato) deixou cada pessoa dona de um pedaço.
  - Os componentes `CtaFinal` e `Carrossel` foram reaproveitados entre páginas.
- **O que pode melhorar:**
  - Houve três versões em paralelo (Caio, Pedro e Ester) e risco de trabalho duplicado.
  - O `App.jsx` não foi atualizado quando o `siteConfig.js` mudou, e a PKZ Lab ficou sem rota por algumas horas.
  - O Danilo pediu que o código fosse revisado e, se estivesse complicado, simplificado, porque o professor criou os componentes de forma simples e não faz sentido usar termos avançados (06/11).
  - A disponibilidade de alguns membros foi limitada por outras disciplinas (Pedro, 09/11).
- **Ações para a próxima sprint (sugeridas a partir do chat; confirmar com a equipe):**
  - Quem muda o `siteConfig.js` revisa o `App.jsx` junto.
  - Colar e commitar a própria parte em pequenos commits, com `git pull` antes.

> Campos de horas e esforço não estão preenchidos porque a equipe não registrou esse dado.
