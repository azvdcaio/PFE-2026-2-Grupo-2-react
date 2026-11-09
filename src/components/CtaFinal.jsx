import Button from "./Button";
import Secao from "./Secao";

// Chamada final da página
export default function CtaFinal({ id, compacto = false, eyebrow = "Comece agora", titulo, texto, to, href, label = "Entrar em contato" }) {
  return (
    <Secao id={id} className={`cta-one${compacto ? " cta-one--livre" : ""}`} aria-labelledby="titulo-cta">
      <p className="secao__eyebrow secao__eyebrow--claro">{eyebrow}</p>
      <h2 id="titulo-cta">{titulo}</h2>
      <p>{texto}</p>
      <Button to={to} href={href} variant="ciano">{label}</Button>
    </Secao>
  );
}