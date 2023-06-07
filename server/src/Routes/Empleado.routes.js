import { Router } from "express";
import { getEmpleados, getEmpleado,  createEmpleado, updateEmpleado, deleteEmpleado } from "../controllers/Empleado.controllers.js";


const router = Router();


router.get("/Empleado", getEmpleados);
router.get("/Empleado/:id", getEmpleado);

router.post("/Empleado", createEmpleado);

router.put("/Empleado/:id", updateEmpleado);

router.delete("/Empleado/:id", deleteEmpleado);

export default router;