import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Comercializadores from './pages/comercializadores/Comercializadores'
import ParaEmpresas from './pages/ParaEmprresas/ParaEmpresas'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Comercializadores" element={<Comercializadores />} />
        <Route path="/ParaEmpresas" element={<ParaEmpresas />} />
      </Routes>
    </BrowserRouter>
  );
}
