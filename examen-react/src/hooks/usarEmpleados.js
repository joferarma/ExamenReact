import { useState, useEffect } from "react";

const URL_API = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

export const usarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(false);

  const obtenerEmpleados = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch(URL_API);
      if (!respuesta.ok) throw new Error("Error al obtener empleados");
      const datos = await respuesta.json();
      setEmpleados(datos);
    } catch (err) {
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const agregarEmpleado = async (empleado) => {
    try {
      const respuesta = await fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empleado),
      });
      if (!respuesta.ok) throw new Error("Error al crear empleado");
      const nuevoEmpleado = await respuesta.json();
      setEmpleados((prev) => [...prev, nuevoEmpleado]);
      return nuevoEmpleado;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return { empleados, cargando, agregarEmpleado, obtenerEmpleados };
};
