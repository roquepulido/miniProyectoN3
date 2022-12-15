import React from "react";
import CalcButton from "./CalcButton";

function ButtonMatrix({handleOperacion}) {
  return (
    <>
      <div className="button__matrix container">
        <div className="row row-cols-4 g-1">
          <CalcButton handleOperacion={handleOperacion} value="7" />
          <CalcButton handleOperacion={handleOperacion} value="8" />
          <CalcButton handleOperacion={handleOperacion} value="9" />
          <CalcButton handleOperacion={handleOperacion} value="/" />        
          <CalcButton handleOperacion={handleOperacion} value="4" />
          <CalcButton handleOperacion={handleOperacion} value="5" />
          <CalcButton handleOperacion={handleOperacion} value="6" />
          <CalcButton handleOperacion={handleOperacion} value="X" />
          <CalcButton handleOperacion={handleOperacion} value="1" />
          <CalcButton handleOperacion={handleOperacion} value="2" />
          <CalcButton handleOperacion={handleOperacion} value="3" />
          <CalcButton handleOperacion={handleOperacion} value="-" />
          <CalcButton handleOperacion={handleOperacion} value="0" />
          <CalcButton handleOperacion={handleOperacion} value="." />
          <CalcButton handleOperacion={handleOperacion} value="=" />
          <CalcButton handleOperacion={handleOperacion} value="+" />
        </div>
      </div>
    </>
  );
}

export default ButtonMatrix;
