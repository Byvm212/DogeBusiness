import logo from './logo.svg';
import './App.css';
import perrito from './assets/logo.png';
import instagram from './assets/instagram.png';
import QuienesSomos from './components/quienessomos/QuienesSomos';
import Navegacion from './components/navegacion/Navegacion';

function App() {
  return (
    <div className="App">
      <header id="App-header">
        <img id="perrito" src={perrito} alt="perrito" width = "100px" height ="100px"/>
        <h1 id="App-title">DogeBusiness</h1>
        <img id="instagram" src={instagram} width = "100px" height ="100px"/>
      </header>

      <aside>
        <Navegacion></Navegacion>
      </aside>
      
    </div>
  );
}

export default App;
