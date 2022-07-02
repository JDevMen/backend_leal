const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());

//RUTAS

//get all productos
app.get("/productos", async (req, res) => {
  try {
    const allProductos = await pool.query("SELECT * FROM producto");

    await res.json(allProductos.rows);
  } catch (err) {
    console.error(err);
  }
});
//get producto
app.get("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allProductos = await pool.query(
      "SELECT * FROM producto WHERE producto_id = $1",
      [id]
    );

    await res.json(allProductos.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

//create producto
app.post("/productos", async (req, res) => {
  try {
    const { nombre, precio, puntos } = req.body;

    const newProducto = await pool.query(
      "INSERT INTO producto (nombre, precio, puntos) VALUES ($1, $2, $3) RETURNING *",
      [nombre, precio, puntos]
    );

    await res.json(newProducto.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

//update producto
app.put("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, puntos } = req.body;

    const modifiedProducto = await pool.query(
      "UPDATE producto SET nombre= $1, precio= $2, puntos= $3 WHERE producto_id = $4",
      [nombre, precio, puntos, id]
    );

    await res.json("El producto ha sido actualizado");
  } catch (err) {
    console.error(err);
  }
});

//delete producto
app.delete("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await pool.query(
      "DELETE FROM producto WHERE producto_id = $1",
      [id]
    );
    res.json("Producto eliminado");
  } catch (err) {
    console.error(err);
  }
});

//get all usuarios
app.get("/productos", async (req, res) => {
  try {
    const allProductos = await pool.query("SELECT * FROM producto");

    await res.json(allProductos.rows);
  } catch (err) {
    console.error(err);
  }
});

//get usuario
app.get("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allProductos = await pool.query(
      "SELECT * FROM producto WHERE producto_id = $1",
      [id]
    );

    await res.json(allProductos.rows[0]);
  } catch (err) {
    console.error(err);
  }
});
//create usuario
app.post("/productos", async (req, res) => {
  try {
    const { nombre, precio, puntos } = req.body;

    const newProducto = await pool.query(
      "INSERT INTO producto (nombre, precio, puntos) VALUES ($1, $2, $3) RETURNING *",
      [nombre, precio, puntos]
    );

    await res.json(newProducto.rows[0]);
  } catch (err) {
    console.error(err);
  }
});
//update usuario
app.put("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, puntos } = req.body;

    const modifiedProducto = await pool.query(
      "UPDATE producto SET nombre= $1, precio= $2, puntos= $3 WHERE producto_id = $4",
      [nombre, precio, puntos, id]
    );

    await res.json("El producto ha sido actualizado");
  } catch (err) {
    console.error(err);
  }
});
//delete usuario
app.delete("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await pool.query(
      "DELETE FROM producto WHERE producto_id = $1",
      [id]
    );
    res.json("Producto eliminado");
  } catch (err) {
    console.error(err);
  }
});
app.listen(8080, () => {
  console.log("server listening in http://localhost:8080");
});
