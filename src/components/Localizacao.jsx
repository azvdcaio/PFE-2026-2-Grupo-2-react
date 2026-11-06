import Secao from "./Secao";

/** Endereço, horário e mapa do Google. `mapaQuery` é o endereço escrito em texto simples. */
export default function Localizacao({ id = "localizacao", marca, endereco, horario, mapaQuery }) {
  const consulta = mapaQuery.trim().split(/\s+/).join("+");
  return (
    <Secao id={id} className="localizacao" aria-labelledby="titulo-localizacao">
      <div className="localizacao__info">
        <p className="secao__eyebrow secao__eyebrow--claro">Onde estamos</p>
        <h2 id="titulo-localizacao">Localização</h2>
        <dl className="localizacao__dados">
          <div>
            <dt><i className="fa-solid fa-location-dot" aria-hidden="true" /> Endereço</dt>
            <dd>{endereco}</dd>
          </div>
          <div>
            <dt><i className="fa-solid fa-clock" aria-hidden="true" /> Horário de funcionamento</dt>
            <dd>{horario}</dd>
          </div>
        </dl>
        <a className="btn btn--contorno" href={`https://www.google.com/maps/search/?api=1&query=${consulta}`} target="_blank" rel="noopener noreferrer" aria-label="Abrir no mapa (abre em nova aba)">
          Abrir no mapa
        </a>
      </div>
      <figure className="localizacao__mapa">
        <iframe src={`https://www.google.com/maps?q=${consulta}&output=embed`} title={`Mapa com a localização da ${marca}`} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        <figcaption>Dados do mapa ©2026 Google</figcaption>
      </figure>
    </Secao>
  );
}