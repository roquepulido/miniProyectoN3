import { useState } from "react";

function Task({ id, handleDeleteTask, textTask }) {
  const [texto, setTexto] = useState(textTask);
  const [checkbox, setCheckbox] = useState(false)

  const handleText = (e) => setTexto(e.target.value);
  const handleCheckbox = (e) => setCheckbox(e.target.checked);

  return (
    <div className="row aling-item-baseline">
      
      <div className="input-group mb-3">
      <div className="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            onChange={handleCheckbox}
          />
        </div>
        
        <input
          type="text"
          className={checkbox ? "form-control text-decoration-line-through":"form-control"}
          placeholder="Ingresa tu tarea"
          value={texto}
          onChange={handleText}
        />
        <button
          onClick={() => handleDeleteTask(id)}
          className="btn btn-danger input-group-text text-white fw-bold"
        >
          X
        </button>
        
      </div>
    </div>
  );
}

export default Task;
