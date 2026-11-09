import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ theme, bodyClass = "", title, children }) {
  // Aplica a classe de tema no body e o título da aba
  useEffect(() => {
    document.body.className = bodyClass;
    document.title = title || "Hub | PKZ Lab e One To One";
  }, [bodyClass, title]);

  return (
    <div className={`site-layout ${bodyClass}`} data-theme={theme}>
      <Header theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}