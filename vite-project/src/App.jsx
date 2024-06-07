import './App.css';
import EmailPrueba from './Components/Email/emailPrueba.jsx';
import { PrincingPriceDetail } from './Components/PlanesIndividuales/pircingPreciosDetail.jsx';
import PirceddPrice from './Components/PlanesIndividuales/TrajetaIndividual/cardPrecio.jsx';
import { Heroe } from './Components/hero.jsx';

import { Servicios } from './Components/servicios.jsx';
import PirceddPrice2 from './Components/PlanesIndividuales/Planes2/TrajetaIndividual/cardPrecio.jsx';
import PirceddPrice3 from './Components/PlanesIndividuales/Planes3/TrajetaIndividual/cardPrecio.jsx';

function App() {
  return (
    <div className="paginaCompleta ">
      <Heroe></Heroe>
      <Servicios></Servicios>
      <PirceddPrice></PirceddPrice>
      <PirceddPrice2></PirceddPrice2>
      <PirceddPrice3></PirceddPrice3>
      <PrincingPriceDetail></PrincingPriceDetail>
      <EmailPrueba></EmailPrueba>
    </div>
  );
}

export default App;
