import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImagemResponsiva from "../components/ImagemResponsiva";
import Secao from "../components/Secao";
import Card from "../components/Card";
import Carrossel from "../components/Carrossel";
import { Link } from "react-router-dom";
import Localizacao from "../components/Localizacao";
import Faq from "../components/Faq";

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
            <Secao id="planos" className="planos-one" aria-labelledby="titulo-planos" aria-roledescription="carrossel">
        <h2 id="titulo-planos">
          {"Nossos planos"}
        </h2>
        <Carrossel classeSlide="plano-card" rotuloAnterior="Ver plano anterior" rotuloProximo="Ver próximo plano">
          <Card as="article" aria-labelledby="titulo-plano-1">
            <ImagemResponsiva className="plano-card__imagem" src="/assets/plano_express.jpg" alt="Aluna com roupa de treino" />
            <p className="plano-card__badge">
              {"Plano Express"}
            </p>
            <Card as="div" className="plano-card__detalhes">
              <h3 id="titulo-plano-1">
                {" Para quem tem pouco tempo mas não abre mão de se cuidar "}
              </h3>
              <dl>
                <div>
                  <dt>
                    {"Treinos"}
                  </dt>
                  <dd>
                    {"Treinos de 30 min até 5x por semana"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Fisio"}
                  </dt>
                  <dd>
                    {"Avaliação inclusa"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Nutri"}
                  </dt>
                  <dd>
                    {"Avaliação inclusa"}
                  </dd>
                </div>
              </dl>
              <Card as="a" className="plano-card__cta" to="/one-to-one/contato">
                {"Entrar em contato"}
              </Card>
            </Card>
          </Card>
          <Card as="article" aria-labelledby="titulo-plano-2">
            <ImagemResponsiva className="plano-card__imagem" src="/assets/plano_onemove.jpg" alt="Adulto fazendo flexão" />
            <p className="plano-card__badge">
              {"Plano One Move"}
            </p>
            <Card as="div" className="plano-card__detalhes">
              <h3 id="titulo-plano-2">
                {"Constância é a chave"}
              </h3>
              <dl>
                <div>
                  <dt>
                    {"Treinos"}
                  </dt>
                  <dd>
                    {"Treinos de 60 min até 3x por semana"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Fisio"}
                  </dt>
                  <dd>
                    {"Avaliação inclusa"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Nutri"}
                  </dt>
                  <dd>
                    {"Avaliação inclusa"}
                  </dd>
                </div>
              </dl>
              <Card as="a" className="plano-card__cta" to="/one-to-one/contato">
                {"Entrar em contato"}
              </Card>
            </Card>
          </Card>
          <Card as="article" aria-labelledby="titulo-plano-3">
            <ImagemResponsiva className="plano-card__imagem" src="/assets/plano_onepower.jpg" alt="Alunas treinando com personal" />
            <p className="plano-card__badge">
              {"Plano One Power"}
            </p>
            <Card as="div" className="plano-card__detalhes">
              <h3 id="titulo-plano-3">
                {" O ideal para quem busca evolução mais próxima "}
              </h3>
              <dl>
                <div>
                  <dt>
                    {"Treinos"}
                  </dt>
                  <dd>
                    {"Treinos de 60 min - 6x por semana"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Fisio"}
                  </dt>
                  <dd>
                    {"Avaliação inclusa"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Nutri"}
                  </dt>
                  <dd>
                    {" Avaliação inclusa"}
                    <br />
                    {"Planejamento alimentar personalizado "}
                  </dd>
                </div>
              </dl>
              <Card as="a" className="plano-card__cta" to="/one-to-one/contato">
                {"Entrar em contato"}
              </Card>
            </Card>
          </Card>
          <Card as="article" aria-labelledby="titulo-plano-4">
            <ImagemResponsiva className="plano-card__imagem" src="/assets/plano_betheone.jpg" alt="Alunas treinando" />
            <p className="plano-card__badge">
              {"Plano Be The One"}
            </p>
            <Card as="div" className="plano-card__detalhes">
              <h3 id="titulo-plano-4">
                {"O mais completo do Studio"}
              </h3>
              <dl>
                <div>
                  <dt>
                    {"Treinos"}
                  </dt>
                  <dd>
                    {"Treinos de 60 min - até 2 por dia"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Fisio"}
                  </dt>
                  <dd>
                    {"2 sessões semanais com fisioterapeuta"}
                  </dd>
                </div>
                <div>
                  <dt>
                    {"Nutri"}
                  </dt>
                  <dd>
                    {" Avaliação mensal"}
                    <br />
                    {"Planejamento alimentar personalizado "}
                  </dd>
                </div>
              </dl>
              <Card as="a" className="plano-card__cta" to="/one-to-one/contato">
                {"Entrar em contato"}
              </Card>
            </Card>
          </Card>
        </Carrossel>
      </Secao>
            <Secao id="depoimentos" className="secao" aria-labelledby="titulo-opinioes" aria-roledescription="carrossel">
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
                <ImagemResponsiva src="/assets/depoimento_one_1.jpg" alt="" sizes="48px" />
                <p>
                  <strong>
                    {"Ana Clara"}
                  </strong>
                  <br />
                  {"Aluno(a) · One To One "}
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
                <ImagemResponsiva src="/assets/depoimento_one_2.jpg" alt="" sizes="48px" />
                <p>
                  <strong>
                    {"Gabriel da Silva"}
                  </strong>
                  <br />
                  {"Aluno(a) · One To One "}
                </p>
              </footer>
            </Card>
          </Card>
        </ul>
      </Secao>
            <Localizacao id="localizacao" marca="One To One"
        endereco="Av. Armando Lombardi, 949, Loja I – Barra da Tijuca, Rio de Janeiro"
        horario="08:00 - 19:00"
        mapaQuery="Av Armando Lombardi 949 Barra da Tijuca Rio de Janeiro" />
      <Faq id="faq" itens={[
        { pergunta: "Preciso ter experiência com musculação?", resposta: "Não. O treino é individual, com atendimento reservado, e é montado a partir da sua avaliação, seja você iniciante ou avançado." },
        { pergunta: "Como funciona a avaliação inicial?", resposta: <>Ela inclui avaliação 3D de movimento, além das avaliações de fisioterapia e nutrição, que fazem parte de todos os planos. <Link to="/one-to-one/agendamento">Agende sua avaliação</Link>.</> },
        { pergunta: "Qual plano é ideal para mim?", resposta: <><strong>Express</strong>: treinos de 30 min, até 5x por semana. <strong>One Move</strong>: 60 min, até 3x por semana. <strong>One Power</strong>: 60 min, 6x por semana, com planejamento alimentar. <strong>Be The One</strong>: até 2 treinos por dia e 2 sessões semanais de fisioterapia. Na dúvida, a equipe indica o melhor plano depois da avaliação.</> },
        { pergunta: "Posso fazer uma aula experimental?", resposta: <>Sim. O studio funciona das 08:00 às 19:00. <Link to="/one-to-one/contato">Fale com a gente</Link> para marcar a sua.</> },
      ]} />
    </Layout>
  );
}