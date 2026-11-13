# Sprint 11

**Período:** 10/11 a 13/11 (em andamento; o chat registra atividade até 13/11 às 9h38)
**Sprint Goal:** Fechar contato e agendamento, publicar o site no Vercel e deixar a equipe pronta para a AP2.

## Contexto de entrada

- A AP2 vai de 12/11 a 18/11.
- Faltavam as páginas de contato e de agendamento em React.
- O professor faria perguntas sobre a **lógica do código**, porque muita gente estaria só pedindo à IA sem entender (Caio, 12/11).

## Sprint Backlog

- [x] Criar o contato da One To One e o da PKZ Lab (Pedro, 10/11)
- [x] Mover o contato para a pasta de componentes, para organizar melhor (sugestão do Danilo, 10/11; Ester concordou)
- [x] Remover o agendamento que o Danilo tinha feito, para o Vitor refazer a parte dele (Danilo, 10/11)
- [x] Criar o Agendamento da PKZ Lab e da One To One (Vitor, 11/11)
- [x] Corrigir o agendamento que apareceu com erro no notebook da Ester: faltou subir o arquivo `Agendamento.jsx`, que estava na pasta de componentes. Ester incluiu o arquivo, e tudo voltou a funcionar (11/11)
- [x] Confirmar que o card de cancelamento do agendamento foi totalmente removido (Caio e Ester, 13/11)
- [x] Publicar o site no Vercel: https://pfe-2026-2-grupo-2-react.vercel.app/ (Caio, 12/11)
- [x] Usar o componente `Hero` também na PKZ Lab, que chamava `Secao`, para ficar igual ao Hub e à One To One (Danilo apontou e Ester corrigiu, 12/11)
- [x] Receber as logos vetoriais da PKZ Lab e da One To One do professor (Ester, 12/11). Danilo passou a otimizar as imagens
- [x] Reunir dados reais: WhatsApp e Instagram da PKZ Lab e da One To One (Pedro, 12/11). A Ester aplicou o contato e os links do rodapé, e fez o merge
- [x] Fazer a primeira tela de cada página ser ocupada pelo hero, no Hub, na One To One e na Fisioterapia *(fora do chat; feito por Caio com ajuste de CSS e `100vh` menos a altura do header)*
- [x] Preparar a publicação: `vercel.json` para as rotas funcionarem em URL direta, `.env` no `.gitignore` e README em formato público *(fora do chat; feito por Caio)*
- [ ] Trocar as logos antigas pelas vetoriais (Danilo, 12/11: "falta trocar a logo"; a troca não aparece no chat)
- [ ] Substituir o WhatsApp e o e-mail genéricos da Fisioterapia e o e-mail do cliente (Pedro não achou e-mail da empresa, 12/11; o professor não passou dados da Fisioterapia)
- [ ] Criar uma cópia do site sem o Agendamento, usando o repositório atual como template, e enviar os dois sites por e-mail ao professor (Danilo, 13/11)
- [ ] Revisar imagens, e-mails e WhatsApp na página de agendamento (Caio, 13/11)
- [ ] Preparar a explicação do código para o professor (Danilo e Caio, 12/11 e 13/11)
- [ ] Concluir esta documentação Scrum (Ester, 13/11)

## Resultado da Sprint Review

- Em 11/11 a Ester viu o site "perfeito", faltando só o WhatsApp e o e-mail reais.
- Em 12/11 a Ester pediu a todos que testassem o site, e o Danilo mencionou que a equipe tirou 10 na AC do professor.
- A Ester passou o código por uma IA, que avaliou bem, exceto pelo número e e-mail genéricos.
- Alinhamento das seções e mudança nas páginas de contato e agendamento foram os pontos citados pelo Danilo para o registro desta AP2 (13/11).
- Feedback do professor sobre esta sprint: não registrado no chat.

## Retrospectiva

- **O que funcionou bem:**
  - O Vercel publicou o site no mesmo dia em que foi configurado.
  - A equipe revisou o trabalho um do outro, e a revisão achou o `Hero` não usado na PKZ Lab antes da entrega.
  - O hábito de avisar "vou mexer no código" evitou conflitos grandes, embora tenha havido um merge em 12/11, resolvido sem perdas.
- **O que pode melhorar:**
  - Um arquivo ficou de fora do commit e quebrou o agendamento na máquina de outra pessoa.
  - Dados reais do cliente (e-mail, WhatsApp da Fisioterapia e logo) chegaram só no fim, e o prazo apertou.
  - Parte da equipe ainda não conhece todo o código, e o professor fará perguntas.
  - A documentação Scrum foi feita no fim, e não ao longo das sprints.
- **Ações para a próxima sprint (sugeridas a partir do chat; confirmar com a equipe):**
  - Antes de dar `push`, conferir `git status` para ver se há arquivo novo sem commit.
  - Cada integrante estudar a própria parte e ser capaz de explicar as demais.
  - Pedir ao professor ou ao cliente, logo no início, os dados que faltam (e-mail, WhatsApp, logos).
  - Atualizar o Scrum ao fim de cada sprint, e não só no fim do projeto.