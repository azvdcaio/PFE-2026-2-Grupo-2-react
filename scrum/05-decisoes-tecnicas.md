# 5. Decisões técnicas

Registro das escolhas feitas no projeto React e o motivo de cada uma.

| # | Decisão | Motivo | Quem e quando |
|---|---|---|---|
| 1 | **React com Vite** e hospedagem no **Vercel** | É a stack da disciplina; o Vercel publica a cada `push` na `main` | Equipe, 29/10 |
| 2 | **Cada página é um componente**, e as partes repetidas viram componentes | Evita repetir código; a página só monta e passa dados | Danilo, 01/11 |
| 3 | **Um único `Hero`**, com textos e botões por props | Mantém as páginas iguais e evita um `PkzHero` específico | Danilo e Ester, 02/11 |
| 4 | **Só vira componente o que aparece em mais de uma página**; o resto fica em JSX na página | Componente específico demais não é reaproveitado | Danilo, 02/11 |
| 5 | **React Router com `NavLink`** | Já traz a classe `active`, que marca a página atual no menu | Ester e Danilo, 02/11 |
| 6 | **`useState` no menu hambúrguer** e **`useState`, `useEffect` e `useRef` no Carrossel** | Segue o material da matéria e evita manipular o DOM na mão | Equipe, 01/11 e 06/11 |
| 7 | **`Acordeon` e `Carrossel` como componentes** | Reaproveitamento nas páginas da PKZ Lab e da One To One | Danilo e Caio, 06/11 |
| 8 | **Imagens em AVIF, WebP e JPG**, via `ImagemResponsiva`, e `object-fit` no CSS | Pedido do professor por acessibilidade e desempenho; passou de 25 para 104 arquivos | Ester, 06/11 |
| 9 | **Fisioterapia sem página de contato e de agendamento**, com botão de WhatsApp | Orientação do professor (cliente) | Caio, 06/11 |
| 10 | **Cancelamento de agendamento removido** | Depende de back-end, que está fora do escopo | Ester e Caio, 30/10 e 06/11 |
| 11 | **Código simples**, no nível dos componentes do professor | Evitar termos avançados que a equipe não consiga explicar | Danilo, 06/11 |
| 12 | **Vanilla não é alterado** | Pedido do professor | Caio, 06/11 |
| 13 | **`vercel.json` com `rewrites` para `index.html`** | Sem ele, abrir a URL direta ou atualizar a página dá erro 404 | Caio, 12/11 *(fora do chat)* |
| 14 | **Hero com `min-height: max(Npx, calc(100vh - 64px))`** | Ocupar a primeira tela, descontando o header | Caio, 12/11 *(fora do chat)* |
| 15 | **Contato e Agendamento ficam em `components/`**, e as páginas só os chamam | Organização; o `Agendamento.jsx` não é uma página | Danilo, 10/11 e 11/11 |
| 16 | **`siteConfig.js` guarda rotas, marcas e links do menu** | Um só lugar para mudar dados do site | Ester e Danilo, 06/11 e 09/11 |

## Pontos que ainda não seguem o "React puro"

O calendário, o formulário de contato e o modal ainda usam `interactions/interacoes.js`, um script que manipula o DOM diretamente e foi aproveitado do site vanilla. A migração para estado do React (`useState`) está no backlog (PB-24).

## Estrutura do projeto

```
src/
  App.jsx          rotas
  main.jsx         liga o React ao navegador (BrowserRouter)
  pages/           uma página por arquivo
  components/      Layout, Hero, Secao, Card, Carrossel, Acordeon, CtaFinal, ImagemResponsiva...
  config/          siteConfig.js e formatosImagens.js
  interactions/    script de DOM (calendário, formulário e modal)
public/assets/     imagens em AVIF, WebP e JPG
```
