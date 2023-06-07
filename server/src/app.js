import Express from "express";
import { pool } from "./db.js ";
import  EmpleadoRouter  from "./Routes/Empleado.routes.js";
import cors from "cors"

const app = Express();

app.use(Express.json());
app.use(cors())
app.use(EmpleadoRouter)


app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS RESULT");
  res.send(result[0]);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000);
console.log(4000);
