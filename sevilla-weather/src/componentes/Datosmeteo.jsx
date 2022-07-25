import React from "react";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import "../estilos/Datosmeteo.css";

const Datosmeteo = (props) => {
  //const { name, main, wind } = props;
  console.log(props);
  return (
    <div>
      <ul>
        <li>Humedad {props.ciudad.main.humidity}</li>
        <li>Viento {props.ciudad.wind.speed}</li>
        <li>Temperatura {props.ciudad.main.temp}</li>
        <li>
          <WiDaySunny className="simbolo"></WiDaySunny>
        </li>
        <li>Max</li>
        <li>Min</li>
      </ul>
    </div>
  );
};
export default Datosmeteo;
