const express = require("express");
const app = express();
const {
  createProductoInteractor,
} = require("./use-cases/producto_use_cases/createProductoInteractor.js");
const {
  createProductoPersistence,
} = require("./data-access/producto/createProductoPersistence");
const {
  getProductosInteractor,
} = require("./use-cases/producto_use_cases/getProductosInteractor.js");
const {
  getProductosPersistence,
} = require("./data-access/producto/getProductosPersistence.js");
const {
  getProductoInteractor,
} = require("./use-cases/producto_use_cases/getProductoInteractor.js");
const {
  getProductoPersistence,
} = require("./data-access/producto/getProductoPersistence.js");
const {
  updateProductoInteractor,
} = require("./use-cases/producto_use_cases/updateProductoInteractor.js");
const {
  updateProductoPersistence,
} = require("./data-access/producto/updateProductoPersistence.js");
const {
  deleteProductoInteractor,
} = require("./use-cases/producto_use_cases/deleteProductoInteractor.js");
const {
  deleteProductoPersistence,
} = require("./data-access/producto/deleteProductoPersistence.js");

app.use(express.json());

//RUTAS

//get all productos
app.get("/api/productos", async (req, res) => {
  try {
    const productos = await getProductosInteractor({
      getProductosPersistence,
    });

    res.status(200).json(productos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get producto
app.get("/api/productos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await getProductoInteractor(
      {
        getProductoPersistence,
      },
      { id }
    );

    res.status(200).json(producto);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//create producto
app.post("/api/productos", async (req, res) => {
  const { nombre, precio, puntos } = req.body;

  try {
    const newProducto = await createProductoInteractor(
      {
        createProductoPersistence,
      },
      {
        nombre,
        precio,
        puntos,
      }
    );

    res.status(201).json(newProducto);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//update producto
app.put("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, puntos } = req.body;

  try {
    const updatedProducto = await updateProductoInteractor(
      {
        getProductoPersistence,
        updateProductoPersistence,
      },
      { id, nombre, precio, puntos }
    );
    res.status(200).json(updatedProducto);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//delete producto
app.delete("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProductoInteractor(
      {
        getProductoPersistence,
        deleteProductoPersistence,
      },
      { id }
    );

    res.status(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

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
