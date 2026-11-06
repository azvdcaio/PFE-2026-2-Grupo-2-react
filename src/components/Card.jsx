import { Link } from "react-router-dom";

/** Cartão flexível de dados, planos, empresas, equipe ou depoimentos. */
export default function Card({ as: Element = "article", to, className = "", children, ...props }) {
  const Component = to ? Link : Element;
  return (
    <Component {...(to ? { to } : {})} className={className} {...props}>
      {children}
    </Component>
  );
}