import './App.css';
import { Heroe } from './Components/hero.jsx';
import { Navbar } from './Components/navBar.jsx';
import { PrincingPriceCrds } from './Components/pircingPrecioCards.jsx';
import { PrincingPriceDetail } from './Components/pircingPreciosDetail.jsx';
import { Servicios } from './Components/servicios.jsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Heroe></Heroe>

      <Servicios></Servicios>
      <PrincingPriceCrds></PrincingPriceCrds>
      <div className="mb-10">
        {' '}
        <PrincingPriceDetail></PrincingPriceDetail>
      </div>
      <hr className="mt-10" />
    </div>
  );
}

export default App;
