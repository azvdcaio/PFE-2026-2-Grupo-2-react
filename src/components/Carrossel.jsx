import { Children, useState } from "react";

// Carrossel com estado (useState): setas e bolinhas só mudam o slide atual.
// Props: children (slides), classeSlide, rotuloAnterior, rotuloProximo, rotuloSlide
export default function Carrossel({
  children,
  classeSlide = "",
  rotuloAnterior = "Ver slide anterior",
  rotuloProximo = "Ver próximo slide",
  rotuloSlide = "slide",
}) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [atual, setAtual] = useState(0);

  // Volta ao primeiro depois do último, e ao último antes do primeiro
  const irPara = (indice) => setAtual((indice + total) % total);

  if (!total) return null;

  return (
    <>
      <div className="carrossel">
        <button className="carrossel__seta" type="button" aria-label={rotuloAnterior} onClick={() => irPara(atual - 1)}>
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <ul className="carrossel__slides">
          {slides.map((slide, indice) => (
            <li
              key={slide.key ?? indice}
              className={classeSlide}
              aria-label={`Slide ${indice + 1} de ${total}`}
              aria-current={indice === atual}
            >
              {slide}
            </li>
          ))}
        </ul>
        <button className="carrossel__seta" type="button" aria-label={rotuloProximo} onClick={() => irPara(atual + 1)}>
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
      <ul className="carrossel__dots" aria-label="Selecionar slide">
        {slides.map((slide, indice) => (
          <li key={slide.key ?? indice}>
            <button type="button" aria-label={`Ir para ${rotuloSlide} ${indice + 1}`} aria-current={indice === atual} onClick={() => irPara(indice)} />
          </li>
        ))}
      </ul>
    </>
  );
}