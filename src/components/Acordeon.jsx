import { useState } from "react";

/**
 * Acordeão controlado por estado (useState): só um item fica aberto por vez.
 * `aberto` guarda o índice do item aberto (ou null). O clique no <summary> não usa o
 * comportamento nativo do <details>: quem decide é o estado, e o React re-renderiza.
 *
 * itens: [{ pergunta: "texto", resposta: "texto ou JSX" }]
 */
export default function Acordeon({ itens }) {
  const [aberto, setAberto] = useState(null);

  function alternar(evento, indice) {
    evento.preventDefault();
    setAberto(aberto === indice ? null : indice);
  }

  return (
    <div className="faq__lista">
      {itens.map(({ pergunta, resposta }, indice) => (
        <details className="faq__item" key={pergunta} open={aberto === indice}>
          <summary className="faq__pergunta" onClick={(evento) => alternar(evento, indice)}>
            {pergunta}
          </summary>
          <div className="faq__resposta">
            <p>{resposta}</p>
          </div>
        </details>
      ))}
    </div>
  );
}