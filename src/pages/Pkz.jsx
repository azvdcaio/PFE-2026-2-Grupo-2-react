import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Pkz() {
  return (
    <Layout theme="pkz-lab">
        <Hero
            eyebrow={
                <>
                    <span className="kicker-2">Treinamento de alta performance</span>
                </>
            }
            titulo={
                <> 
                    Supere seus limites <br />
                    Alcance seu potencial
                </>           
            }
            texto={
                <>
                    Treine em um ambiente <span className="kicker-2">exclusivo</span>,
                    com acompanhamento <span className="kicker-2">especializado</span> e com
                    foco na sua <span className="kicker-2">evolução</span> desde cedo
                </>
            }
            acoes={[
                {
                    label: "Agende sua avaliação",
                    to: "/agendamento-pkz",
                    variant: "ciano",
                },
            ]}
        />
    </Layout>
  );
}