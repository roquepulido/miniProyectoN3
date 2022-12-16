import { useState } from "react";

function Note({ id, handleDeleteNote, textNote }) {
  const [texto, setTexto] = useState(textNote);

  const handleText = (e) => setTexto(e.target.value);
  
  return (
    <div className="row aling-item-baseline">
      <div className="input-group mb-3">
        <button
          onClick={() => handleDeleteNote(id)}
          className="btn btn-danger input-group-text text-white fw-bold"
        >
          X
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa tu tarea"
          value={texto}
          onChange={handleText}
        />
      </div>
    </div>
  );
}

export default Note;