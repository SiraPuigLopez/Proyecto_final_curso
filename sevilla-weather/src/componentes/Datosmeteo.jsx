import React from "react";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import "../estilos/Datosmeteo.css";

const Datosmeteo = (props) => {
  return (
    <div>
      <ul>
        <li>Humedad {props.ciudad.main.humidity}</li>
        <li>Viento {props.ciudad.wind.speed}</li>
        <li>Temperatura {props.ciudad.main.temp}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${props.ciudad.weather[0].icon}@2x.png`}
            alt="icono"
          />
        </li>
        <li>Max {props.ciudad.main.temp_max}</li>
        <li>Min {props.ciudad.main.temp_min}</li>
      </ul>
    </div>
  );
};
export default Datosmeteo;
