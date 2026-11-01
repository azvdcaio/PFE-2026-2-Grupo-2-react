import { Routes, Route } from "react-router-dom";
import Hub from "./pages/Hub";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
    </Routes>
  );
}
