import logo from "./logo.svg";
import "./App.css";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import Header from "./componentes/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="datos-meteo">
        <ul>
          <li>Humedad</li>
          <li>Viento</li>
          <li>Temperatura</li>
          <li>
            <WiDaySunny className="simbolo"></WiDaySunny>
          </li>
          <li>Max</li>
          <li>Min</li>
        </ul>
        <div className="texto-temperatura">
          <p>Vestimenta que debes usar según un condicional</p>
        </div>
        <div className="texto-opciones">
          <p>No vayas o si según otro condicional</p>
        </div>
        <div className="historico-nacimiento">
          <p>indicar año de nacimiento y capturar datos meteo</p>
        </div>
      </div>
    </div>
  );
}

export default App;
