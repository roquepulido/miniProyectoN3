import React from "react";
import Notes from "../components/Notes/Notes";

function Notas() {
  return (
    <div className="container container__body my-5 p-5">
      <h1 className="text-center display-1">
        <i className="bi bi-stickies me-2"></i>Notas
      </h1>
      <div className="notas__container">
        <Notes />
      </div>
    </div>
  );
}

export default Notas;
