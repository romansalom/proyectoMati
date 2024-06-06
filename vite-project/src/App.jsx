import './App.css';
import EmailPrueba from './Components/Email/emailPrueba.jsx';
import Marcas from './Components/MacrasBanner/bannerMarcas.jsx';
import { PrincingPriceDetail } from './Components/PlanesIndividuales/pircingPreciosDetail.jsx';
import { Heroe } from './Components/hero.jsx';
import { Navbar } from './Components/navBar.jsx';

import { Servicios } from './Components/servicios.jsx';
import { Tabsventana } from './Components/tabs.jsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Heroe></Heroe>

      <Servicios></Servicios>
      <Tabsventana></Tabsventana>

      <Marcas></Marcas>
      <PrincingPriceDetail></PrincingPriceDetail>
      <EmailPrueba></EmailPrueba>
    </div>
  );
}

export default App;
