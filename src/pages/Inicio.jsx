import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="container container__body my-5 p-5">
      <h1 className="text-center">My APP</h1>

      <p className="text-center">
        Aplicacion con la libreria <b>REACT</b> cuenta con las siguientes
        opciones
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/calculadora">Calculadora</Link>
        </li>
        <li className="list-group-item">
          <Link to="/notas">Notas</Link>
        </li>
        <li className="list-group-item">
          <Link to="/tareas">Tareas</Link>
        </li>
        <li className="list-group-item">
          <Link to="/calendario">Calendario</Link>
        </li>
      </ul>
    </div>
  );
}

export default Inicio;
