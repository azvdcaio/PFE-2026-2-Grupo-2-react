import { Routes, Route } from "react-router-dom";
import Hub from "./pages/Hub";
import Pkz from "./pages/Pkz";
import Onetoone from "./pages/Onetoone";
import Fisioterapia from "./pages/Fisioterapia";
import ContatoOnetoone from "./pages/ContatoOnetoone";
import ContatoPKz from "./pages/ContatoPkz";
import AgendamentoOnetoone from "./pages/AgendamentoOnetoone";
import AgendamentoPkz from "./pages/AgendamentoPkz";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/pkz-lab" element={<Pkz />} />
      <Route path="/one-to-one" element={<Onetoone />} />
      <Route path="/fisioterapia" element={<Fisioterapia />} />
      <Route path="/one-to-one/contato" element={<ContatoOnetoone />} />
      <Route path="/pkz-lab/contato" element={<ContatoPKz />} />
      <Route path="/one-to-one/agendamento" element={<AgendamentoOnetoone />} />
      <Route path="/pkz-lab/agendamento" element={<AgendamentoPkz />} />
    </Routes>
  );
}
