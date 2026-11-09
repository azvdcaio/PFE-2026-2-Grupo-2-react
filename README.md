# Hub PKZ Lab, One To One & Fisioterapia

Site institucional do Hub, que reúne três frentes de atendimento em um só lugar:

- **PKZ Lab**: treinamento esportivo para jovens de 7 a 17 anos.
- **One To One**: studio de treino individual para adultos, com planos, avaliação e acompanhamento.
- **Fisioterapia**: avaliação, tratamento e reabilitação com atendimento individual.

Projeto desenvolvido pelo Grupo 2 na disciplina Projeto Front-End (IBMEC, 2026.2).

## Páginas

| Rota | Página |
| --- | --- |
| `/` | Hub, com as três frentes e os valores do espaço |
| `/pkz-lab` | PKZ Lab |
| `/one-to-one` | One To One, com planos em carrossel, depoimentos e perguntas frequentes |
| `/fisioterapia` | Fisioterapia, com apresentação, localização e agendamento pelo WhatsApp |

## Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS puro, com layout responsivo (mobile-first)

## Como executar

Requisitos: [Node.js](https://nodejs.org/) (versão LTS).

```bash
npm install
npm run dev
```

O Vite mostra no terminal o endereço local para abrir no navegador.

## Estrutura

```
src/
├── App.jsx            rotas da aplicação
├── pages/             uma página por arquivo
├── components/        componentes reutilizáveis
├── config/            marcas, links do menu e dados das imagens
└── index.css          estilos do site
public/assets/         imagens e logos
```
