# 4. Retrospectivas

Resumo das três sprints do projeto em React. O detalhe de cada uma está no arquivo da sprint.

## Visão geral

| Sprint | O que funcionou | O que melhorar | Ação combinada ou sugerida |
|---|---|---|---|
| 1 (01/11 a 05/11) | Componente só quando a parte se repete; `Hero` único para todas as páginas | Footer colado em HTML; pouca clareza sobre como usar os componentes | Quem cria um componente avisa e explica o uso |
| 2 (06/11 a 09/11) | Partir de uma versão pronta; divisão por páginas; `CtaFinal` e `Carrossel` reaproveitados | Três versões em paralelo; rota da PKZ Lab quebrada por mudança no config | Quem muda o `siteConfig.js` revisa o `App.jsx` |
| 3 (10/11 a 13/11) | Publicação rápida no Vercel; revisão entre colegas achou o `Hero` não usado | Arquivo fora do commit; dados do cliente chegaram tarde; Scrum feito no fim | Conferir `git status` antes do `push`; atualizar o Scrum a cada sprint |

## Temas que se repetiram

1. **Coordenação do repositório.** Houve pequenos problemas de integração em todas as sprints (rota, arquivo esquecido, merge). O hábito de avisar no grupo antes de mexer ajudou.
2. **Dados do cliente.** Logos, WhatsApp, e-mail e serviços da Fisioterapia ficaram pendentes até o fim.
3. **Entendimento do código.** O professor perguntará sobre a lógica, então cada integrante precisa saber explicar a própria parte.

## Comparação com o vanilla (observação)

No site vanilla os conflitos de merge também foram comuns, e a regra de dar `git pull` antes de todo `push` foi sugerida na época. No React o problema mudou de forma: em vez de conflito de CSS, apareceram arquivos faltando e rotas desencontradas.

> Esta é uma síntese feita a partir do chat. As ações devem ser confirmadas pela equipe.
