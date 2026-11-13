import ImagemResponsiva from "./ImagemResponsiva";
import { empresas } from "../config/siteConfig";

export default function Footer({ theme }) {
  // O mesmo Footer atende todas as páginas, mas cada marca tem seu Instagram.
  const marca = theme === "pkz-lab" ? "PKZ Lab" : theme === "one-to-one" ? "One to One" : null;
  const instagram = theme === "pkz-lab"
    ? empresas.pkz.instagram
    : theme === "one-to-one"
      ? empresas["one-to-one"].instagram
      : "https://instagram.com/";

  return (
    <footer className="footer">
      <section className="footer__marca" aria-label="Rodapé do site">
        <ImagemResponsiva
          src="/assets/hub_logo.png"
          alt="Logotipo do Hub"
          sizes="80px"
        />
        <p>
          O Hub reúne PKZ Lab e One to One em um só espaço digital: duas
          metodologias, um só compromisso com performance.
        </p>
      </section>

      <section className="footer__redes" aria-labelledby="titulo-redes">
        <h2 id="titulo-redes">Redes sociais</h2>
        <ul>
          <li>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rede"
              aria-label={marca ? `Instagram da ${marca}` : "Instagram"}
            >
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:contato@exemplo.com"
              className="btn-rede"
              aria-label="E-mail"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </section>

      <hr className="footer__linha" />

      <p className="footer__copy">
        <small>
          &copy; 2026 - Hub PKZ Lab &amp; One to One - Todos os direitos
          reservados.
        </small>
      </p>
      <p className="footer__tag">
        <small>Site institucional — PKZ Lab &amp; One to One</small>
      </p>
    </footer>
  );
}