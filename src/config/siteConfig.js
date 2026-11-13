/** Configuração centralizada das marcas, rotas e submenus. */
const inicio = { to: "/", label: "Início" };
const pkz = { to: "/pkz-lab", label: "PKZ Lab" };
const one = { to: "/one-to-one", label: "One to One" };
const fisio = { to: "/fisioterapia", label: "Fisioterapia" };

/**
 * WhatsApp da Fisioterapia. ATENÇÃO: número provisório (o mesmo placeholder da página de contato);
 */
const WHATSAPP_FISIOTERAPIA =
  "https://wa.me/5521999999999?text=" +
  encodeURIComponent("Olá! Gostaria de agendar uma avaliação de fisioterapia.");

/** Dados de cada marca usados por Contato e Agendamento (a chave também nomeia o localStorage do calendário). */
export const empresas = {
  pkz: {
    theme: "pkz-lab",
    bodyClass: "pagina-pkz",
    marca: "PKZ Lab",
    telefone: "+55 21 97265-7266",
    telefoneLink: "tel:+5521972657266",
    instagram: "https://www.instagram.com/playmakerz_pkz/",
    tiktok: "https://www.tiktok.com/@pkz_lab",
    agendar: "Agendar uma aula experimental",
    contato: "/pkz-lab/contato",
    agendamento: "/pkz-lab/agendamento",
  },
  "one-to-one": {
    theme: "one-to-one",
    bodyClass: "pagina-one",
    marca: "One To One",
    telefone: "+55 21 97106-7347",
    telefoneLink: "tel:+5521971067347",
    instagram: "https://www.instagram.com/studioonetoone/",
    agendar: "Agendar uma aula experimental",
    contato: "/one-to-one/contato",
    agendamento: "/one-to-one/agendamento",
  },
  fisioterapia: {
    theme: "fisioterapia",
    bodyClass: "pagina-one pagina-fisio",
    marca: "Fisioterapia",
    whatsapp: WHATSAPP_FISIOTERAPIA,
  },
};

export const siteConfig = {
  hub: {
    alt: "Hub",
    logo: "/assets/hub_logo.png",
    home: "/",
    links: [inicio, pkz, one, fisio],
    cta: null,
  },
  "pkz-lab": {
    alt: "PKZ Lab",
    logo: "/assets/pkz_logo.svg",
    home: "/pkz-lab",
    links: [
      inicio,
      pkz,
      one,
      fisio,
      { to: "/pkz-lab/contato", label: "Contato" },
    ],
    cta: { to: "/pkz-lab/agendamento", label: "Agendamento" },
  },
  "one-to-one": {
    alt: "One To One",
    logo: "/assets/onetoone_logo.svg",
    home: "/one-to-one",
    links: [
      inicio,
      pkz,
      one,
      fisio,
      { to: "/one-to-one/contato", label: "Contato" },
    ],
    cta: { to: "/one-to-one/agendamento", label: "Agendamento" },
  },
  fisioterapia: {
    alt: "Fisioterapia",
    logo: "/assets/fisioterapia_logo.svg",
    home: "/fisioterapia",
    links: [inicio, pkz, one, fisio],
    cta: null,
  },
};
