import React,{useState} from "react";
import ButtonMatrix from "./ButtonMatrix";
import Display from "./Display";


function Calc() {

  const [operacion, setOperacion] = useState("")

  const handleOperacion = (e)=>{setOperacion(operacion+e.target.value)};
  
  return (
    <div className="calculadora">
      <Display text={operacion}/>

      <ButtonMatrix handleOperacion={handleOperacion}/>
    </div>
  );
}

export default Calc;
