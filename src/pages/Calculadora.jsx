import React from "react";
import Calc from "../components/Calc";


function Calculadora() {
  return (
    <div>
      <h1 className="my-4 text-center">
        <i className="bi bi-calculator me-2"></i>View Calculadora
      </h1>
      <Calc />      
    </div>
  );
}

export default Calculadora;
