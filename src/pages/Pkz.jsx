import ImagemResponsiva from "../components/ImagemResponsiva";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Secao from "../components/Secao";
import Card from "../components/Card";
import Acordeon from "../components/Acordeon";

export default function Pkz() {
  return (
    <Layout theme="pkz-lab" bodyClass="pkz-corpo" title="PKZ LAB">
      <Secao className="pkz-hero" aria-labelledby="titulo-hero">
        <div className="cabecalho">
          <span className="kicker-2">
            {"Treinamento de alta performance"}
          </span>
          <h1 id="titulo-hero">
            {" Supere seus limites "}
            <br />
            {" Alcance seu potencial "}
          </h1>
          <p>
            {" Treine em um ambiente "}
            <span className="kicker-2">
              {"exclusivo"}
            </span>
            {", com acompanhamento "}
            <span className="kicker-2">
              {"especializado"}
            </span>
            {" e foco na sua "}
            <span className="kicker-2">
              {"evolução"}
            </span>
            {" desde cedo "}
          </p>
        </div>
        <Link to="/pkz-lab/agendamento" className="btn btn--ciano">
          {"Agende sua avaliação"}
        </Link>
      </Secao>
      <Secao className="pkz-sobre" id="pkz-sobre" aria-labelledby="titulo-sobre">
        <div className="descricao-sobre">
          <div className="cabecalho">
            <span className="kicker">
              {"Quem somos nós"}
            </span>
            <h2 id="titulo-sobre">
              {"O que é a PKZ LAB"}
            </h2>
          </div>
          <div className="p-sobre">
            <p>
              {" A PKZ Lab é um centro de excelência dedicado ao desenvolvimento esportivo de jovens e atletas em formação. Nossa missão é potencializar o talento natural desde cedo, unindo ciência, disciplina e uma metodologia inovadora voltada para a alta performance "}
            </p>
            <p>
              {" Acreditamos que o verdadeiro desempenho vai muito além do esforço físico. Por isso, estruturamos nossos treinos com base na neurociência motora e na coordenação neuromuscular, garantindo que cada movimento seja executado com máxima eficiência e inteligência esportiva. "}
            </p>
            <p>
              {" Mais do que formar grandes atletas, preparamos indivíduos para os desafios da vida. Integramos preparação física, nutrição, psicologia e fisioterapia em um ambiente imersivo, oferecendo o suporte necessário para um crescimento sólido e duradouro. "}
            </p>
          </div>
        </div>
        <div className="conteiner-imagem-sobre">
          <ImagemResponsiva src="/assets/pkz-sobre-img.jpeg" alt="Atleta iniciando sessão de treino" />
        </div>
      </Secao>
      <Secao className="pkz-caracteristicas" id="pkz-caracteristicas" aria-labelledby="titulo-caracteristica">
        <div className="cabecalho">
          <span className="kicker">
            {"Características"}
          </span>
          <h2 id="titulo-caracteristica">
            {" Acompanhamento que integra diferentes áreas essenciais para o crescimento real e duradouro "}
          </h2>
        </div>
        <Card as="div" className="conteiner-cards-caracteristicas">
          <Card as="div" className="card-caracteristica">
            <div className="descricao-caracteristica">
              <h3>
                {"Preparação física"}
              </h3>
              <span>
                {"respeitando cada fase do desenvolvimento"}
              </span>
            </div>
            <div className="conteiner-img-icone-caracteristica" aria-hidden="true">
              <i className="fa-solid fa-dumbbell">
              </i>
            </div>
          </Card>
          <Card as="div" className="card-caracteristica">
            <div className="descricao-caracteristica">
              <h3>
                {"Desenvolvimento técnico esportivo"}
              </h3>
              <span>
                {"com metodologia e atenção individualizada"}
              </span>
            </div>
            <div className="conteiner-img-icone-caracteristica" aria-hidden="true">
              <i className="fa-solid fa-bullseye">
              </i>
            </div>
          </Card>
          <Card as="div" className="card-caracteristica">
            <div className="descricao-caracteristica">
              <h3>
                {"Nutrição"}
              </h3>
              <span>
                {"para formar hábitos que acompanham o atleta por toda a vida"}
              </span>
            </div>
            <div className="conteiner-img-icone-caracteristica" aria-hidden="true">
              <i className="fa-solid fa-apple-whole">
              </i>
            </div>
          </Card>
          <Card as="div" className="card-caracteristica">
            <div className="descricao-caracteristica">
              <h3>
                {"Psicologia"}
              </h3>
              <span>
                {"fortalecendo a mente, confiança e inteligência emocional"}
              </span>
            </div>
            <div className="conteiner-img-icone-caracteristica" aria-hidden="true">
              <i className="fa-solid fa-brain">
              </i>
            </div>
          </Card>
          <Card as="div" className="card-caracteristica">
            <div className="descricao-caracteristica">
              <h3>
                {"Fisioterapia"}
              </h3>
              <span>
                {"prevendo lesões e promovendo longevidade esportiva"}
              </span>
            </div>
            <div className="conteiner-img-icone-caracteristica" aria-hidden="true">
              <i className="fa-solid fa-heart-pulse">
              </i>
            </div>
          </Card>
        </Card>
      </Secao>
      <Secao className="pkz-planos" id="pkz-planos" aria-labelledby="titulo-planos">
        <div className="cabecalho-secao-planos">
          <span className="kicker-2">
            {"Escolha o plano que melhor se adapta a você"}
          </span>
          <h2 id="titulo-planos">
            {"Nossos Planos"}
          </h2>
        </div>
        <Card as="div" className="conteiner-planos-cards">
          <Card as="div" className="card-plano">
            <Card as="div" className="cabecalho-card-plano">
              <h2>
                {"Pacote Performance"}
              </h2>
              <span className="kicker-2">
                {"Para quem busca evolução acelerada"}
              </span>
              <span className="kicker-2">
                {"2x por semana"}
              </span>
            </Card>
            <ul>
              <li>
                <i className="fa-solid fa-check">
                </i>
                {" 2 aulas semanais"}
              </li>
              <li>
                <i className="fa-solid fa-check">
                </i>
                {" Nutrição e psicologia com acompanhamento "}
              </li>
              <li>
                <i className="fa-solid fa-check">
                </i>
                {" Fisioterapia com foco em recovery "}
              </li>
              <li>
                <i className="fa-solid fa-check">
                </i>
                {" Avaliação completa"}
              </li>
            </ul>
            <Link className="btn-agendamento" to="/pkz-lab/contato">
              {"Entrar em contato"}
            </Link>
          </Card>
          <Card as="div" className="card-plano">
            <Card as="div" className="cabecalho-card-plano">
              <h2>
                {"Pacote Flexibilidade"}
              </h2>
              <span className="kicker-2">
                {"Um plano que se adapta ao atleta"}
              </span>
            </Card>
            <div>
              <p>
                {" Os serviços da PKZ também podem ser contratados de forma individual, de acordo com a necessidade de cada atleta. "}
              </p>
              <p>
                {"Mais autonomia, sem abrir mão do suporte profissional"}
              </p>
            </div>
            <Link className="btn-agendamento" to="/pkz-lab/contato">
              {"Entrar em contato"}
            </Link>
          </Card>
          <Card as="div" className="card-plano">
            <Card as="div" className="cabecalho-card-plano">
              <h2>
                {"Pacote Desenvolvimento"}
              </h2>
              <span className="kicker-2">
                {"Equilíbrio entre treino, saúde e desenvolvimento"}
              </span>
              <span className="kicker-2">
                {"1x por semana"}
              </span>
            </Card>
            <ul>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true">
                </i>
                {" 1 aula semanal "}
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true">
                </i>
                {" Nutrição e psicologia com acompanhamento "}
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true">
                </i>
                {" Fisioterapia com foco em recovery "}
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true">
                </i>
                {" Acesso à estrutura PKZ Lab "}
              </li>
            </ul>
            <Link className="btn-agendamento" to="/pkz-lab/contato">
              {"Entrar em contato"}
            </Link>
          </Card>
        </Card>
      </Secao>
      <Secao className="pkz-secao-opiniao" id="pkz-depoimentos" aria-labelledby="titulo-opinioes" aria-roledescription="carrossel">
        <h2 id="titulo-opinioes">
          {"A opinião de quem confia no nosso trabalho"}
        </h2>
        <ul className="opinioes__lista">
          <Card as="li" className="opiniao-card" aria-label="Depoimento 1" aria-current="true">
            <Card as="article" aria-label="Primeiro depoimento">
              <blockquote>
                <p>
                  {" O treino em grupo mudou minha relação com o exercício — a energia da turma faz eu render muito mais do que treinando sozinho. "}
                </p>
              </blockquote>
              <footer>
                <ImagemResponsiva src="/assets/depoimento_pkz_1.jpg" alt="" sizes="48px" />
                <p>
                  <strong>
                    {"Gabriela Santos"}
                  </strong>
                  <br />
                  {"Aluno(a) · PKZ Lab"}
                </p>
              </footer>
            </Card>
          </Card>
          <Card as="li" className="opiniao-card" aria-label="Depoimento 2">
            <Card as="article" aria-label="Segundo depoimento">
              <blockquote>
                <p>
                  {" Em poucos meses de One To One minha evolução física ficou visível — o acompanhamento técnico faz toda a diferença. "}
                </p>
              </blockquote>
              <footer>
                <ImagemResponsiva src="/assets/depoimento_pkz_2.jpg" alt="" sizes="48px" />
                <p>
                  <strong>
                    {"Marco Paulo"}
                  </strong>
                  <br />
                  {"Aluno(a) · PKZ Lab"}
                </p>
              </footer>
            </Card>
          </Card>
        </ul>
      </Secao>
      <Secao className="localizacao" id="pkz-localizacao" aria-labelledby="titulo-localizacao">
        <div className="localizacao__info">
          <span className="kicker-2">
            {"Onde estamos"}
          </span>
          <h2 id="titulo-localizacao">
            {"Localização"}
          </h2>
          <dl className="localizacao__dados">
            <div>
              <dt>
                <i className="fa-solid fa-location-dot" aria-hidden="true">
                </i>
                {" Endereço "}
              </dt>
              <dd>
                {"Av. Armando Lombardi, 949, Loja G – Barra da Tijuca, Rio de Janeiro"}
              </dd>
            </div>
            <div>
              <dt>
                <i className="fa-solid fa-clock" aria-hidden="true">
                </i>
                {" Horário de funcionamento "}
              </dt>
              <dd>
                {"08:00 - 19:00"}
              </dd>
            </div>
          </dl>
          <a className="btn-agendamento" href="https://www.google.com/maps/search/?api=1&query=Av+Armando+Lombardi+949+Barra+da+Tijuca+Rio+de+Janeiro" target="_blank" rel="noopener noreferrer" aria-label="Abrir no mapa (abre em nova aba)">
            {"Abrir no mapa"}
          </a>
        </div>
        <figure className="localizacao__mapa">
          <iframe src="https://www.google.com/maps?q=Av+Armando+Lombardi+949+Barra+da+Tijuca+Rio+de+Janeiro&output=embed" width="600" height="450" title="Mapa com a localização da PKZ Lab" style={{"border": "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
          <figcaption>
            {"Dados do mapa ©2026 Google"}
          </figcaption>
        </figure>
      </Secao>
      <Secao id="pkz-faq" className="faq" aria-labelledby="titulo-faq">
        <div className="cabecalho">
          <span className="kicker">
            {"Dúvidas"}
          </span>
          <h2 id="titulo-faq">
            {"Perguntas frequentes"}
          </h2>
        </div>
        <Acordeon itens={[
          { pergunta: "A partir de qual idade a PKZ Lab atende? Precisa já praticar algum esporte?", resposta: "Atendemos jovens de 7 a 17 anos. Não é preciso ter experiência prévia: o treino respeita cada fase do desenvolvimento e acompanha desde a iniciação esportiva até o atleta em formação." },
          { pergunta: "Como funciona a avaliação inicial?", resposta: <>Na avaliação analisamos capacidades físicas, coordenação e aspectos técnicos do atleta. A partir dela definimos os objetivos e o pacote mais indicado. <Link to="/pkz-lab/agendamento">Agende a avaliação</Link>.</> },
          { pergunta: "Qual a diferença entre os pacotes?", resposta: <>O <strong>Performance</strong> tem 2 aulas semanais e avaliação completa, para quem busca evolução acelerada. O <strong>Desenvolvimento</strong> tem 1 aula semanal. Os dois incluem nutrição, psicologia e fisioterapia. No <strong>Flexibilidade</strong>, os serviços são contratados de forma individual, conforme a necessidade do atleta.</> },
          { pergunta: "O treino é seguro para crianças e adolescentes?", resposta: "Sim. A metodologia é baseada em neurociência motora e coordenação neuromuscular, respeitando cada fase do desenvolvimento. A fisioterapia atua na prevenção de lesões e na longevidade esportiva." },
        ]} />
      </Secao>
      <Secao className="cta-one" id="cta-pkz" aria-labelledby="titulo-cta">
        <span className="kicker-2">
          {"Comece agora"}
        </span>
        <h2 id="titulo-cta">
          {" Venha fazer parte da "}
          <span className="kicker-2">
            {"PKZ Lab"}
          </span>
        </h2>
        <p>
          {" Tire dúvidas, agende uma aula experimental e dê o próximo passo na sua performance. "}
        </p>
        <Link className="btn-agendamento" to="/pkz-lab/contato">
          {"Entrar em contato"}
        </Link>
      </Secao>
    </Layout>
  );
}