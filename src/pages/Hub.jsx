import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Hub() {
  return (
    <Layout theme="hub">
      <Hero
        video=""
        titulo="CT de Performance Integrado"
        texto={
          <>
            A Holding integra duas empresas do segmento esportivo... <br />
            Tudo para potencializar pessoas e atletas em cada fase da sua
            jornada.
          </>
        }
        acoes={[
          {
            label: "Conheça nossas soluções",
            icone: "fa fa-arrow-down",
            href: "#empresas",
            variant: "primario",
          },
          { label: "Entre em contato", variant: "ciano" },
        ]}
      />
    </Layout>
  );
}
