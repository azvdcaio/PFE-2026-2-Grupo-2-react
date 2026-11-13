# Sprint 7

**Período:** 21/10 a 27/10
**Sprint Goal:** Estilizar as páginas em um único CSS, aplicar tipografia e acessibilidade globais e iniciar as interações em JavaScript e a responsividade.

## Sprint Backlog

- [x] CSS da página inicial (Hub) e das páginas de agendamento (Danilo, 22/10)
- [x] Padding horizontal global: 64px até 1100px de tela, depois o conteúdo centraliza (Ester e Danilo, 23/10). O padding vertical ficou em discussão, porque cada seção passou a ocupar a tela inteira
- [x] Tipografia global: `line-height` 1.6, `letter-spacing` e `word-spacing` seguindo o WCAG, `img` como `display: block` e tamanhos padrão de `h1`, `h2`, `span` e `p` (Ester, 23/10)
- [x] Ajuste de unidades: `line-height` sem unidade e `letter-spacing` em `em` (Ester e Danilo, 24/10)
- [x] CSS da PKZ Lab finalizado, com ajuste do tamanho dos cards (Ester, 23/10 e 24/10)
- [x] Hub: modal no botão "Entrar em contato" para escolher entre PKZ Lab e One To One, cards que aparecem ao rolar a página e parte do agendamento (Danilo, 24/10)
- [x] Carrossel de opiniões da PKZ implementado em JS (Ester, 24/10) e removido no mesmo dia para seguir o Figma, que não tem carrossel de opiniões
- [x] Unificar headers e footers entre as páginas e adicionar imagens (Danilo, 25/10)
- [x] Acessibilidade e validação da PKZ, do header e do footer (Ester, 25/10): contraste do kicker corrigido (azul escuro para azul claro), `aria-label` do footer sem título apontado, "/" removido de tags void como `<img>`, título "Redes sociais" de 10px para 12px e ícones maiores
- [x] Media queries da PKZ Lab, testadas no celular, exceto o menu hambúrguer (Ester, 25/10)
- [x] CSS da One To One e dos contatos: o CSS é único para todas as páginas (Vitor, 25/10); Pedro aplicou as mesmas classes no contato da PKZ Lab (26/10) e Danilo declarou o site "pronto" em 26/10
- [x] Media queries do Hub, da One To One, dos contatos e dos agendamentos: Danilo confirmou contato e agendamento responsivos (26/10)
- [x] Menu hambúrguer no celular (Ester viu pronto em 26/10). Na One To One ele ficava na logo, e Caio corrigiu em 27/10: logo à esquerda e menu à direita, como no Hub e na PKZ Lab
- [ ] Definir como carregar o JS: `defer` no `head` ou `script` no fim do `body` (dúvida do Danilo em 21/10; Ester não viu o professor especificar; consenso apenas de que deve ficar em arquivo separado)
- [ ] Avaliar um código único de JS para todos os carrosséis (Danilo e Ester, 24/10)
- [x] Criar o repositório separado para a versão em React (Ester e Danilo, 22/10; o repositório já existia em 01/11)
- [ ] Colocar o `scrum.md` no repositório vanilla (Ester, 23/10)
- [x] Imagens da Ester no código (26/10) e conferência do endereço da empresa: Armando Lombardi, 949 (Ester e Caio, 27/10)
- [x] Retirar o texto de fundo do hero da One To One, para eliminar o erro de contraste do WAVE (Caio, 27/10)
- [x] Indicar a página atual com negrito em todos os headers e menus (Caio, 27/10), a pedido do professor, que cobra isso no menu hambúrguer e no menu normal

## Critérios usados pela equipe (observados no chat)

- Passar a página no WAVE e no validador HTML e corrigir contraste, `aria-label` sem título e tags void.
- Testar a responsividade no celular.
- Avisar no grupo antes de editar o código ("Modificando o código @all", Ester, 24/10 e 25/10) e confirmar com o dono da página antes de alterar o trabalho dele.

## Resultado da Sprint Review

- Hub, PKZ Lab, One To One, contatos e agendamentos com CSS, responsividade e menu hambúrguer. Header e footer unificados (Danilo, 26/10: "o site tá pronto").
- Em 27/10 o professor orientou, em sala, colocar as imagens do hero no HTML com tamanho em cada tag. Ele não vai cobrar isso agora, só na versão em React (Ester e Danilo, 27/10).
- Feedback de outro grupo, repassado pelo Caio em 27/10: o professor passa rápido pelo site, mas repara em detalhes, como a indicação da página no menu hambúrguer.
- Feedbacks internos registrados em 24/10: Danilo pediu menos um parágrafo na seção "Quem somos nós", CTA final da PKZ maior e CTA das heros em azul, como o que o Caio fez na One To One. Ester ajustou o tamanho dos cards da PKZ, e Danilo sugeriu mais espaço entre eles.
- Danilo planeja reaproveitar os blocos de características da Ester nas outras páginas.
- Informação relayada pelo Danilo em 24/10: Pedro viajou e só voltaria a mexer no site na segunda (26/10), e a Ester acompanhava no lugar dele.
- Feedback do cliente e do professor nesta sprint: não registrado no chat.

## Retrospectiva

- **O que funcionou bem:** o reaproveitamento de classes e a padronização reduziram o retrabalho. O hábito de avisar no grupo antes de editar o código passou a ser usado a partir de 24/10.
- **O que pode melhorar:**
  - Houve dois conflitos de merge: um em 21/10 (Ester deu `pull` e, minutos depois, precisou fazer merge ao dar `push`) e outro em 24/10 (Danilo deu `push` sem `pull`, sem saber que a Ester estava editando). Na noite de 24/10 a Ester notou o carrossel de opiniões parado e fontes diferentes na página dela; o chat não confirma a causa.
  - As media queries só começaram em 24/10, perto do fim do ciclo.
  - Valores de espaçamento do texto ficaram ambíguos: Ester citou `letter-spacing` 0.12 e `word-spacing` 0.16, e Danilo citou 0.012em e 0.016em; o chat não registra qual valor ficou.
  - A disponibilidade foi limitada por outras entregas (Tarefa 3 de Dev Web, 21/10 e 22/10) e por Danilo só acessar o código pelo GitHub em alguns momentos.
- **Ações para a próxima sprint (sugeridas a partir do chat; confirmar com a equipe):**
  - Dar `git pull` antes de todo `push`.
  - Definir quem faz as media queries do Hub, da One To One, dos contatos e dos agendamentos.
  - Fixar os valores finais de `letter-spacing` e `word-spacing` no CSS global.
  - Confirmar quem está estilizando a One To One, para não duplicar trabalho (resolvido: CSS único para todas as páginas).