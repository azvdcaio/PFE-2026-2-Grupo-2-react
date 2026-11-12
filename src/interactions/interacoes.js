/**
 * Funcionalidades interativas migradas do script.js original.
 * As páginas, seções, cards e links são React; este módulo preserva o calendário
 * e a validação de formulários já implementados no projeto Vanilla.
 * Falta integração com back-end no projeto original (agendamentos são locais).
 */
// Um AbortController por montagem remove todos os listeners quando a rota muda.
let activeSignal;
function on(target, type, listener) {
  if (target) target.addEventListener(type, listener, {signal: activeSignal});
}

function apenasNumeros(texto) {
  let numeros = "";
  for (let posicao = 0; posicao < texto.length; posicao++) {
    const caractere = texto[posicao];
    if (caractere >= "0" && caractere <= "9") {
      numeros = numeros + caractere;
    }
  }
  return numeros;
}

// Só letras, espaço, hífen e apóstrofo
function soTemLetras(texto) {
  for (let posicao = 0; posicao < texto.length; posicao++) {
    const caractere = texto[posicao];

    // uma letra muda quando vira maiúscula ou minúscula ("a" e "A"),
    // já números e símbolos continuam iguais ("1" e "1")
    const ehLetra = caractere.toLowerCase() !== caractere.toUpperCase();
    const ehEspaco = caractere === " ";
    const ehHifen = caractere === "-";
    const ehApostrofo = caractere === "'";

    if (!ehLetra && !ehEspaco && !ehHifen && !ehApostrofo) return false;
  }
  return true;
}

// exigirSobrenome = true no agendamento (campo "Nome completo")
function validarNome(nome, exigirSobrenome) {
  nome = nome.trim();

  if (nome === "") return "Preencha o nome.";
  if (nome.length < 3) return "O nome precisa ter pelo menos 3 letras.";
  if (nome.length > 80) return "O nome está muito longo.";
  if (!soTemLetras(nome)) return "O nome só pode ter letras.";
  if (exigirSobrenome && nome.indexOf(" ") === -1) {
    return "Informe nome e sobrenome.";
  }

  return "";
}

// Sobrenome é opcional: vazio é válido
function validarSobrenome(sobrenome) {
  sobrenome = sobrenome.trim();

  if (sobrenome === "") return "";
  if (sobrenome.length > 80) return "O sobrenome está muito longo.";
  if (!soTemLetras(sobrenome)) return "O sobrenome só pode ter letras.";

  return "";
}

// obrigatorio = false nas páginas de contato (WhatsApp opcional)
function validarWhatsapp(whatsapp, obrigatorio = true) {
  const numeros = apenasNumeros(whatsapp);

  if (numeros === "") return obrigatorio ? "Preencha o WhatsApp." : "";
  if (numeros.length !== 10 && numeros.length !== 11) {
    return "Use o formato (00) 00000-0000.";
  }
  if (numeros[0] === "0" || numeros[1] === "0") return "DDD inválido.";
  if (numeros.length === 11 && numeros[2] !== "9") {
    return "Celular deve começar com 9 depois do DDD.";
  }

  return "";
}

// E-mail é obrigatório
function validarEmail(email) {
  email = email.trim();

  if (email === "") return "Preencha o e-mail.";
  if (email.length > 120) return "E-mail muito longo.";

  const posicaoDoArroba = email.indexOf("@");
  const posicaoDoUltimoPonto = email.lastIndexOf(".");

  const temTextoAntesDoArroba = posicaoDoArroba > 0;
  const temSoUmArroba = email.indexOf("@", posicaoDoArroba + 1) === -1;
  const temPontoDepoisDoArroba = posicaoDoUltimoPonto > posicaoDoArroba + 1;
  const naoTerminaComPonto = posicaoDoUltimoPonto < email.length - 1;
  const naoTemEspaco = email.indexOf(" ") === -1;

  if (
    !temTextoAntesDoArroba ||
    !temSoUmArroba ||
    !temPontoDepoisDoArroba ||
    !naoTerminaComPonto ||
    !naoTemEspaco
  ) {
    return "E-mail inválido. Exemplo: nome@dominio.com";
  }

  return "";
}

// Mensagem + borda vermelha: mensagem no <span data-erro-para="campo">
// e classe "invalido" no campo. Mensagem vazia = campo certo: apaga o erro.
// Devolve true se o campo está certo. "campo" só precisa ser passado
// quando a borda não vai em form.elements[nome] (ex.: grupo de radios).
function mostrarErro(form, nomeDoCampo, mensagem, campo) {
  const spanDeErro = form.querySelector(`[data-erro-para="${nomeDoCampo}"]`);
  campo = campo || form.elements[nomeDoCampo];

  spanDeErro.textContent = mensagem;

  if (mensagem === "") {
    campo.classList.remove("invalido");
    campo.removeAttribute("aria-invalid");
    return true;
  }

  campo.classList.add("invalido");
  campo.setAttribute("aria-invalid", "true");
  return false;
}

// Máscara do WhatsApp: (00) 00000-0000
function aplicarMascaraWhatsapp(campo) {
  on(campo, "input", (evento) => {
    const n = apenasNumeros(evento.target.value).slice(0, 11);

    if (n.length > 10)
      evento.target.value = `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
    else if (n.length > 6)
      evento.target.value = `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`;
    else if (n.length > 2)
      evento.target.value = `(${n.slice(0, 2)}) ${n.slice(2)}`;
    else evento.target.value = n ? `(${n}` : "";
  });
}

/* ==========================================================
   Calendário de agendamento
   Só roda em páginas que têm .calendario, #modal-agendamento
   e #modal-sucesso
   ========================================================== */
function iniciarCalendario() {
  const calendario = document.querySelector(".calendario");
  const modal = document.getElementById("modal-agendamento");
  const modalSucesso = document.getElementById("modal-sucesso");
  if (!calendario || !modal || !modalSucesso) return;

  /* ---- Configuração ---- */
  const EMPRESA = calendario.dataset.empresa || "pkz";
  const CHAVE_STORAGE = `agendamentos:${EMPRESA}`;

  const HORARIOS = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const UM_AGENDAMENTO_POR_DIA = false; // true: reservou um horário, o dia inteiro fica reservado
  const DIAS_BLOQUEADOS = ["2026-10-15"]; // AAAA-MM-DD, aparecem como "Indisponível"
  const DIAS_FECHADOS = [0]; // 0 = domingo ... 6 = sábado

  // Feriados locais ou recessos da empresa: "AAAA-MM-DD": "Nome"
  const FERIADOS_EXTRAS = {};

  const FERIADOS_FIXOS = {
    "01-01": "Confraternização Universal",
    "04-21": "Tiradentes",
    "05-01": "Dia do Trabalho",
    "09-07": "Independência do Brasil",
    "10-12": "Nossa Senhora Aparecida",
    "11-02": "Finados",
    "11-15": "Proclamação da República",
    "11-20": "Consciência Negra",
    "12-25": "Natal",
  };

  const MESES = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const SEMANA = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  /* ---- Elementos ---- */
  const titulo = calendario.querySelector(".calendario__titulo");
  const grade = calendario.querySelector(".calendario__dias");
  const btnAnterior = calendario.querySelector("[data-calendario-anterior]");
  const btnProximo = calendario.querySelector("[data-calendario-proximo]");
  const form = modal.querySelector("form");
  const textoData = modal.querySelector("[data-agendamento-data]");
  const listaHorarios = modal.querySelector(".horarios");
  const erro = modal.querySelector(".form-agendamento__erro");
  const tituloSucesso = modalSucesso.querySelector("[data-sucesso-titulo]");
  const detalheSucesso = modalSucesso.querySelector("[data-sucesso-detalhe]");

  /* ---- Estado ---- */
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const mesInicial = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const mesAtual = new Date(mesInicial);
  let diaSelecionado = null;

  /* ---- Utilitários de data ---- */
  // Não use toISOString(): ele converte para UTC e pode trocar o dia no fuso do Brasil
  const chave = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const dataDe = (texto) => {
    const [ano, mes, dia] = texto.split("-").map(Number);
    return new Date(ano, mes - 1, dia);
  };

  const rotuloData = (d) =>
    `${SEMANA[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;

  /* ---- Feriados (os móveis são calculados a partir da Páscoa) ---- */
  const cacheFeriados = {};

  function feriadosDoAno(ano) {
    if (cacheFeriados[ano]) return cacheFeriados[ano];

    const lista = {};
    for (const [mesDia, nome] of Object.entries(FERIADOS_FIXOS)) {
      lista[`${ano}-${mesDia}`] = nome;
    }

    // Páscoa (algoritmo de Meeus/Jones/Butcher)
    const a = ano % 19;
    const b = Math.floor(ano / 100);
    const c = ano % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mesPascoa = Math.floor((h + l - 7 * m + 114) / 31);
    const diaPascoa = ((h + l - 7 * m + 114) % 31) + 1;

    const movel = (deslocamento, nome) => {
      lista[chave(new Date(ano, mesPascoa - 1, diaPascoa + deslocamento))] =
        nome;
    };

    movel(-48, "Segunda-feira de Carnaval"); // ponto facultativo
    movel(-47, "Terça-feira de Carnaval"); // ponto facultativo
    movel(-2, "Sexta-feira Santa");
    movel(60, "Corpus Christi"); // ponto facultativo

    cacheFeriados[ano] = lista;
    return lista;
  }

  const nomeFeriado = (data) =>
    FERIADOS_EXTRAS[chave(data)] ??
    feriadosDoAno(data.getFullYear())[chave(data)];

  /* ---- Reservas no localStorage ---- */
  function lerReservas() {
    try {
      const lista = JSON.parse(localStorage.getItem(CHAVE_STORAGE));
      return Array.isArray(lista) ? lista : [];
    } catch {
      return [];
    }
  }

  function salvarReservas(lista) {
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
      return true;
    } catch {
      return false; // armazenamento cheio ou bloqueado pelo navegador
    }
  }

  /* ---- Disponibilidade ---- */
  function horarioPassou(dia, hora) {
    const agora = new Date();
    if (dia !== chave(agora)) return false;
    const [h, min] = hora.split(":").map(Number);
    return h * 60 + min <= agora.getHours() * 60 + agora.getMinutes();
  }

  const horariosOcupados = (dia, reservas) =>
    reservas.filter((r) => r.data === dia).map((r) => r.horario);

  // Retorna null se o dia está livre, ou { tipo, texto } com o motivo do bloqueio
  function motivoBloqueio(data, reservas) {
    const dia = chave(data);

    if (data < hoje) return { tipo: "passado" };

    const feriado = nomeFeriado(data);
    if (feriado) return { tipo: "feriado", texto: `Feriado: ${feriado}` };

    if (
      DIAS_BLOQUEADOS.includes(dia) ||
      DIAS_FECHADOS.includes(data.getDay())
    ) {
      return { tipo: "indisponivel", texto: "Indisponível" };
    }

    const ocupados = horariosOcupados(dia, reservas);
    const livres = HORARIOS.filter(
      (h) => !ocupados.includes(h) && !horarioPassou(dia, h),
    );

    if (ocupados.length && (UM_AGENDAMENTO_POR_DIA || !livres.length)) {
      return { tipo: "reservado", texto: "Reservado" };
    }
    if (!livres.length)
      return { tipo: "indisponivel", texto: "Sem horários disponíveis" };

    return null;
  }

  /* ---- Calendário ---- */
  function marcarSelecao() {
    grade.querySelectorAll(".calendario__dia").forEach((botao) => {
      botao.setAttribute("aria-pressed", botao.dataset.data === diaSelecionado);
    });
  }

  function desenharMes() {
    const ano = mesAtual.getFullYear();
    const mes = mesAtual.getMonth();
    const reservas = lerReservas(); // lê uma vez por renderização

    titulo.textContent = `${MESES[mes][0].toUpperCase()}${MESES[mes].slice(1)} ${ano}`;
    btnAnterior.disabled = mesAtual <= mesInicial;
    grade.innerHTML = "";

    for (let i = 0; i < new Date(ano, mes, 1).getDay(); i++) {
      grade.append(document.createElement("span"));
    }

    const totalDias = new Date(ano, mes + 1, 0).getDate();

    for (let dia = 1; dia <= totalDias; dia++) {
      const data = new Date(ano, mes, dia);
      const bloqueio = motivoBloqueio(data, reservas);
      const rotulo = rotuloData(data);
      const botao = document.createElement("button");

      botao.type = "button";
      botao.className = "calendario__dia";
      botao.textContent = dia;
      botao.dataset.data = chave(data);
      botao.dataset.rotulo = rotulo;
      botao.disabled = Boolean(bloqueio);
      botao.setAttribute(
        "aria-label",
        bloqueio?.texto ? `${rotulo}. ${bloqueio.texto}` : rotulo,
      );

      if (bloqueio) {
        botao.dataset.motivo = bloqueio.tipo;
        if (bloqueio.texto) botao.title = bloqueio.texto;
      }

      if (data.getTime() === hoje.getTime())
        botao.setAttribute("aria-current", "date");

      grade.append(botao);
    }

    marcarSelecao();
  }

  on(btnAnterior, "click", () => {
    mesAtual.setMonth(mesAtual.getMonth() - 1);
    desenharMes();
  });

  on(btnProximo, "click", () => {
    mesAtual.setMonth(mesAtual.getMonth() + 1);
    desenharMes();
  });

  /* ---- Horários do modal (reservados e passados ficam desabilitados) ---- */
  function desenharHorarios(dia) {
    const ocupados = horariosOcupados(dia, lerReservas());
    listaHorarios.innerHTML = "";

    HORARIOS.forEach((hora) => {
      const reservado = ocupados.includes(hora);
      const label = document.createElement("label");
      const input = document.createElement("input");
      const texto = document.createElement("span");

      label.className = "horario";
      input.type = "radio";
      input.name = "horario";
      input.value = hora;
      input.disabled = reservado || horarioPassou(dia, hora);
      texto.textContent = hora;
      if (reservado) label.title = "Horário reservado";

      label.append(input, texto);
      listaHorarios.append(label);
    });
  }

  /* ---- Clique em um dia: seleciona e abre o modal ---- */
  on(grade, "click", (evento) => {
    const botao = evento.target.closest(".calendario__dia");
    if (!botao) return;

    diaSelecionado = botao.dataset.data;
    marcarSelecao();
    limparErros();

    form.elements.data.value = diaSelecionado;
    textoData.dateTime = diaSelecionado;
    textoData.textContent = botao.dataset.rotulo;
    desenharHorarios(diaSelecionado);
    modal.showModal();
  });

  /* ==========================================================
    VALIDAÇÃO DO FORMULÁRIO (feita só em JS, sem regex e sem
    atributos de validação do HTML: o <form> tem "novalidate")
     ========================================================== */

  function validarHorario(horario) {
    if (horario === "") return "Selecione um horário.";
    if (!HORARIOS.includes(horario)) return "Horário inválido.";
    return "";
  }

  function validarObservacoes(texto) {
    if (texto.length > 300) return "Máximo de 300 caracteres.";
    return "";
  }

  // A data vem de um input hidden: confere se não foi alterada no DevTools
  function dataEstaValida() {
    const texto = form.elements.data.value;
    const partes = texto.split("-");

    if (partes.length !== 3) return false;
    if (
      partes[0].length !== 4 ||
      partes[1].length !== 2 ||
      partes[2].length !== 2
    ) {
      return false;
    }
    if (apenasNumeros(texto).length !== 8) return false;

    const data = dataDe(texto);
    if (isNaN(data.getTime())) return false;

    return !motivoBloqueio(data, lerReservas());
  }

  const VALIDADORES = {
    horario: validarHorario,
    nome: (valor) => validarNome(valor, true),
    whatsapp: validarWhatsapp,
    email: validarEmail,
    observacoes: validarObservacoes,
  };

  // os radios não são um input só: a borda do horário vai no grupo
  const mostrarErroDoForm = (nomeDoCampo, mensagem) =>
    mostrarErro(
      form,
      nomeDoCampo,
      mensagem,
      nomeDoCampo === "horario" ? listaHorarios : undefined,
    );

  function validarCampo(nomeDoCampo) {
    // para radio, .value é o valor do marcado ou ""
    const valor = form.elements[nomeDoCampo].value;
    return mostrarErroDoForm(nomeDoCampo, VALIDADORES[nomeDoCampo](valor));
  }

  function validarFormulario() {
    erro.textContent = "";

    // sem curto-circuito: valida todos para mostrar todos os erros de uma vez
    let tudoCerto = true;
    let primeiroComErro = null;

    for (const nomeDoCampo in VALIDADORES) {
      if (!validarCampo(nomeDoCampo)) {
        tudoCerto = false;
        if (primeiroComErro === null) primeiroComErro = nomeDoCampo;
      }
    }

    if (!dataEstaValida()) {
      erro.textContent = "Data indisponível. Feche e escolha outro dia.";
      return false;
    }

    if (primeiroComErro === "horario") {
      listaHorarios.querySelector("input:not(:disabled)")?.focus();
    } else if (primeiroComErro) {
      form.elements[primeiroComErro].focus();
    }

    return tudoCerto;
  }

  function limparErros() {
    for (const nomeDoCampo in VALIDADORES) mostrarErroDoForm(nomeDoCampo, "");
    erro.textContent = "";
  }

  // Valida ao sair do campo; depois do primeiro erro, revalida a cada tecla
  ["nome", "whatsapp", "email", "observacoes"].forEach((nomeDoCampo) => {
    const campo = form.elements[nomeDoCampo];

    on(campo, "blur", () => validarCampo(nomeDoCampo));
    on(campo, "input", () => {
      if (campo.classList.contains("invalido")) validarCampo(nomeDoCampo);
    });
  });

  // Os radios são recriados a cada abertura do modal: delegação no container
  on(listaHorarios, "change", () => validarCampo("horario"));

  aplicarMascaraWhatsapp(form.elements.whatsapp);

  /* ---- Envio ---- */
  async function enviarAgendamento(reserva) {
    // TODO: trocar pelo envio real (fetch para o back-end, webhook do n8n...)
    console.log("Agendamento:", reserva);
  }

  on(form, "submit", async (evento) => {
    evento.preventDefault();

    if (!validarFormulario()) return;

    const dados = Object.fromEntries(new FormData(form));
    dados.nome = dados.nome.trim();
    dados.email = dados.email.trim();
    dados.observacoes = dados.observacoes.trim();
    const reservas = lerReservas(); // lê de novo: outra aba pode ter reservado antes

    const conflito = reservas.some(
      (r) =>
        r.data === dados.data &&
        (UM_AGENDAMENTO_POR_DIA || r.horario === dados.horario),
    );

    if (conflito) {
      erro.textContent = "Esse horário acabou de ser reservado. Escolha outro.";
      desenharHorarios(dados.data);
      desenharMes();
      return;
    }

    const reserva = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ...dados,
      criadoEm: new Date().toISOString(),
    };

    if (!salvarReservas([...reservas, reserva])) {
      erro.textContent =
        "Não foi possível salvar o agendamento. Tente novamente.";
      return;
    }

    await enviarAgendamento(reserva);

    const rotulo = textoData.textContent;

    modal.close();
    diaSelecionado = null;
    desenharMes();

    // Popup de sucesso
    tituloSucesso.textContent = `Parabéns ${reserva.nome}, visita agendada com sucesso`;
    detalheSucesso.textContent = `${rotulo}, às ${reserva.horario}. Entraremos em contato para confirmar.`;
    modalSucesso.showModal();
  });

  on(modal, "close", () => {
    form.reset();
    limparErros();
  });

  // Se o agendamento for feito em outra aba, atualiza esta
  on(window, "storage", (evento) => {
    if (evento.key !== CHAVE_STORAGE) return;
    desenharMes();
  });

  desenharMes();
}



/* ==========================================================
  Formulário de contato (contato-pkz.html e contato-one-to-one.html)
   ========================================================== */
function iniciarContato() {
  const form = document.querySelector("[data-form-contato]");
  if (!form) return;

  const erro = form.querySelector(".form-agendamento__erro");
  const sucesso = form.querySelector(".form-agendamento__sucesso");

  function validarMensagem(mensagem) {
    mensagem = mensagem.trim();

    if (mensagem === "") return "Escreva sua mensagem.";
    if (mensagem.length < 10) {
      return "A mensagem precisa ter pelo menos 10 caracteres.";
    }
    if (mensagem.length > 1000) return "Máximo de 1000 caracteres.";
    return "";
  }

  const VALIDADORES = {
    nome: (valor) => validarNome(valor, false),
    sobrenome: validarSobrenome,
    email: validarEmail,
    whatsapp: (valor) => validarWhatsapp(valor, false),
    mensagem: validarMensagem,
  };

  function validarCampo(nomeDoCampo) {
    const valor = form.elements[nomeDoCampo].value;
    return mostrarErro(form, nomeDoCampo, VALIDADORES[nomeDoCampo](valor));
  }

  function validarFormulario() {
    erro.textContent = "";

    // sem curto-circuito: valida todos para mostrar todos os erros de uma vez
    let tudoCerto = true;
    let primeiroComErro = null;

    for (const nomeDoCampo in VALIDADORES) {
      if (!validarCampo(nomeDoCampo)) {
        tudoCerto = false;
        if (primeiroComErro === null) primeiroComErro = nomeDoCampo;
      }
    }

    if (primeiroComErro) form.elements[primeiroComErro].focus();
    return tudoCerto;
  }

  function limparErros() {
    for (const nomeDoCampo in VALIDADORES) mostrarErro(form, nomeDoCampo, "");
    erro.textContent = "";
  }

  async function enviarContato(dados) {
    // TODO: trocar pelo envio real (fetch para o back-end, webhook do n8n...)
    console.log("Contato:", dados);
  }

  // Valida ao sair do campo; depois do primeiro erro, revalida a cada tecla
  for (const nomeDoCampo in VALIDADORES) {
    const campo = form.elements[nomeDoCampo];

    on(campo, "blur", () => validarCampo(nomeDoCampo));
    on(campo, "input", () => {
      sucesso.textContent = "";
      if (campo.classList.contains("invalido")) validarCampo(nomeDoCampo);
    });
  }

  aplicarMascaraWhatsapp(form.elements.whatsapp);

  on(form, "submit", async (evento) => {
    evento.preventDefault();
    sucesso.textContent = "";

    if (!validarFormulario()) return;

    const dados = Object.fromEntries(new FormData(form));
    for (const nomeDoCampo in dados)
      dados[nomeDoCampo] = dados[nomeDoCampo].trim();

    try {
      await enviarContato(dados);
    } catch {
      erro.textContent = "Não foi possível enviar a mensagem. Tente novamente.";
      return;
    }

    form.reset();
    limparErros();
    sucesso.textContent =
      "Mensagem enviada com sucesso! Responderemos o mais rápido possível.";
  });
}



/** Registra os recursos DOM do legado na página atualmente montada. */
export function iniciarInteracoes() {
  const abort = new AbortController();
  activeSignal = abort.signal;
  let iniciouNoFundo = false;
  const pressionar = (event) => { iniciouNoFundo = event.target instanceof HTMLDialogElement; };
  const clicar = (event) => {
    const abrir = event.target.closest("[data-modal-abrir]");
    if (abrir) { document.getElementById(abrir.dataset.modalAbrir)?.showModal(); return; }
    const fechar = event.target.closest("[data-modal-fechar]");
    if (fechar) { fechar.closest("dialog")?.close(); return; }
    if (iniciouNoFundo && event.target instanceof HTMLDialogElement && event.target.classList.contains("modal")) event.target.close();
  };
  document.addEventListener("pointerdown", pressionar, {signal: abort.signal});
  document.addEventListener("click", clicar, {signal: abort.signal});

  iniciarCalendario();
  iniciarContato();

  return () => {
    abort.abort();
  };
}
