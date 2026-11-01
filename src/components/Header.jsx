import { Link } from "react-router";
import { siteConfig } from "../config/siteConfig";

export default function Header({ theme }) {
  const { logo, links, cta } = siteConfig[theme];
  return (
    <header>
      <Link to="/inicio">
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <nav>
          <ul>
            {links.map((li) => (
              <Link key={li.to} to={li.to}>
                {li.label}
              </Link>
            ))}
          </ul>
        </nav>
        {cta && (
          <Link to={cta.to} className="btn btn-agendamento">
            {cta.label}
          </Link>
        )}
      </div>
    </header>
  );
}
