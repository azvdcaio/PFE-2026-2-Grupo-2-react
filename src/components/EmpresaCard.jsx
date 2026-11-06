import ImagemResponsiva from "./ImagemResponsiva";
import Button from "./Button";
import Card from "./Card";

/** Card grande de empresa do Hub (imagem de fundo, título, descrição, tags e botão). */
export default function EmpresaCard({ chave, id, imagem, imagemAlt, marca, titulo, descricao, tags, rotuloTags, to, label }) {
  return (
    <Card as="article" className={`empresa empresa--${chave}`} aria-labelledby={id}>
      <ImagemResponsiva className="empresa__imagem" src={imagem} alt={imagemAlt} sizes="(max-width: 767px) 100vw, 50vw" />
      <div className="empresa__conteudo">
        <div className="empresa__titulo">
          <p className="empresa__marca">{marca}</p>
          <h3 id={id}>{titulo}</h3>
        </div>
        <p className="empresa__descricao">{descricao}</p>
        <ul className="tags" aria-label={rotuloTags}>
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <Button to={to} variant="ciano">{label}</Button>
      </div>
    </Card>
  );
}