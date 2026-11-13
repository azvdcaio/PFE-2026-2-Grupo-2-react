# 4. Retrospectivas

Resumo das retrospectivas das 11 sprints. O detalhe de cada uma está no arquivo da sprint.

## Visão geral

| Sprint | O que funcionou | O que melhorar | Ação combinada ou sugerida |
|---|---|---|---|
| 1 | Divisão rápida das seções; leitura cruzada | Enunciado confuso; entrega deixada para o fim de semana | Tirar dúvidas do enunciado com o professor; prazos internos |
| 2 | Resumo objetivo do áudio do cliente | Discussão longa sobre landing page e página institucional | Levar dúvidas de escopo ao professor |
| 3 | Reunião de 15 minutos depois da aula | `.DS_Store` no repositório; "empresa mãe" do Hub indefinida | Criar `.gitignore`; fechar 5W2H, AHT e Figma |
| 4 | Apresentação dividida por documento | Scrum só cobrado no dia; dúvida sobre razão social e logo | Aplicar o feedback; criar o `scrum.md` |
| 5 | Páginas divididas por pessoa e prontas em poucos dias | Pouca atividade por duas semanas; `scrum.md` pendente | Padronizar header, footer e hero |
| 6 | Padronização decidida rápido, com concordância de todos | Header cinza com links cinza só visto na estilização; baixa atividade | Combinar quem edita cada CSS |
| 7 | Reaproveitamento de classes; hábito de avisar antes de editar | Dois conflitos de merge; media queries só no fim | `git pull` antes de todo `push`; fixar valores do CSS global |
| 8 | Publicação no mesmo dia do prazo | Espera mútua para mexer no código; mudanças que não estavam no repositório; publicação dependia de uma pessoa | Dar acesso a quem pode publicar; avisar ao começar e terminar |
| 9 | Só vira componente o que se repete; `Hero` único | Footer em HTML colado; pouca clareza sobre uso dos componentes | Quem cria um componente avisa e explica |
| 10 | Partir de uma versão pronta; divisão por páginas | Três versões em paralelo; rota quebrada pelo config | Quem muda o `siteConfig.js` revisa o `App.jsx` |
| 11 | Publicação rápida no Vercel; revisão achou o `Hero` não usado | Arquivo fora do commit; dados do cliente tardios; Scrum feito no fim | Conferir `git status` antes do `push`; atualizar o Scrum a cada sprint |

## Temas que se repetiram

1. **Coordenação do repositório.** Do `.DS_Store` (Sprint 3) aos conflitos de merge (Sprint 7), ao arquivo esquecido (Sprint 11), o problema mudou de forma, mas se repetiu. O hábito de avisar no grupo e de dar `git pull` antes de mexer foi a resposta mais eficaz.
2. **Dados do cliente chegando tarde.** Logos, WhatsApp, e-mail e serviços da Fisioterapia ficaram pendentes até o fim (Sprints 8 e 11).
3. **Documentação deixada para o final.** O `scrum.md` foi cobrado em 25/09 e só foi escrito em 13/11. A ação sugerida desde a Sprint 4 foi escrever o Scrum a cada sprint.
4. **Disponibilidade irregular.** Provas e outros trabalhos reduziram a participação de alguns membros em diferentes momentos, e outros integrantes assumiram partes. A divisão por páginas e a leitura cruzada ajudaram.
5. **Entendimento do código.** Na AP2 o professor passou a perguntar sobre a lógica, e cada integrante precisa saber explicar a própria parte.

## O que melhorou ao longo do projeto

- **Divisão de trabalho:** de "cada um escolhe uma seção" (Sprint 1) para "cada um é dono de uma página ou componente" (Sprints 9 a 11).
- **Integração:** de conflitos de merge frequentes (Sprint 7) para merges sem perdas (Sprint 11).
- **Reuso:** de HTML repetido entre páginas (vanilla) para componentes com props (React).
- **Feedback:** do retorno do professor só no fim (AP1) para revisões entre colegas antes da entrega (Sprint 11).