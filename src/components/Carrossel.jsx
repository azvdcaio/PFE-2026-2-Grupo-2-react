import { Children, useEffect, useRef, useState } from "react";

// Carrossel com estado (useState): setas e bolinhas só mudam o slide atual.
// O useEffect rola a faixa até ele, e o onScroll devolve a rolagem manual para o estado.
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
  const faixa = useRef(null);
  const espera = useRef(null);

  // Rola até o slide atual (só se a faixa ainda não estiver lá)
  useEffect(() => {
    const el = faixa.current;
    if (!el) return;
    const alvo = atual * el.clientWidth;
    if (Math.abs(el.scrollLeft - alvo) < 2) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: alvo, behavior: reduzir ? "auto" : "smooth" });
  }, [atual]);

  useEffect(() => () => clearTimeout(espera.current), []);

  // Rolagem manual: atualiza o slide atual quando a rolagem para
  function aoRolar(evento) {
    const el = evento.currentTarget;
    clearTimeout(espera.current);
    espera.current = setTimeout(() => {
      setAtual(Math.round(el.scrollLeft / el.clientWidth));
    }, 100);
  }

  const irPara = (indice) => setAtual((indice + total) % total);

  if (!total) return null;

  return (
    <>
      <div className="carrossel">
        <button className="carrossel__seta" type="button" aria-label={rotuloAnterior} onClick={() => irPara(atual - 1)}>
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <ul className="carrossel__slides" ref={faixa} onScroll={aoRolar}>
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