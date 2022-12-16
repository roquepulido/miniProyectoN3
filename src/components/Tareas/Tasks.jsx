import { useState } from "react";
import Task from "./Task";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    
    setTasks([...tasks, task]);
    
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="App container w-50 d-flex flex-column">
      <h1>Tus Tareas</h1>
      <div className=" mt-2 d-flex flex-column gap-2">
        {tasks.map((task,index) => (
          <Task
            key={task.id}
            id={task.id}
            handleDeleteTask={handleDeleteTask}
            textTask={task.textTask}
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
          handleAddTask({
            id:Math.floor(Math.random()*100000),
            textTask: document.getElementById("text").value,
          });
          document.getElementById("text").value = "";
        }}
        className="mt-2 btn btn-primary"
      >
        Agregar Tarea
      </button>
    </div>
  );
}

export default Tasks;