import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';

//Rutas del navbar entre  <Routes></Routes> (no las tenemos por ahora), puse texto mientras tanto.
//Pueden salir advertencias al inspeccionar (ignorarlas), es porque aun no tenemos las rutas. 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={'Inicio'} />
        <Route path="/galeria" element={'Galeria'} />
        <Route path="nosotros" element={'Nosotros'} />
        <Route path="como-comprar" element={'Como Comprar'} />
      </Routes>
    </Router>
  );
}

export default App;
