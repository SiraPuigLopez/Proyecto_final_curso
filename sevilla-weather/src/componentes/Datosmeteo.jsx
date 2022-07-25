import React from "react";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import "../estilos/Datosmeteo.css";

const Datosmeteo = (props) => {
  console.log(props);

  return (
    <div>
      <ul>
        <li>Humedad {props.ciudad.main.humidity}</li>
        <li>Viento {props.ciudad.wind.speed}</li>
        <li>Temperatura {props.ciudad.main.temp}</li>
        <li>
          <WiDaySunny className="simbolo"></WiDaySunny>
          <img src="" alt=""></img>
        </li>
        <li>Max {props.ciudad.main.temp_max}</li>
        <li>Min {props.ciudad.main.temp_min}</li>
      </ul>
    </div>
  );
};
export default Datosmeteo;
