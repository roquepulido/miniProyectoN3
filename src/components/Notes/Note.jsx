import { useState } from "react";

function Note({ id, handleDeleteNote, textNote }) {
  const [texto, setTexto] = useState(textNote);

  const handleText = (e) => setTexto(e.target.value);

  return (
    <div className="nota__container">
      <button
        onClick={() => handleDeleteNote(id)}
        
      >
        X
      </button>
      <textarea
        placeholder="Ingresa tu nota"
        value={texto}
        onChange={handleText}
      />
    </div>
  );
}

export default Note;
