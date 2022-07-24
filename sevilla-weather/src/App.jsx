import React, { useEffect, useState } from "react";
import "./App.css";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import Header from "./componentes/Header";

const weatherFetch = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Sevilla&appid=c1628b9d48c15cf4fb0b05878949ae61`
    );
    const ciudad = await response.json();
    console.log(ciudad);
    return ciudad;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [ciudad, setCiudad] = useState([]);

  const fetchCiudad = async () => {
    try {
      const data = await weatherFetch();
      setCiudad(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCiudad();
  }, []);

  const { name, main, wind } = ciudad;

  return (
    <div className="App">
      <Header></Header>
      <div className="datos-meteo">
        <ul>
          <li>Humedad {main.humidity}</li>
          <li>Viento {wind.speed}</li>
          <li>Temperatura {main.temp}</li>
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
