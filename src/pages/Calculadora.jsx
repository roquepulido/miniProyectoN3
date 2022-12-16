import React from "react";
import Calc from "../components/Calculadora/Calc";


function Calculadora() {
  return (
    <div className="container container__body my-5 p-5">
      <h1 className="text-center  display-1">
        <i className="bi bi-calculator me-2"></i>Calculadora
      </h1>
      <Calc />      
    </div>
  );
}

export default Calculadora;
