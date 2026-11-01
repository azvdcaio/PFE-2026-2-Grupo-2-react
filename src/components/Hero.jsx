import { useId } from "react";
import Button from "./Button";

function Hero({
  imagem,
  imagemAlt = "",
  video,
  poster,
  eyebrow,
  titulo,
  texto,
  acoes = [],
}) {
  const tituloId = useId();

  const botoes = acoes.map(({ label, icone, ...props }, i) => (
    <Button key={i} {...props}>
      {label}
      {icone && <i className={icone} aria-hidden="true"></i>}
    </Button>
  ));

  return (
    <section className="hero" aria-labelledby={tituloId}>
      {imagem && <img className="hero__imagem" src={imagem} alt={imagemAlt} />}

      {video && (
        <video
          className="hero__video"
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      <div className="hero__conteudo">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 id={tituloId}>{titulo}</h1>
        {texto && <p className="hero__texto">{texto}</p>}
        {acoes.length > 1 ? (
          <div className="hero__acoes">{botoes}</div>
        ) : (
          botoes
        )}
      </div>
    </section>
  );
}

export default Hero;
