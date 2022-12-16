import React from "react";
import Tasks from "../components/Tareas/Tasks";
function Tareas() {
  return (
    <div>
      <h1 className="text-center my-5 display-1">
        <i className="bi bi-card-checklist me-2"></i>Lista de tareas
      </h1>
     <Tasks />
    </div>
  );
}

export default Tareas;