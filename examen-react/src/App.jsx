import ListaEmpleados from "./componentes/ListaEmpleados";
import FormularioEmpleado from "./componentes/FormularioEmpleado";
import { usarEmpleados } from "./hooks/usarEmpleados";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { empleados, cargando, agregarEmpleado } = usarEmpleados();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6"> -- Gestion de Empleados -- </h1>

      <FormularioEmpleado agregarEmpleado={agregarEmpleado} />
      <ListaEmpleados empleados={empleados} cargando={cargando} />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
