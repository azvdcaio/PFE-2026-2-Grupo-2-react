import ImagemResponsiva from "./ImagemResponsiva";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

/** Navegação principal compartilhada entre todas as páginas, sem legendas/submenus. */
export default function Header({ theme }) {
  const { alt, logo, home, links, cta } = siteConfig[theme];
  const location = useLocation();
  const [aberto, setAberto] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const fecharAoClicarFora = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setAberto(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 767px)");
    const aoRedimensionar = () => { if (desktop.matches) setAberto(false); };
    document.addEventListener("pointerdown", fecharAoClicarFora);
    desktop.addEventListener("change", aoRedimensionar);
    return () => {
      document.removeEventListener("pointerdown", fecharAoClicarFora);
      desktop.removeEventListener("change", aoRedimensionar);
    };
  }, []);

  useEffect(() => {
    // Fecha o menu mobile ao navegar para outra página ou âncora.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAberto(false);
  }, [location.pathname, location.hash]);

  return (
    <header ref={headerRef} className={`header__hub menu-pronto${aberto ? " menu-aberto" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setAberto(false);
          headerRef.current?.querySelector(".menu-toggle")?.focus();
        }
      }}>
      <Link to={home} className="header__logo" aria-label={`Página inicial da ${alt}`}>
        <ImagemResponsiva src={logo} alt={alt} sizes="140px" loading="eager" />
      </Link>
      <button type="button" className="menu-toggle" aria-controls="menu-painel" aria-expanded={aberto}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"} onClick={() => setAberto((prev) => !prev)}>
        <span className="menu-toggle__barra" aria-hidden="true" />
      </button>
      <div className="header__acoes menu-painel" id="menu-painel">
        <nav aria-label="Navegação principal">
          <ul className="menu">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end onClick={() => setAberto(false)}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {cta && <NavLink to={cta.to} className="btn-agendamento" onClick={() => setAberto(false)}>{cta.label}</NavLink>}
      </div>
    </header>
  );
}
