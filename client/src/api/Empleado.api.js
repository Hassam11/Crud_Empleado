import axios from "axios";

export const getEmpleadoRequests = async () => {
    return await axios.get("http://localhost:4000/Empleado")
}