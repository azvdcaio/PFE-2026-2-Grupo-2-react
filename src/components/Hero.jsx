import ImagemResponsiva from "./ImagemResponsiva";
import Button from "./Button";

<<<<<<< HEAD
/** Hero reaproveitado no Hub e One To One, com os estilos originais. */
export default function Hero({ id = "hero", imagem, imagemAlt = "", imagemSizes = "100vw", video, poster, wordmark = false, eyebrow, titulo, texto, acoes = [] }) {
  return (
    <section id={id} className="hero" aria-labelledby="titulo-hero">
      {imagem && <ImagemResponsiva className="hero__imagem" src={imagem} alt={imagemAlt} sizes={imagemSizes} loading="eager" fetchPriority="high" />}
=======
/** Hero reutilizado nas páginas principais; className permite estilos próprios de cada marca. */
export default function Hero({ id = "hero", imagem, imagemAlt = "", video, poster, wordmark = false, eyebrow, titulo, texto, acoes = [], className = "" }) {
  return (
    <section id={id} className={`hero ${className}`.trim()} aria-labelledby="titulo-hero">
      {imagem && <ImagemResponsiva className="hero__imagem" src={imagem} alt={imagemAlt} sizes="100vw" loading="eager" fetchPriority="high" />}
>>>>>>> 05a3cab17f371f98871f0f2e44b5beb364a7bfd1
      {video && <video className="hero__video" src={video} poster={poster} autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} />}
      {wordmark && <p className="hero__wordmark" aria-hidden="true" />}
      <div className="hero__conteudo">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 id="titulo-hero">{titulo}</h1>
        {texto && <p className="hero__texto">{texto}</p>}
        {acoes.length > 1 ? (
          <div className="hero__acoes">
            {acoes.map(({ label, icone, ...props }, index) => (
              <Button key={`${label}-${index}`} {...props}>{label}{icone && <i className={icone} aria-hidden="true" />}</Button>
            ))}
          </div>
        ) : acoes.map(({ label, icone, ...props }, index) => (
          <Button key={`${label}-${index}`} {...props}>{label}{icone && <i className={icone} aria-hidden="true" />}</Button>
        ))}
      </div>
    </section>
  );
}
