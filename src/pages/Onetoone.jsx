import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImagemResponsiva from "../components/ImagemResponsiva";
import Secao from "../components/Secao";
import Card from "../components/Card";

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
            <Secao id="caracteristicas" className="secao caracteristicas" aria-labelledby="titulo-caracteristicas">
        <div className="secao__cabecalho">
          <p className="secao__eyebrow">
            {"Características"}
          </p>
          <h2 id="titulo-caracteristicas">
            {" No studio One To One você encontra tudo o que precisa em um só lugar "}
          </h2>
        </div>
        <ul className="equipe__lista">
          <li>
            <Card as="article" className="membro">
              <ImagemResponsiva src="/assets/caracteristica_treino.jpg" alt="Aluna fazendo levantamento terra com o personal trainer acompanhando" />
              <h3>
                {"Treino personalizado de verdade"}
              </h3>
            </Card>
          </li>
          <li>
            <Card as="article" className="membro">
              <ImagemResponsiva src="/assets/caracteristica_fisio.jpg" alt="Fisioterapeuta avaliando o joelho de um paciente deitado na maca" />
              <h3>
                {"Fisioterapia com tecnologia de ponta"}
              </h3>
            </Card>
          </li>
          <li>
            <Card as="article" className="membro">
              <ImagemResponsiva src="/assets/caracteristica_nutri.jpg" alt="Bowl de salada com legumes, grão-de-bico e abacate" />
              <h3>
                {"Nutrição prática e eficiente"}
              </h3>
            </Card>
          </li>
        </ul>
      </Secao>
    </Layout>
  );
}