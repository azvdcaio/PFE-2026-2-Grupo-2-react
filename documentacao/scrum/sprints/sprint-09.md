# Sprint 9

**Período:** 01/11 a 05/11
**Sprint Goal:** Definir como o site vanilla vira React (estrutura, componentes e rotas) e ter uma primeira versão que renderize.

## Contexto de entrada

- O site vanilla foi publicado no GitHub Pages em 30/10. O de React ficou combinado para o **Vercel** (Danilo, 29/10).
- Em 30/10, a Ester anotou a primeira mudança para o projeto final (AP2): **retirar o cancelamento do agendamento**.
- A AP2 vai de 12/11 a 18/11 (Danilo, 01/11).
- O professor pediu para **não alterar o vanilla**. O trabalho novo acontece só no repositório React.
- Em 27/10 o professor avisou que as exigências de imagens no HTML só seriam cobradas na versão em React.

## Sprint Backlog

- [x] Decidir a estrutura: cada página é um componente, e as partes que se repetem viram componentes (Danilo, 01/11). Pasta separada por página foi descartada: "todos os componentes vão ser usados em várias páginas".
- [x] Criar a base do projeto, com o Hub, o componente `Hero` e as rotas no Header (Danilo, 01/11 e 02/11)
- [x] Decidir que o `Hero` é único e serve a todas as páginas, com textos por props, em vez de um `PkzHero` (Danilo e Ester, 02/11)
- [x] Dividir os componentes: Danilo cria `Secao`, `CardValores`, `CardEmpresa` e `CardEquipe`; Ester cria o plano da PKZ e a localização (02/11)
- [x] Fazer a PKZ Lab aparecer na rota certa (Ester, 02/11: "já está aparecendo a pkz, a rota está ok")
- [x] Usar `NavLink`, que já traz a classe `active`, para marcar a página atual (Ester e Danilo, 02/11)
- [x] Definir onde usar estado: menu hambúrguer com `useState`; o carrossel ainda precisava de pesquisa (Danilo e Ester, 01/11)
- [x] Reunir a primeira versão completa e compartilhar para o grupo revisar (Ester, 05/11: `PFE-2026-2-Grupo-2-react-finalizado.zip`)
- [ ] Transformar o footer em componente React: só tinha o HTML colado (levantado pela Ester em 01/11; resolvido depois, na Sprint 10)
- [ ] Entender como adaptar o JavaScript do vanilla para hooks (dúvida da Ester, 01/11; sem solução registrada na sprint)

## Resultado da Sprint Review

- Ester compartilhou o zip da versão em React em 05/11 e pediu que todos olhassem o código para corrigir logo o que faltasse.
- A revisão do grupo aconteceu em 06/11, com a discussão sobre a Fisioterapia e os componentes que faltavam.
- Feedback do professor ou do cliente nesta sprint: não registrado no chat.

## Retrospectiva

- **O que funcionou bem:** a regra "só vira componente o que se repete" evitou componentes específicos demais e deixou o `Hero` reaproveitado em várias páginas.
- **O que pode melhorar:**
  - O footer ficou como HTML colado por um tempo, e a dúvida sobre como adaptar o JS só foi resolvida depois.
  - Parte da equipe ficou sem entender a estrutura de componentes; Danilo teve que explicar por áudio (02/11).
- **Ações para a próxima sprint (sugeridas a partir do chat; confirmar com a equipe):**
  - Quem cria um componente avisa o grupo e explica como usar.
  - Definir quem faz `Acordeon` e `Carrossel` antes de começar as páginas.