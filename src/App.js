import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar-components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import HowToBuy from './components/HowToBuy';
import Gallery from "./components/Gallery";
import Contact from './components/Contact';
import History from "./components/History";
//Rutas del navbar  y footer entre  <Routes></Routes> (no las tenemos por ahora), puse texto mientras tanto.
//Pueden salir advertencias al inspeccionar (ignorarlas), es porque aun no tenemos las rutas. 
//TENER EN CUENTA: puede quedar espacio en blanco debajo del footer (ignorar ese espacio en blaco, ya quedara bien cuando esten los componentes del medio)
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/galeria" element={<Gallery/>} />
        <Route path="/nosotros" element={<History/>} />
        <Route path="/como-comprar" element={<HowToBuy/>} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
