import { Route, Routes } from "react-router-dom";
import CrudEmpleado from "./pages/CrudEmpleado";
import AgregarEmpleado from "./pages/AgregarEmpleado";
import NotFound from "./pages/NotFound";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<CrudEmpleado />} />
        <Route path="/NuevoEmpleado" element={<AgregarEmpleado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

    );
}

export default App;
