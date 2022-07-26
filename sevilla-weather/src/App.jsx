import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Datosmeteo from "./componentes/Datosmeteo";
import Consejo from "./componentes/Consejo";

const weatherFetch = async () => {
  //defino la funcion
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Sevilla&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const ciudad = await response.json();

    return ciudad;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [ciudad, setCiudad] = useState(null);

  const fetchCiudad = async () => {
    try {
      const data = await weatherFetch();
      setCiudad(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCiudad();
  }, []);
  console.log(ciudad);

  return (
    <div className="App">
      <Header></Header>
      <div className="datos-meteo">
        {ciudad !== null ? (
          <Datosmeteo ciudad={ciudad}></Datosmeteo>
        ) : (
          <>
            <p>Cargando...</p>
          </>
        )}
        <div className="texto-temperatura">
          {ciudad !== null ? (
            <Consejo ciudad={ciudad}></Consejo>
          ) : (
            <>
              <p>Cargando...</p>
            </>
          )}
        </div>
        {/* <div className="texto-opciones">
          <p>No vayas o si según otro condicional</p>
        </div>
        <div className="historico-nacimiento">
          <p>indicar año de nacimiento y capturar datos meteo</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
