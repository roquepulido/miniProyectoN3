import React from "react";
import Tasks from "../components/Tareas/Tasks";
function Tareas() {
  return (
    <div className="container container__body my-5 p-5">
      <h1 className="text-center display-1">
        <i className="bi bi-card-checklist me-2"></i>Lista de tareas
      </h1>
     <Tasks />
    </div>
  );
}

export default Tareas;