import Card from "./Card";
import Secao from "./Secao";

/**
 * Lista de cards com ícone alternados à esquerda/direita (Hub e Fisioterapia).
 * itens: [{ titulo, texto, icone: "classe do Font Awesome" }]
 */
export default function Valores({ id = "valores", kicker, titulo, texto, itens }) {
  return (
    <Secao id={id} className="secao valores" aria-labelledby="titulo-valores">
      <div className="cabecalho">
        <span className="kicker">{kicker}</span>
        <div>
          <h2 id="titulo-valores">{titulo}</h2>
          <p className="secao__texto">{texto}</p>
        </div>
      </div>
      <ul className="valores__lista">
        {itens.map(({ titulo: nome, texto: descricao, icone }, indice) => (
          <li key={nome}>
            <Card as="article" className={`card-caracteristica ${indice % 2 === 0 ? "valor--esquerda" : "valor--direita"}`}>
              <div className="descricao-caracteristica">
                <h3>{nome}</h3>
                <span>{descricao}</span>
              </div>
              <div className="conteiner-img-icone-caracteristica" aria-hidden="true">
                <i className={icone} aria-hidden="true" />
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Secao>
  );
}