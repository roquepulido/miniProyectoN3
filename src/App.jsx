import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Calculadora from "./pages/Calculadora";
import Calendario from "./pages/Calendario";
import Inicio from "./pages/Inicio";
import Notas from "./pages/Notas";
import Tareas from "./pages/Tareas";
import Layout from "./pages/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="calculadora" element={<Calculadora />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="notas" element={<Notas />} />
        <Route path="tareas" element={<Tareas />} />
      </Route>
    </Routes>
  );
}

export default App;
