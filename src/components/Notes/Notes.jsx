import { useState } from "react";
import Note from "./Note";
import "../../css/notas.css"

function Notes() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    
    setNotes([...notes, note]);
    
  };
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };

  return (
    <div className="App container w-50 d-flex flex-column">
      <h1>Tus Notas</h1>
      <div className="d-flex gap-4 flex-wrap my-4">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            handleDeleteNote={handleDeleteNote}
            textNote={note.textNote}
          />
        ))}
      </div>
      
      <button
        onClick={() => {
          handleAddNote({
            id:Math.floor(Math.random()*100000),
            textNote: "",
          });
          document.getElementById("text").value = "";
        }}
        className="mt-2 btn btn-primary"
      >
        Agregar Nota
      </button>
    </div>
  );
}

export default Notes;