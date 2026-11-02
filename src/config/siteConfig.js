// importar logos das empresas

export const siteConfig = {
  hub: {
    logo: "",
    links: [
      { to: "/", label: "Inicio" },
      { to: "/pkz", label: "PKZ Lab" },
      { to: "/one-to-one", label: "One To One" },
    ],
    cta: null,
  },
  "pkz-lab": {
    logo: "",
    links: [
      { to: "/", label: "Inicio" },
      { to: "/pkz", label: "PKZ Lab" },
      { to: "/one-to-one", label: "One To One" },
      { to: "/pkz-lab/contato", label: "Contato" },
    ],
    cta: { to: "/pkz-lab/agendamento", label: "Agendamento" },
  },
  "one-to-one": {
    logo: "",
    links: [
      { to: "/", label: "Inicio" },
      { to: "/pkz", label: "PKZ Lab" },
      { to: "/one-to-one", label: "One To One" },
      { to: "/one-to-one/contato", label: "Contato" },
    ],
    cta: { to: "/one-to-one/agendamento", label: "Agendamento" },
  },
};
