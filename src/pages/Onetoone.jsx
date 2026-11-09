import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Onetoone() {
  return (
    <Layout theme="one-to-one" bodyClass="pagina-one" title="One To One | Hub PKZ Lab e One To One">
      <Hero id="hero"
        imagem="/assets/onetoone_hero_banner.jpg"
        imagemAlt="Instrutor acompanhando aluna durante treino personalizado com halteres"
        wordmark
        eyebrow="Treinamento de alta performance"
        titulo={<>Supere seus limites.<br />Alcance seu potencial</>}
        texto="Treine em um ambiente exclusivo, com acompanhamento especializado e foco na sua evolução"
        acoes={[{ label: "Agende sua avaliação", to: "/one-to-one/agendamento", variant: "ciano" }]}
      />
    </Layout>
  );
}