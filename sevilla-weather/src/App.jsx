import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Datosmeteo from "./componentes/Datosmeteo";

const weatherFetch = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Sevilla&appid=c1628b9d48c15cf4fb0b05878949ae61`
    );
    const ciudad = await response.json();

    return ciudad;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [ciudad, setCiudad] = useState(null);
  //Andrea me salvo la vida con este null
  const fetchCiudad = async () => {
    try {
      const data = await weatherFetch();
      setCiudad(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCiudad();
  }, []);

  //const { name, main, wind } = ciudadActual;
  console.log(ciudad);

  return (
    <div className="App">
      <Header></Header>
      <div className="datos-meteo">
        <Datosmeteo>{ciudad}</Datosmeteo>
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
