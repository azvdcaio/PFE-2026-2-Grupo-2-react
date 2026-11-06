/**
 * Componente semântico reutilizável para as seções das páginas.
 * Recebe id, className, atributos ARIA e conteúdo sem alterar o CSS original.
 * Exemplo: <Secao id="valores" className="secao valores">...</Secao>
 */
export default function Secao({ as: Element = "section", children, className = "", ...props }) {
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
}