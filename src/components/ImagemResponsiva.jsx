/**
 * Exibe AVIF e WebP com fallback para JPG/PNG, dependendo do suporte do navegador.
 * Atributo alt é obrigatório no uso
 * A lista de variantes gerada a partir dos assets em public/assets.
 */
import { formatosImagens } from "../config/formatosImagens";

export default function ImagemResponsiva({
  src,
  alt,
  sizes = "(max-width: 767px) 100vw, 50vw",
  loading = "lazy",
  decoding = "async",
  width,
  height,
  ...props
}) {
    const imagem = formatosImagens[src];
    const atributos = {
    ...props,
    src,
    alt,
    loading,
    decoding,
    width: width ?? imagem?.largura,
    height: height ?? imagem?.altura,
  };

  // SVG e arquivos externos mantêm renderização normal e alternativa textual.
  if (!imagem) return <img {...atributos} />;

  const base = src.slice(0, src.lastIndexOf("."));
  const lista = (extensao) => imagem.larguras
    .map((largura) => `${base}-${largura}.${extensao} ${largura}w`)
    .join(", ");

  return (
    <picture className="imagem-responsiva">
      <source type="image/avif" srcSet={lista("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={lista("webp")} sizes={sizes} />
      <img {...atributos} />
    </picture>
  );
}