import { useState } from "react";
import { toast } from "react-toastify";

export default function FormularioEmpleado({ agregarEmpleado }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const manejarCambio = (e) => {
    setFormulario((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validarFormulario = () => {
    if (!formulario.nombre || !formulario.dni || !formulario.direccion || !formulario.email) {
      toast.error("Todos los campos son obligatorios.");
      return false;
    }
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(formulario.email)) {
      toast.error("El formato de correo no es valido.");
      return false;
    }
    return true;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      await agregarEmpleado(formulario);
      toast.success("Empleado agregado con exito.");
      setFormulario({ nombre: "", dni: "", direccion: "", email: "" });
    } catch {
      toast.error("El empleado no fue agregado. Intentar de nuevo.");
    }
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mx-auto"
    >
      <h2 className="text-lg font-bold mb-4">➕ Agregar Empleado</h2>

      <label className="block mb-2 text-sm font-medium">Nombre</label>
      <input
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        className="w-full p-2 border rounded-lg mb-3"
      />

      <label className="block mb-2 text-sm font-medium">DNI</label>
      <input
        name="dni"
        value={formulario.dni}
        onChange={manejarCambio}
        className="w-full p-2 border rounded-lg mb-3"
      />

      <label className="block mb-2 text-sm font-medium">Direccion</label>
      <input
        name="direccion"
        value={formulario.direccion}
        onChange={manejarCambio}
        className="w-full p-2 border rounded-lg mb-3"
      />

      <label className="block mb-2 text-sm font-medium">Correo</label>
      <input
        type="email"
        name="email"
        value={formulario.email}
        onChange={manejarCambio}
        className="w-full p-2 border rounded-lg mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Guardar
      </button>
    </form>
  );
}
