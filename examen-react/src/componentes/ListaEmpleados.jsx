export default function ListaEmpleados({ empleados = [], cargando = false }) {
  if (cargando) return <p className="text-center text-gray-500">Cargando...</p>;
  if (!empleados.length) return <p className="text-center text-gray-500">No hay empleados registrados.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4"> -- Lista de Empleados -- </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Nombre</th>
              <th className="border p-2 text-left">DNI</th>
              <th className="border p-2 text-left">Direccion</th>
              <th className="border p-2 text-left">Correo</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((emp) => (
              <tr key={emp.id} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2">{emp.nombre}</td>
                <td className="border p-2">{emp.dni}</td>
                <td className="border p-2">{emp.direccion}</td>
                <td className="border p-2">{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
