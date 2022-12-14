import React, { useState } from "react";
import {Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  const [value, setValue] = useState(new Date())
  return (
    <div>
      <h1 className="text-center my-5 display-1">Calendario</h1>      
      <Calendar onChange={setValue} value={value} />
      <h3 className="text-center mt-5">Fecha seleccionada : {value.toLocaleDateString("es-mx")}</h3>
    </div>
  );
}

export default Calendario;
