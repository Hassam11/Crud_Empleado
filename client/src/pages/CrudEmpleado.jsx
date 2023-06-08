import { useEffect, useState } from "react";
import { getEmpleadosRequests } from "../api/Empleado.api";
import { Link } from "react-router-dom";

const CrudEmpleado = () => {
    const [empleado, setEmpleado] = useState([]);

  useEffect(() => {
    async function cargarEmpleados() {
      const empleados = await getEmpleadosRequests();
      setEmpleado(empleados.data);
    }
    cargarEmpleados();
  }, []);

  function calcularEdad(fechaNacimiento) {
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    // Verificar si el cumpleaños aún no ha ocurrido en el año actual
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimientoObj.getMonth();
    const diaNacimiento = fechaNacimientoObj.getDate();

    if (
      mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
      return `${edad - 1} años`;
    }
    return `${edad} años`;
  }
  return (
    <div className="flex items-center justify-center h-screen flex-col">
    <h2 className="font-bold text-4xl text-center  text-gray-700">
      Empleados
    </h2>
    <div className="">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                NOMBRE
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                APELLIDO
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                ESTATUS
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                PUESTO
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                SUELDO
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                EDAD
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                EDITAR
              </th>
              <th className="px-6 py-4 font-medium text-2xl text-gray-900 font-sans">
                ELIMINAR
              </th>
            </tr>
          </thead>
          <tbody>
            {empleado.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  {item.NOMBRE}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  {item.APELLIDO}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-2xl font-mono ${
                    item.ESTATUS
                      ? "  text-green-600 font-bold text-xl"
                      : "text-red-700 font-bold text-xl"
                  }`}
                >
                  {item.ESTATUS ? "ACTIVO" : "INACTIVO"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  {item.PUESTO}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  {item.SUELDO}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  {calcularEdad(item.FECHA_NACIMIENTO)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    Editar
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl font-mono">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link  to="/NuevoEmpleado" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Agregar
      </Link>
    </div>
  </div>
  )
}

export default CrudEmpleado