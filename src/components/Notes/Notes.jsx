import { useState } from "react";
import Note from "./Note";

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
      <h1>Lista de Tareas</h1>
      <div className=" mt-2 d-flex flex-column gap-2">
        {notes.map((note,index) => (
          <Note
            key={note.id}
            id={note.id}
            handleDeleteNote={handleDeleteNote}
            textNote={note.textNote}
          />
        ))}
      </div>
      <input
        className="form-controler"
        type="text"
        name="text"
        id="text"
        autoComplete="off"
      />
      <button
        onClick={() => {
          handleAddNote({
            id:Math.floor(Math.random()*100000),
            textNote: document.getElementById("text").value,
          });
          document.getElementById("text").value = "";
        }}
        className="mt-2 btn btn-primary"
      >
        add Note
      </button>
    </div>
  );
}

export default Notes;