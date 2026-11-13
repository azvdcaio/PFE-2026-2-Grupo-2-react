import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { iniciarInteracoes } from "../interactions/interacoes";

export default function Layout({ theme, bodyClass = "", title, children }) {
  const { pathname } = useLocation();

  // Ao trocar de página, começa do topo (o React Router não reseta a rolagem).
  // Se a URL tiver âncora (ex.: /#empresas), deixa o navegador ir até ela.
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.className = bodyClass;
    document.title = title || "Hub | PKZ Lab e One To One";
    return iniciarInteracoes();
  }, [bodyClass, title, pathname]);

  return (
    <div className={`site-layout ${bodyClass}`} data-theme={theme}>
      <Header theme={theme} />
      <main>{children}</main>
      <Footer theme={theme} />
    </div>
  );
}
