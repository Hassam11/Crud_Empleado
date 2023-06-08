import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgregarEmpleado = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [puesto, setPuesto] = useState("");
  const [sueldo, setSueldo] = useState(0);
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [estatus, setEstatus] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const empleado = {
        NOMBRE: nombre,
        APELLIDO: apellido,
        ESTATUS: estatus,
        PUESTO: puesto,
        SUELDO: sueldo,
        FECHA_NACIMIENTO: fechaNacimiento,
      };

      const response = await axios.post(
        "http://localhost:4000/Empleado",
        empleado
      );

      console.log("Empleado creado:", response.data);
      // Realiza cualquier otra acción necesaria después de la creación del empleado
    } catch (error) {
      console.error("Error al crear empleado:", error);
      // Realiza cualquier acción necesaria en caso de error
    }
    navigate("/");

  };

  return (
    <div className="container mx-auto py-8 w-full h-full">
      <h1 className="text-2xl font-bold mb-6 text-center">Agregar Empleado</h1>
      <form
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit}
        action="./CrudEmpleado.jsx"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="name"
            placeholder="Hassam"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellido
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="apellido"
            placeholder="Chinga"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ESTATUS
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Chinga"
            value={estatus}
            onChange={(e) => setEstatus(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Puesto
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="diseñador"
            placeholder="Diseñador"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Sueldo
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="number"
            name="sueldo"
            placeholder="2000"
            value={sueldo}
            onChange={(e) => setSueldo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Nacimiento
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="date"
            name="edad"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AgregarEmpleado;
