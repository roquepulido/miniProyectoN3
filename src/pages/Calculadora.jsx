import React from "react";
import Calc from "../components/Calculadora/Calc";


function Calculadora() {
  return (
    <div>
      <h1 className="text-center my-5 display-1">
        <i className="bi bi-calculator me-2"></i>Calculadora
      </h1>
      <Calc />      
    </div>
  );
}

export default Calculadora;
