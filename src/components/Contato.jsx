import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Secao from "../components/Secao";
import { empresas } from "../config/siteConfig";

export default function Contato({ empresa = "pkz" }) {
  const pkz = empresa === "pkz";
  const { telefone, telefoneLink, instagram, tiktok } = empresas[empresa];
  const marca = pkz ? "PKZ Lab" : "One To One";
  return (
    <Layout
      theme={pkz ? "pkz-lab" : "one-to-one"}
      bodyClass={pkz ? "pagina-pkz" : "pagina-one"}
      title={`Contato | ${marca}`}
    >
      <Secao
        className="secao agendamento contato"
        aria-labelledby="titulo-contato"
      >
        <div className="agendamento__intro contato__intro">
          <h1 id="titulo-contato">{`Entre em contato com a ${marca}`}</h1>
          <p>
            {
              " Tem alguma dúvida, crítica ou sugestão? Preencha o formulário e nossa equipe responderá o mais rápido possível. "
            }
          </p>
          <p>
            <Link
              to={pkz ? "/pkz-lab/agendamento" : "/one-to-one/agendamento"}
              className="btn btn--ciano"
            >
              {"Agendar uma aula experimental"}
            </Link>
          </p>
          <h2 id="titulo-informacoes">{"Informação de contato"}</h2>
          <address className="contato__info">
            <ul className="passos contato__lista">
              <li>
                <span className="passos__numero">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </span>
                <a href={telefoneLink}>{telefone}</a>
              </li>
              <li>
                <span className="passos__numero">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </span>
                <a href="mailto:demo@gmail.com">{"demo@gmail.com"}</a>
              </li>
              <li>
                <span className="passos__numero">
                  <i
                    className="fa-solid fa-location-dot"
                    aria-hidden="true"
                  ></i>
                </span>
                {" Barra da Tijuca, Rio de Janeiro "}
              </li>
            </ul>
          </address>
          <ul
            className={pkz ? "contatos_redes_pkz" : "contato__redes"}
            aria-label={`Redes sociais da ${marca}`}
          >
            <li>
              <a
                href={tiktok ?? "https://www.tiktok.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rede"
                aria-label={`TikTok da ${marca}`}
              >
                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rede"
                aria-label={`Instagram da ${marca}`}
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rede"
                aria-label={`WhatsApp da ${marca}`}
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <form
          className="form-agendamento"
          action="#"
          method="get"
          aria-label="Formulário de contato"
          noValidate={true}
          data-form-contato=""
        >
          <div className="form-agendamento__campo">
            <label className="form-agendamento__rotulo" htmlFor="nome">
              {"Nome"}
            </label>
            <input
              className="form-agendamento__input"
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              autoComplete="given-name"
            />
            <span className="erro-campo" data-erro-para="nome"></span>
          </div>
          <div className="form-agendamento__campo">
            <label className="form-agendamento__rotulo" htmlFor="sobrenome">
              {"Sobrenome (opcional)"}
            </label>
            <input
              className="form-agendamento__input"
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Seu sobrenome"
              autoComplete="family-name"
            />
            <span className="erro-campo" data-erro-para="sobrenome"></span>
          </div>
          <div className="form-agendamento__campo">
            <label className="form-agendamento__rotulo" htmlFor="email">
              {"E-mail"}
            </label>
            <input
              className="form-agendamento__input"
              type="text"
              inputMode="email"
              id="email"
              name="email"
              placeholder="voce@email.com"
              autoComplete="email"
            />
            <span className="erro-campo" data-erro-para="email"></span>
          </div>
          <div className="form-agendamento__campo">
            <label className="form-agendamento__rotulo" htmlFor="whatsapp">
              {"WhatsApp (opcional)"}
            </label>
            <input
              className="form-agendamento__input"
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="(00) 00000-0000"
              autoComplete="tel"
            />
            <span className="erro-campo" data-erro-para="whatsapp"></span>
          </div>
          <div className="form-agendamento__campo">
            <label className="form-agendamento__rotulo" htmlFor="mensagem">
              {"Mensagem"}
            </label>
            <textarea
              className="form-agendamento__input"
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Escreva sua dúvida, crítica ou sugestão"
              autoComplete="off"
            ></textarea>
            <span className="erro-campo" data-erro-para="mensagem"></span>
          </div>
          <p className="form-agendamento__erro" role="alert"></p>
          <p className="form-agendamento__sucesso" role="status"></p>
          <button
            type="submit"
            className="form-agendamento__botao form-agendamento__botao--primario"
          >
            {" Enviar mensagem "}
          </button>
        </form>
      </Secao>
    </Layout>
  );
}
