// importar a logo do hub e colocar na img

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__marca" aria-label="Rodapé do site">
        <img src="" alt="Hub" />
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
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rede"
              aria-label="Instagram"
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
