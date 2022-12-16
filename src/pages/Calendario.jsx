import React, { useState } from "react";
import {Calendar} from "react-calendar";
import "../css/calendario.css"
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  const [value, setValue] = useState(new Date())
  return (
    <div className="container container__body my-5 p-5">
      <h1 className="text-center display-1"><i className="bi bi-calendar-event me-3"></i>Calendario</h1>      
      <Calendar onChange={setValue} value={value} />
      <h3 className="text-center mt-5">Fecha seleccionada : {value.toLocaleDateString("es-mx")}</h3>
    </div>
  );
}

export default Calendario;
