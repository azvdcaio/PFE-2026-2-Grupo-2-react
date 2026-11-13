# Placeholders do site

Tudo o que ainda é provisório, genérico ou inventado no projeto React, com o arquivo onde está e o que precisa ser trocado.

## Resumo do que falta

| Categoria | Itens | Prioridade |
|---|---|---|
| E-mails | 2 genéricos | Alta |
| WhatsApp | 1 número falso (Fisioterapia) e 1 link genérico (Contato) | Alta |
| Redes sociais | 3 links genéricos | Alta |
| Agendamento e formulários | Envio simulado e dados de exemplo | Alta |
| Imagens | 20 fotos e o vídeo do Hub para confirmar, mais 2 logos em PNG sem uso | Alta |
| Nomes e depoimentos | 3 nomes "Nome", 4 depoimentos inventados e textos repetidos | Média |
| Textos e dados | Endereço, horário e conteúdo não validados | Média |
| Favicon | Arquivo inexistente | Média |

---

## 1. E-mails

| Onde | Valor atual | Trocar por |
|---|---|---|
| `src/components/Footer.jsx` (ícone de e-mail do rodapé, em todas as páginas) | `mailto:contato@exemplo.com` | E-mail oficial do Hub ou de cada empresa |
| `src/components/Contato.jsx` (informação de contato, PKZ Lab e One To One) | `demo@gmail.com` | E-mail oficial de cada empresa. A página é a mesma para as duas, e hoje mostra o mesmo e-mail |

A equipe não encontrou o e-mail das empresas (Pedro, 12/11). Precisa ser pedido ao cliente ou ao professor.

## 2. WhatsApp

| Onde | Valor atual | Trocar por |
|---|---|---|
| `src/config/siteConfig.js` (`WHATSAPP_FISIOTERAPIA`) | `https://wa.me/5521999999999` | WhatsApp real da Fisioterapia, só dígitos com DDI e DDD. O professor não passou esse número. Trocando ali, os 3 botões da página de Fisioterapia atualizam juntos |
| `src/components/Contato.jsx` (ícone do WhatsApp) | `https://www.whatsapp.com/`, o site do WhatsApp, e não uma conversa | `https://wa.me/55...` de cada empresa. O Pedro passou os números como WhatsApp da PKZ Lab e da One To One, que já estão no `siteConfig.js` como `telefone`. O ícone poderia usar os mesmos números |

## 3. Redes sociais

| Onde | Valor atual | Trocar por |
|---|---|---|
| `src/components/Contato.jsx` (TikTok da One To One) | `https://www.tiktok.com/`, a página inicial do TikTok. Acontece porque a One To One não tem `tiktok` no `siteConfig.js` | A One To One não tem TikTok (Pedro, 12/11): remover o ícone nessa página |
| `src/components/Footer.jsx` (Hub e Fisioterapia) | `https://instagram.com/` | Instagram do Hub e da Fisioterapia, se existirem. Se não existirem, remover o ícone nessas páginas |

## 4. Agendamento e formulários

| Item | Onde | Situação |
|---|---|---|
| **Horários de exemplo:** 09:00 às 17:00 | `src/interactions/interacoes.js` (`HORARIOS`) | Trocar pelos horários reais |
| **Dia bloqueado de exemplo:** `2026-10-15` ("Indisponível") | `src/interactions/interacoes.js` (`DIAS_BLOQUEADOS`) | Data que já passou; remover ou trocar |
| **Domingo fechado** | `src/interactions/interacoes.js` (`DIAS_FECHADOS`) | Confirmar com o cliente |
| **Recessos da empresa vazios** | `src/interactions/interacoes.js` (`FERIADOS_EXTRAS`) | Preencher se houver |

## 5. Imagens

Todas as imagens estão em `public/assets/` (cada uma em AVIF, WebP e JPG ou PNG) e são declaradas em `src/config/formatosImagens.js`. Ao trocar uma, mantenha o **mesmo nome de arquivo** (ou ajuste o `formatosImagens.js`) e gere as versões AVIF e WebP.

| Imagem | Onde aparece | Observação |
|---|---|---|
| `pkz_hero_banner` | Hero da PKZ Lab (via `index.css`) | |
| `pkz-sobre-img` | PKZ Lab, "Sobre" | Simulação de treino, colocada pela Ester em 28/10 |
| `depoimento_pkz_1` e `depoimento_pkz_2` | PKZ Lab, depoimentos | Fotos representativas de alunos |
| `pkz_empresa` | Hub, card da PKZ Lab | |
| `onetoone_hero_banner` | Hero da One To One | |
| `caracteristica_treino`, `caracteristica_fisio` e `caracteristica_nutri` | One To One (características). `caracteristica_fisio` também no Hub e no hero da Fisioterapia | A foto da nutrição é um prato de salada genérico |
| `plano_express`, `plano_onemove`, `plano_onepower` e `plano_betheone` | One To One, planos | |
| `depoimento_one_1` e `depoimento_one_2` | One To One, depoimentos | Fotos representativas de alunos |
| `onetoone_empresa` | Hub, card da One To One | |
| `pessoa1`, `pessoa2` e `pessoa3` | Hub, "Conheça alguns membros da equipe" | Retratos representativos, não são a equipe real |
| `fisioterapia_sala_atendimento` | Fisioterapia, "Quem somos nós" | |
| `hub_logo` | Menu do Hub e rodapé | PNG. O professor só mandou logos da PKZ Lab e da One To One |
| `fisioterapia_logo.svg` | Menu da Fisioterapia | Sem logo oficial da Fisioterapia |
| `hub_video.mp4` e `hub_video_poster.jpg` | Hero do Hub (vídeo em loop) | Confirmar se são do cliente |
| `pkz_logo.svg` e `onetoone_logo.svg` | Menu de cada empresa | Logos oficiais, já trocadas |

Pontos de atenção:

- `pkz_logo.png` e `onetoone_logo.png` continuam na pasta e no `formatosImagens.js`, mas nenhuma página usa mais. Pode ser limpeza, junto com as versões AVIF e WebP.
- O professor orientou usar imagens que representem a prática (academia, professores), mesmo que não sejam as originais, e evitar placeholder explícito.
- Os `alt` das fotos de depoimento estão vazios (`alt=""`), o que é correto para imagens decorativas.
- Se as fotos reais vierem do Instagram do cliente, o professor sugeriu perguntar antes de usar.

## 6. Nomes e depoimentos

| Onde | Valor atual | Trocar por |
|---|---|---|
| `src/pages/Hub.jsx` (equipe) | `Nome` ×3, com cargos "Coordenador da PKZ Lab", "Ceo geral" e "Coordenadora da One To One." (com ponto final) | Nomes e cargos reais, ou retirar a seção |
| `src/pages/Pkz.jsx` | "Gabriela Santos" e "Marco Paulo", como "Aluno(a) · PKZ Lab" | Depoimentos reais |
| `src/pages/Onetoone.jsx` | "Ana Clara" e "Gabriel da Silva", como "Aluno(a) · One To One" | Depoimentos reais |

Problemas nos textos dos depoimentos:

- **Os dois textos são os mesmos nas duas páginas.** A PKZ Lab e a One To One mostram "O treino em grupo mudou minha relação..." e "Em poucos meses de One To One minha evolução física ficou visível...".
- **O segundo depoimento cita a One To One dentro da página da PKZ Lab.**
- **O primeiro fala de "treino em grupo"**, e a One To One é treino individual.

## 7. Textos e dados não validados

Não são placeholders visíveis, mas não foram validados pelo cliente:

- Todo o texto de "Quem somos nós", planos, perguntas e respostas (PKZ Lab, One To One e Fisioterapia).
- **Fisioterapia:** o professor não especificou serviços, então a página tem só o "Quem somos nós", as perguntas e o CTA.
- **Preços:** não há valores nos planos, só a frequência de treino. Se o cliente quiser, falta informar.
- **Horário de funcionamento** `08:00 - 19:00`, em `Pkz.jsx`, `Onetoone.jsx` e `Fisioterapia.jsx`, e também no FAQ da One To One ("O studio funciona das 08:00 às 19:00"): confirmar.
- **Endereço:** One To One e Fisioterapia usam `Av. Armando Lombardi, 949, Loja I`, e a PKZ Lab usa `Loja G`, todos na Barra da Tijuca. Confirmar com o cliente, principalmente o da Fisioterapia, que herdou a Loja I da One To One.
- **Página de Contato:** o endereço aparece só como `Barra da Tijuca, Rio de Janeiro`, sem rua e sem loja, diferente do restante do site (`src/components/Contato.jsx`).
