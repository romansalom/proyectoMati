import './App.css';
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
    </div>
  );
}

export default App;
