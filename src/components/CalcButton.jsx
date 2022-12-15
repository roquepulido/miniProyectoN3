import React from "react";

function CalcButton(props) {
  return (
    <>
    <div className="col d-flex justify-content-center">
        <button className="button__number btn btn-secondary" onClick={props.handleOperacion} value={props.value}>
            {props.value}
            </button>
    </div>
    </>
  )
}

export default CalcButton;
