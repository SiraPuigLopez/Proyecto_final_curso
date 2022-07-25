import React from "react";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";

const Datosmeteo = (props) => {
  //const { name, main, wind } = props;
  console.log(props);
  return (
    <div>
      <ul>
        <li>Humedad{props.children.main.humidity}</li>
        <li>Viento</li>
        <li>Temperatura</li>
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
