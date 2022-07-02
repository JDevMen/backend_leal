const express = require("express");
const app = express();
const {
  createProductoPersistence,
} = require("./producto/createProductoPersistence");

const {
  createProductoInteractor,
} = require("./producto/createProductoInteractor.js");
const { deleteProducto } = require("./producto/deleteProducto.js");
const { getProducto } = require("./producto/getProducto.js");
const { getProductos } = require("./producto/getProductos");
const { updateProducto } = require("./producto/updateProducto.js");

app.use(express.json());

//RUTAS

//get all productos
app.get("/api/productos", getProductos);

//get producto
app.get("/api/productos/:id", getProducto);

//create producto
app.post("/api/productos", async (req, res) => {
  const { nombre, precio, puntos } = req.body;

  try {
    const newProducto = await createProductoInteractor(
      { createProductoPersistence },
      {
        nombre,
        precio,
        puntos,
      }
    );

    res.json(newProducto);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//update producto
app.put("/api/productos/:id", updateProducto);

//delete producto
app.delete("/api/productos/:id", deleteProducto);

//usuarios api

// //get all usuarios
// app.get("/api/productos", async (req, res) => {
//   try {
//     const allProductos = await pool.query("SELECT * FROM producto");

//     await res.json(allProductos.rows);
//   } catch (err) {
//     console.error(err);
//   }
// });

// //get usuario
// app.get("/api/usuarios/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const allProductos = await pool.query(
//       "SELECT * FROM producto WHERE producto_id = $1",
//       [id]
//     );

//     await res.json(allProductos.rows[0]);
//   } catch (err) {
//     console.error(err);
//   }
// });
// //create usuario
// app.post("/api/usuarios", async (req, res) => {
//   try {
//     const { nombre, precio, puntos } = req.body;

//     const newProducto = await pool.query(
//       "INSERT INTO producto (nombre, precio, puntos) VALUES ($1, $2, $3) RETURNING *",
//       [nombre, precio, puntos]
//     );

//     await res.json(newProducto.rows[0]);
//   } catch (err) {
//     console.error(err);
//   }
// });
// //update usuario
// app.put("/api/productos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { nombre, precio, puntos } = req.body;

//     const modifiedProducto = await pool.query(
//       "UPDATE producto SET nombre= $1, precio= $2, puntos= $3 WHERE producto_id = $4",
//       [nombre, precio, puntos, id]
//     );

//     await res.json("El producto ha sido actualizado");
//   } catch (err) {
//     console.error(err);
//   }
// });
// //delete usuario
// app.delete("/api/productos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedTodo = await pool.query(
//       "DELETE FROM producto WHERE producto_id = $1",
//       [id]
//     );
//     res.json("Producto eliminado");
//   } catch (err) {
//     console.error(err);
//   }
// });
app.listen(8080, () => {
  console.log("server listening in http://localhost:8080");
});
