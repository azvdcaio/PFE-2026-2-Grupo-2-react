import ImagemResponsiva from "../components/ImagemResponsiva";
import Layout from "../components/Layout";
import Secao from "../components/Secao";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Valores from "../components/Valores";
import EmpresaCard from "../components/EmpresaCard";

export default function Hub() {
  return (
    <Layout theme="hub" bodyClass="" title="Inicio | Hub PKZ Lab e One To One">
      <Hero id="hero"
        video="/assets/hub_video.mp4"
        titulo="CT de Performance Integrado"
        texto={<>A Holding integra duas empresas do segmento esportivo, voltada para treinamento de alto desempenho, desenvolvimento humano e saúde.<br />Tudo para potencializar pessoas e atletas em cada fase da sua jornada.</>}
        acoes={[
          { label: "Conheça nossas soluções", icone: "fa fa-arrow-down", href: "#empresas", variant: "primario" },
          { label: "Entre em contato", variant: "ciano", type: "button", onClick: () => document.getElementById("modal-escolha-empresa")?.showModal() },
        ]}
      />
      <Valores id="valores"
        kicker="O que nos move"
        titulo="Valores das empresas"
        texto="Princípios que sustentam tanto o treino da PKZ LAB quanto o acompanhamento da One To One"
        itens={[
          { titulo: "Performance com propósito", texto: "Treino orientado a resultado real — não a fórmulas genéricas ou modismos.", icone: "fa fa-bullseye" },
          { titulo: "Saúde integrada", texto: "Acreditamos que corpo e mente não se separam.", icone: "fa fa-heartbeat" },
          { titulo: "Cuidado individualizado", texto: "Cada corpo conta uma história única.", icone: "fas fa-fingerprint" },
          { titulo: "Acolhimento ativo", texto: "Estar ao seu lado em cada etapa da jornada.", icone: "fas fa-handshake" },
        ]}
      />
      <Secao id="empresas" className="secao empresas" aria-labelledby="titulo-empresas">
        <div className="secao__cabecalho empresas__cabecalho">
          <h2 id="titulo-empresas">
            {" Duas empresas. Dois caminhos. Uma filosofia. "}
          </h2>
          <p>
            {" Conheça a proposta de cada uma e descubra qual formato de treino combina com o seu momento "}
          </p>
        </div>
        <EmpresaCard chave="pkz" id="titulo-pkz"
          imagem="/assets/pkz_empresa.png" imagemAlt="Jovem atleta em treino de alta performance na PKZ LAB"
          marca="PKZ LAB" titulo="Desenvolvimento esportivo desde cedo."
          descricao="Treinamento esportivo infantil e desenvolvimento de atletas de alta performance. Uma metodologia centrada na neurociência motora, coordenação neuromuscular e inteligência esportiva."
          rotuloTags="Destaques da PKZ LAB" tags={["Idades 07 a 17 anos", "Velocidade reativa"]}
          to="/pkz-lab" label="Conheça a PKZ LAB" />
        <EmpresaCard chave="one" id="titulo-one"
          imagem="/assets/onetoone_empresa.png" imagemAlt="Treinador acompanhando aluna em atendimento personalizado na One To One"
          marca="One To One" titulo="Treinamento pensado para você."
          descricao="Academia e treinamento personalizado para quem busca evolução, performance e resultados sob medida. Atendimento reservado, avaliação 3D de movimento e periodização científica."
          rotuloTags="Destaques da One To One" tags={["Biomecânica individualizada", "Fisiologia de longevidade"]}
          to="/one-to-one" label="Conheça a One To One" />
      </Secao>
      <Secao id="fisioterapia" className="secao empresas empresas--unica" aria-labelledby="titulo-fisioterapia">
        <div className="secao__cabecalho empresas__cabecalho">
          <h2 id="titulo-fisioterapia">Fisioterapia para voltar a se mover bem.</h2>
          <p>Avaliação, tratamento e reabilitação para quem treina, quer voltar a treinar ou só quer viver sem dor</p>
        </div>
        <EmpresaCard chave="fisio" id="titulo-fisio"
          imagem="/assets/caracteristica_fisio.jpg" imagemAlt="Fisioterapeuta avaliando o joelho de um paciente deitado na maca"
          marca="Fisioterapia" titulo="Cuidado que acompanha o seu movimento."
          descricao="Atendimento individual com avaliação funcional, plano de tratamento e acompanhamento da evolução, integrado ao treino quando fizer sentido para o seu objetivo."
          rotuloTags="Destaques da Fisioterapia" tags={["Avaliação funcional", "Reabilitação esportiva"]}
          to="/fisioterapia" label="Conheça a Fisioterapia" />
      </Secao>
      <Secao id="equipe" className="secao equipe" aria-labelledby="titulo-equipe">
        <div className="secao__cabecalho">
          <h2 id="titulo-equipe">
            {" Conheça alguns membros da equipe que vão ajudar no processo "}
          </h2>
        </div>
        <ul className="equipe__lista">
          <li>
            <Card as="article" className="membro">
              <figure>
                <ImagemResponsiva src="/assets/pessoa2.jpg" alt="Retrato de integrante da equipe da PKZ Lab" />
              </figure>
              <h3>
                {"Nome"}
              </h3>
              <p>
                {"Coordenador da PKZ Lab"}
              </p>
            </Card>
          </li>
          <li>
            <Card as="article" className="membro">
              <figure>
                <ImagemResponsiva src="/assets/pessoa3.jpg" alt="Retrato de integrante da direção do Hub" />
              </figure>
              <h3>
                {"Nome"}
              </h3>
              <p>
                {"Ceo geral"}
              </p>
            </Card>
          </li>
          <li>
            <Card as="article" className="membro">
              <figure>
                <ImagemResponsiva src="/assets/pessoa1.jpg" alt="Retrato de integrante da equipe da One To One" />
              </figure>
              <h3>
                {"Nome"}
              </h3>
              <p>
                {"Coordenadora da One To One."}
              </p>
            </Card>
          </li>
        </ul>
      </Secao>
      <dialog id="modal-escolha-empresa" className="modal modal--escolha-empresa" aria-labelledby="modal-escolha-empresa-titulo">
        <div className="modal__caixa">
          <button type="button" className="modal__fechar" aria-label="Fechar" data-modal-fechar="">
            <i className="fa fa-xmark" aria-hidden="true">
            </i>
          </button>
          <div className="modal__cabecalho">
            <h2 id="modal-escolha-empresa-titulo">
              {"Com quem você quer falar?"}
            </h2>
            <p>
              {"Escolha a empresa para continuar o atendimento."}
            </p>
          </div>
          <ul className="escolha-empresa">
            <li>
              <Card as="a" className="escolha-empresa__card escolha-empresa__card--pkz" to="/pkz-lab/contato">
                <h3 className="escolha-empresa__nome">
                  {"PKZ LAB"}
                </h3>
                <p className="escolha-empresa__descricao">
                  {" Treinamento esportivo infantil e de atletas de alta performance. "}
                </p>
                <span className="escolha-empresa__cta">
                  {" Falar com a PKZ LAB "}
                  <i className="fa fa-arrow-right" aria-hidden="true">
                  </i>
                </span>
              </Card>
            </li>
            <li>
              <Card as="a" className="escolha-empresa__card escolha-empresa__card--one" to="/one-to-one/contato">
                <h3 className="escolha-empresa__nome">
                  {"One To One"}
                </h3>
                <p className="escolha-empresa__descricao">
                  {" Treinamento personalizado, com atendimento reservado e sob medida. "}
                </p>
                <span className="escolha-empresa__cta">
                  {" Falar com a One To One "}
                  <i className="fa fa-arrow-right" aria-hidden="true">
                  </i>
                </span>
              </Card>
            </li>
          </ul>
        </div>
      </dialog>
    </Layout>
  );
}
