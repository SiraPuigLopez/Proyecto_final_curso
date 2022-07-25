import React from "react";
import "../estilos/Consejo.css";

const Consejo = (props) => {
  let temp = 20;
  //props.ciudad.main.temp;
  let consejo;

  if (temp >= 40 && temp < 43) {
    consejo = "no salgas a la calle ahora";
  } else if (temp >= 43) {
    consejo = "mas calor que en el cumpleaños de charmander";
  } else if (temp >= 20 && temp < 40) {
    consejo = "temperatura ideal....¿Te fuiste de Sevilla?";
  } else if (temp < 20 && temp >= 15) {
    consejo = "ponte una rebequita";
  } else {
    consejo = "mas frio que en la comunion de pingu";
  }
  //-0 mas frio que en la comunion de pingu
  //20 ponte una rebequita
  //+40 no salgas a la calle ahora
  //+43 mas calor que en el cumpleaños de charmander

  return <p className="consejo">{consejo}</p>;
};
export default Consejo;
