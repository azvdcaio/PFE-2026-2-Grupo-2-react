# 2. Papéis e cerimônias

## Papéis

| Papel | Quem | Observação |
|---|---|---|
| Scrum Master | Caio | O chat cita o Caio como Scrum Master desde 27/08. Na prática, ele também resolveu impedimentos, como a publicação e a configuração do repositório. |
| Product Owner | Professor (como cliente) | O chat não define um PO dentro do grupo. O professor e o cliente decidem prioridades e validam as entregas. **Confirmar com a equipe.** |
| Development Team | Caio, Danilo, Ester, Pedro e Vitor | Equipe autogerenciável: cada pessoa escolheu a parte que ia fazer e avisou no grupo. |

## Como a equipe aplicou os eventos

| Evento Scrum | Como aconteceu | Onde está registrado |
|---|---|---|
| Sprint Planning | Conversas no grupo e em áudios definindo quem faz cada componente e página | Chat de 01/11, 02/11, 06/11 e 09/11 |
| Daily Scrum | Não houve reunião fixa. Os avisos de "estou mexendo no código" e "dei push" cumpriam esse papel | Chat diário |
| Sprint Review | Cada integrante abria o código ou o site e comentava no grupo (ex.: "testem o site", 12/11) | Chat |
| Retrospectiva | Ajustes e combinados saíram em conversas, depois de problemas como o arquivo esquecido no commit | [04-retrospectivas.md](04-retrospectivas.md) |

## Combinados da equipe (observados no chat)

- Avisar no grupo antes de editar o código e dar `git pull` antes de mexer.
- Cada pessoa cuida de uma parte e depois integra no repositório do GitHub.
- Conversar antes de mudar o trabalho de outra pessoa.
- Reutilizar componentes: só vira componente o que aparece em mais de uma página; o resto fica em JSX na própria página.

## Definition of Done (DoD)

Critérios propostos a partir dos combinados do chat (a equipe não registrou uma DoD formal; confirmar). Um item só é considerado pronto quando:

- [ ] funciona nas rotas do React Router, sem erro no console;
- [ ] está responsivo (celular, tablet e computador);
- [ ] usa componentes existentes quando possível, sem duplicar código;
- [ ] foi commitado na `main`, com mensagem clara, depois de um `git pull`;
- [ ] passou por revisão de outro integrante (teste do site no navegador);
- [ ] o projeto gera o build com `npm run build`.
