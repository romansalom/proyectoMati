import './App.css';
import EmailPrueba from './Components/Email/emailPrueba.jsx';
import PirceddPrice from './Components/PlanesIndividuales/TrajetaIndividual/cardPrecio.jsx';
import { Heroe } from './Components/hero.jsx';

import { Servicios } from './Components/servicios.jsx';

import { Navbar } from './Components/navBar.jsx';

function App() {
  return (
    <div className="paginaCompleta ">
      <div className="relative z-10">
        {' '}
        <Navbar></Navbar>
      </div>

      <Heroe></Heroe>
      <Servicios></Servicios>
      <PirceddPrice></PirceddPrice>

      <EmailPrueba></EmailPrueba>
    </div>
  );
}

export default App;
