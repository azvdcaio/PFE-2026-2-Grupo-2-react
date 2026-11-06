import Secao from "./Secao";
import Acordeon from "./Acordeon";

/**
 * Perguntas frequentes em <details>. O Acordeon controla qual item está aberto.
 * itens: [{ pergunta: "texto", resposta: "texto ou JSX" }]
 */
export default function Faq({ id = "faq", eyebrow = "Dúvidas", titulo = "Perguntas frequentes", itens }) {
  return (
    <Secao id={id} className="secao faq" aria-labelledby="titulo-faq">
      <div className="secao__cabecalho">
        <p className="secao__eyebrow">{eyebrow}</p>
        <h2 id="titulo-faq">{titulo}</h2>
      </div>
      <Acordeon itens={itens} />
    </Secao>
  );
}