import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM empleados");
  res.send(result);
};

export const getEmpleado = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM empleados WHERE id = (?)", [
    id,
  ]);
  res.send(result[0]);
};

export const createEmpleado = async (req, res) => {
  const { NOMBRE, APELLIDO, ESTATUS, PUESTO, SUELDO, FECHA_NACIMIENTO } =
    req.body;

  const [rows] = await pool.query(
    "INSERT INTO empleados (NOMBRE, APELLIDO, ESTATUS, PUESTO, SUELDO, FECHA_NACIMIENTO) VALUES (?, ?, ?, ?, ?, ?)",
    [NOMBRE, APELLIDO, ESTATUS, PUESTO, SUELDO, FECHA_NACIMIENTO]
  );

  res.send({
    id: rows.insertId,
    NOMBRE,
    APELLIDO,
    ESTATUS,
    PUESTO,
    SUELDO,
    FECHA_NACIMIENTO,
  });
};

export const updateEmpleado = async (req, res) => {
  const [result] = await pool.query("UPDATE Empleados SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
};

export const deleteEmpleado = async (req, res) => {
  const [result] = await pool.query("DELETE FROM Empleados WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Empleado no encontrado" });
  }
  return res.sendStatus(204);
  // affectedRows: 1,
};
