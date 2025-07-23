import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Comercializadores from './pages/comercializadores/Comercializadores'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Comercializadores" element={<Comercializadores />} />
      </Routes>
    </BrowserRouter>
  );
}
