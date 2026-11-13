import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { iniciarInteracoes } from "../interactions/interacoes";

export default function Layout({ theme, bodyClass = "", title, children }) {
  const { pathname } = useLocation();
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
