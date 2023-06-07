import Express from "express";
import { pool } from "./db.js ";

const app = Express();

app.use(Express.json());

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS RESULT");
  res.send(result[0]);
});

// GET Empleados
app.get("/Empleados", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM empleados");
  res.send(result);
});

// GET Empleados por ID
app.get("/Empleados/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM empleados WHERE id = (?)", [
    id,
  ]);
  res.send(result[0]);
});

// POST EMPLEADOS
app.post("/Empleados", async (req, res) => {
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
});

// PUT EMPLEADOS POR ID
app.put("/Empleados/:id", async (req, res) => {
  const [result] = await pool.query("UPDATE Empleados SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
});

// DELETE EMPLEADO POR IR
app.delete("/Empleados/:id", async (req, res) => {
  const [result] = await pool.query("DELETE FROM Empleados WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Empleado no encontrado" });
  }
  return res.sendStatus(204);
  // affectedRows: 1,
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000);
console.log(4000);
