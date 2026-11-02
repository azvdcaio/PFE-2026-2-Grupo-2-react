import { Routes, Route } from "react-router-dom";
import Hub from "./pages/Hub";
import Pkz from "./pages/Pkz";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/pkz" element={<Pkz />} />
    </Routes>
  );
}
