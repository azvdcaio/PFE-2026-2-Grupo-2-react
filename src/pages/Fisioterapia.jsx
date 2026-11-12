import ImagemResponsiva from "../components/ImagemResponsiva";
import Layout from "../components/Layout";
import Secao from "../components/Secao";
import Hero from "../components/Hero";
import Localizacao from "../components/Localizacao";
import Faq from "../components/Faq";
import CtaFinal from "../components/CtaFinal";
import { empresas } from "../config/siteConfig";

const { bodyClass, whatsapp } = empresas.fisioterapia;

export default function Fisioterapia() {
  return (
    <Layout
      theme="fisioterapia"
      bodyClass={bodyClass}
      title="Fisioterapia | Hub PKZ Lab e One To One"
    >
      <Hero
        id="hero"
        imagem="/assets/caracteristica_fisio.jpg"
        imagemAlt="Fisioterapeuta ajustando uma órtese no tornozelo de uma paciente"
        eyebrow="Fisioterapia"
        titulo={
          <>
            Mais movimento.
            <br />
            Mais saúde
          </>
        }
        texto="Avaliação, tratamento e reabilitação com atendimento individual e acompanhamento próximo da sua evolução"
        acoes={[
          { label: "Agende sua avaliação", href: whatsapp, variant: "ciano" },
          {
            label: "Quem somos nós",
            href: "#fisio-quem-somos",
            variant: "contorno",
          },
        ]}
      />
      <Secao
        className="pkz-sobre fisio-sobre"
        id="fisio-quem-somos"
        aria-labelledby="titulo-quem-somos"
      >
        <div className="descricao-sobre">
          <div className="cabecalho">
            <span className="kicker">Quem somos nós</span>
            <h2 id="titulo-quem-somos">
              Cuidado individual para o seu movimento
            </h2>
          </div>
          <div className="p-sobre">
            <p>
              Somos a equipe de Fisioterapia do Hub, formada por profissionais
              dedicados a avaliar, tratar e reabilitar com atenção ao seu caso.
            </p>
            <p>
              Cada atendimento começa por entender a sua queixa, o seu histórico
              e o seu objetivo, seja aliviar uma dor, se recuperar de uma lesão
              ou voltar a treinar com segurança.
            </p>
            <p>
              Trabalhamos lado a lado com a PKZ Lab e a One To One, o que
              aproxima o tratamento da sua rotina de treino e permite acompanhar
              a sua evolução de perto.
            </p>
          </div>
        </div>
        <div className="conteiner-imagem-sobre">
          <ImagemResponsiva
            src="/assets/fisioterapia_sala_atendimento.jpg"
            alt="Ambiente preparado para atendimento de fisioterapia, com maca, bola de exercício e equipamentos de reabilitação"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Secao>
      <Localizacao
        id="fisio-localizacao"
        marca="Fisioterapia"
        endereco="Av. Armando Lombardi, 949, Loja I – Barra da Tijuca, Rio de Janeiro"
        horario="08:00 - 19:00"
        mapaQuery="Av Armando Lombardi 949 Barra da Tijuca Rio de Janeiro"
      />
      <Faq
        id="fisio-faq"
        itens={[
          {
            pergunta: "Como funciona a primeira consulta?",
            resposta:
              "Começamos com uma conversa sobre a sua queixa e o seu histórico, seguida de uma avaliação funcional. No fim, você recebe a orientação inicial e o plano de tratamento.",
          },
          {
            pergunta: "Quantas sessões vou precisar?",
            resposta:
              "Depende do seu caso. Depois da avaliação, a equipe explica a quantidade de sessões prevista e reavalia durante o tratamento.",
          },
          {
            pergunta: "Posso fazer fisioterapia e treinar ao mesmo tempo?",
            resposta:
              "Em muitos casos sim, e o treino pode até fazer parte da recuperação. A equipe orienta o que é seguro para você a partir da avaliação.",
          },
          {
            pergunta: "Como agendo a minha avaliação?",
            resposta: (
              <>
                Pelo WhatsApp: é só{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  chamar a gente
                </a>{" "}
                e combinar o melhor dia e horário.
              </>
            ),
          },
        ]}
      />
      <CtaFinal
        id="fisio-cta"
        compacto
        titulo={
          <>
            Dê o primeiro passo para <span>se mover melhor</span>.
          </>
        }
        texto="Agende a sua avaliação e comece um tratamento pensado para o seu corpo."
        href={whatsapp}
        label="Agendar pelo WhatsApp"
      />
    </Layout>
  );
}
