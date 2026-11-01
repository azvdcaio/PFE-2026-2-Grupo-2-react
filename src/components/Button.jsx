import { Link } from "react-router-dom";

const VARIANTES = {
  primario: "btn btn--primario",
  contorno: "btn btn--contorno",
  ciano: "btn btn--ciano",
  agendamento: "btn-agendamento",
};

export default function Button({
  children,
  to,
  href,
  variant = "primario",
  className = "",
  ...rest
}) {
  const classes =
    `${VARIANTES[variant] ?? VARIANTES.primario} ${className}`.trim();

  // Rota interna (React Router, sem recarregar a página)
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // Link externo ou mailto:
  if (href) {
    const externo = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(externo && { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Botão de verdade (ação, submit, abrir modal). Passe type="submit" quando for o caso.
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
