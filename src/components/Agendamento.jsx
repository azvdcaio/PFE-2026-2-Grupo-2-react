import Layout from "./Layout";
import Secao from "./Secao";
import { empresas } from "../config/siteConfig";

export default function Agendamento({ empresa }) {
  const { theme, bodyClass, marca } = empresas[empresa];
  return (
    <Layout
      theme={theme}
      bodyClass={bodyClass}
      title={`Agendamento | ${marca}`}
    >
      <Secao className="secao agendamento" aria-labelledby="titulo-agendamento">
        <div className="agendamento__intro">
          <h1 id="titulo-agendamento">{"Agende seu horário"}</h1>
          <p>
            {
              " Escolha o melhor dia no calendário e preencha seus dados. Entramos em contato para confirmar. "
            }
          </p>
          <ol className="passos">
            <li>
              <span className="passos__numero">{"1"}</span>
              {"Selecione um dia disponível "}
            </li>
            <li>
              <span className="passos__numero">{"2"}</span>
              {"Informe horário e seus dados "}
            </li>
            <li>
              <span className="passos__numero">{"3"}</span>
              {"Receba a confirmação"}
            </li>
          </ol>
        </div>
        <div className="calendario" data-empresa={empresa}>
          <div className="calendario__topo">
            <h2
              className="calendario__titulo"
              id="calendario-titulo"
              aria-live="polite"
            ></h2>
            <div className="calendario__nav">
              <button
                type="button"
                className="calendario__seta"
                data-calendario-anterior=""
                aria-label="Mês anterior"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="calendario__seta"
                data-calendario-proximo=""
                aria-label="Próximo mês"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <ul className="calendario__semana" aria-hidden="true">
            <li>{"DOM"}</li>
            <li>{"SEG"}</li>
            <li>{"TER"}</li>
            <li>{"QUA"}</li>
            <li>{"QUI"}</li>
            <li>{"SEX"}</li>
            <li>{"SÁB"}</li>
          </ul>
          <div
            className="calendario__dias"
            role="group"
            aria-labelledby="calendario-titulo"
          ></div>
          <ul className="calendario__legenda">
            <li>
              <i
                className="calendario__marca calendario__marca--selecionado"
                aria-hidden="true"
              ></i>
              {"Selecionado "}
            </li>
            <li>
              <i
                className="calendario__marca calendario__marca--hoje"
                aria-hidden="true"
              ></i>
              {"Hoje "}
            </li>
            <li>
              <i
                className="calendario__marca calendario__marca--indisponivel"
                aria-hidden="true"
              ></i>
              {"Indisponível "}
            </li>
            <li>
              <i
                className="calendario__marca calendario__marca--feriado"
                aria-hidden="true"
              ></i>
              {"Feriado "}
            </li>
            <li>
              <i
                className="calendario__marca calendario__marca--reservado"
                aria-hidden="true"
              ></i>
              {"Reservado "}
            </li>
          </ul>
        </div>
      </Secao>
      <dialog
        id="modal-agendamento"
        className="modal modal--agendamento"
        aria-labelledby="modal-agendamento-titulo"
      >
        <div className="modal__caixa">
          <button
            type="button"
            className="modal__fechar"
            aria-label="Fechar"
            data-modal-fechar=""
          >
            <i className="fa fa-xmark" aria-hidden="true"></i>
          </button>
          <div className="modal__cabecalho">
            <h2 id="modal-agendamento-titulo">{"Finalize seu agendamento"}</h2>
            <p className="data-agendamento">
              <i className="fa-regular fa-calendar" aria-hidden="true"></i>
              <time data-agendamento-data=""></time>
            </p>
          </div>
          <form className="form-agendamento" noValidate={true}>
            <input type="hidden" name="data" />
            <fieldset className="form-agendamento__campo">
              <legend className="form-agendamento__rotulo">{"Horário"}</legend>
              <div className="horarios"></div>
              <span className="erro-campo" data-erro-para="horario"></span>
            </fieldset>
            <div className="form-agendamento__campo">
              <label
                className="form-agendamento__rotulo"
                htmlFor="agendamento-nome"
              >
                {"Nome completo"}
              </label>
              <input
                className="form-agendamento__input"
                type="text"
                id="agendamento-nome"
                name="nome"
                placeholder="Seu nome"
                autoComplete="name"
              />
              <span className="erro-campo" data-erro-para="nome"></span>
            </div>
            <div className="form-agendamento__campo">
              <label
                className="form-agendamento__rotulo"
                htmlFor="agendamento-whatsapp"
              >
                {"WhatsApp"}
              </label>
              <input
                className="form-agendamento__input"
                type="tel"
                id="agendamento-whatsapp"
                name="whatsapp"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
              />
              <span className="erro-campo" data-erro-para="whatsapp"></span>
            </div>
            <div className="form-agendamento__campo">
              <label
                className="form-agendamento__rotulo"
                htmlFor="agendamento-email"
              >
                {"E-mail"}
              </label>
              <input
                className="form-agendamento__input"
                type="text"
                inputMode="email"
                id="agendamento-email"
                name="email"
                placeholder="voce@email.com"
                autoComplete="email"
              />
              <span className="erro-campo" data-erro-para="email"></span>
            </div>
            <div className="form-agendamento__campo">
              <label
                className="form-agendamento__rotulo"
                htmlFor="agendamento-obs"
              >
                {"Observações (opcional)"}
              </label>
              <textarea
                className="form-agendamento__input"
                id="agendamento-obs"
                name="observacoes"
                rows="3"
                placeholder="Algo que devemos saber?"
              ></textarea>
              <span className="erro-campo" data-erro-para="observacoes"></span>
            </div>
            <p className="form-agendamento__erro" role="alert"></p>
            <div className="form-agendamento__acoes">
              <button
                type="button"
                className="form-agendamento__botao"
                data-modal-fechar=""
              >
                {" Cancelar "}
              </button>
              <button
                type="submit"
                className="form-agendamento__botao form-agendamento__botao--primario"
              >
                {" Confirmar agendamento "}
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <dialog
        id="modal-sucesso"
        className="modal modal--sucesso"
        aria-labelledby="modal-sucesso-titulo"
      >
        <div className="modal__caixa sucesso">
          <div className="sucesso__icone" aria-hidden="true">
            <i className="fa fa-check"></i>
          </div>
          <h2
            className="sucesso__titulo"
            id="modal-sucesso-titulo"
            data-sucesso-titulo=""
          ></h2>
          <p className="sucesso__detalhe" data-sucesso-detalhe=""></p>
          <button
            type="button"
            className="form-agendamento__botao form-agendamento__botao--primario sucesso__botao"
            data-modal-fechar=""
          >
            {" Fechar "}
          </button>
        </div>
      </dialog>
    </Layout>
  );
}
