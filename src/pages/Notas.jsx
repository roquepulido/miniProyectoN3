import React from "react";
import Notes from "../components/Notes/Notes";

function Notas() {
  return (
    <div>
      <h1 className="text-center my-5 display-1">
        <i className="bi bi-stickies me-2"></i>Notas
      </h1>
      <div className="notas__container">
        <Notes />
      </div>
    </div>
  );
}

export default Notas;
