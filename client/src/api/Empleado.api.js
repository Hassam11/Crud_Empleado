import axios from "axios";

// Get
export const getEmpleadosRequests = async () => {
    return await axios.get("http://localhost:4000/Empleado")
}

// Get por id
export const getEmpleadoRequests = async (id) => {
    return await axios.get(`http://localhost:4000/Empleado/${id}`)
}

// POST
export const crearEmpleadoRequests = async (empleado) => {
    return await axios.post("http://localhost:4000/Empleado", empleado)
}

// DELETE
export const eliminarEmpleadoRequests = async (id) => {
    return await axios.delete(`http://localhost:4000/Empleado/${id}`)
}