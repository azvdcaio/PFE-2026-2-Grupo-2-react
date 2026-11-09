import { Routes, Route } from "react-router-dom";
import Hub from "./pages/Hub";
import Pkz from "./pages/Pkz";
import Onetoone from "./pages/Onetoone";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/pkz-lab" element={<Pkz />} />
      <Route path="/one-to-one" element={<Onetoone />} />
    </Routes>
  );
}