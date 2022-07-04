const express = require("express");
const cors = require("cors");
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
const {
  getUsuariosInteractor,
} = require("./use-cases/usuario_use_cases/getUsuariosInteractor.js");
const {
  getUsuariosPersistence,
} = require("./data-access/usuario/getUsuariosPersistence.js");
const {
  getUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/getUsuarioInteractor.js");
const {
  getUsuarioPersistence,
} = require("./data-access/usuario/getUsuarioPersistence.js");
const {
  createUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/createUsuarioInteractor.js");
const {
  createUsuarioPersistence,
} = require("./data-access/usuario/createUsuarioPersistence.js");
const {
  updateUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/updateUsuarioInteractor.js");
const {
  updateUsuarioPersistence,
} = require("./data-access/usuario/updateUsuarioPersistence.js");
const {
  deleteUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/deleteUsuarioInteractor.js");
const {
  deleteUsuarioPersistence,
} = require("./data-access/usuario/deleteUsuarioPersistence.js");
const {
  getPuntosUsuarioPersistence,
} = require("./data-access/usuario/getPuntosUsuarioPersistence.js");
const {
  getPuntosUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/getPuntosUsuarioInteractor.js");
const {
  getProductosPaginadoInteractor,
} = require("./use-cases/producto_use_cases/getProductosPaginadoInteractor.js");
const {
  getProductosPaginadoPersistence,
} = require("./data-access/producto/getProductosPaginadoPersistence.js");
const {
  getNumeroProductosInteractor,
} = require("./use-cases/producto_use_cases/getNumeroProductosInteractor.js");
const {
  getNumeroProductosPersistence,
} = require("./data-access/producto/getNumeroProductosInteractor.js");
const {
  updateRedimirPuntosUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/updateRedimirPuntosUsuarioInteractor.js");
const {
  updatePuntosUsuarioPersistence,
} = require("./data-access/usuario/updatePuntosUsuarioPersistence.js");
const {
  getPuntosProductoPersistence,
} = require("./data-access/producto/getPuntosProductoPersistence.js");
const {
  updateAcumularPuntosUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/updateAcumularPuntosUsuarioInteractor.js");
const {
  getIngresarUsuarioInteractor,
} = require("./use-cases/usuario_use_cases/getIngresarUsuarioInteractor.js");
const {
  getIngresarUsuarioPersistence,
} = require("./data-access/usuario/getIngresarUsuarioPersistence.js");
const {
  getUsuarioPorCorreoInteractor,
} = require("./use-cases/usuario_use_cases/getUsuarioPorCorreoInteractor.js");
const {
  getUsuarioPorCorreoPersistence,
} = require("./data-access/usuario/getUsuarioPorCorreoPersistence.js");
app.use(cors());
app.use(express.json());

//RUTAS API--------------------------------------------//

//PRODUCTOS API----------------------------------------//

//CRUD API---------------------------------------------//
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
//CASOS ESPECIALES-------------------------------------//
//get productos paginado
app.get("/api/productos-paginado/:pagina/offset/:offset", async (req, res) => {
  try {
    const { pagina, offset } = req.params;

    const productosPaginados = await getProductosPaginadoInteractor(
      {
        getProductosPaginadoPersistence,
      },
      { pagina, offset }
    );

    res.status(200).send(productosPaginados);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get cantidad de productos
app.get("/api/productos-cantidad", async (req, res) => {
  try {
    const numeroProductos = await getNumeroProductosInteractor({
      getNumeroProductosPersistence,
    });

    res.status(200).send(numeroProductos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//USUARIOS API ----------------------------------------//

//CRUD API---------------------------------------------//
//get all usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    const allProductos = await getUsuariosInteractor({
      getUsuariosPersistence,
    });

    res.status(200).json(allProductos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get usuario
app.get("/api/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await getUsuarioInteractor(
      { getUsuarioPersistence },
      { id }
    );

    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//create usuario
app.post("/api/usuarios", async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    const newUsuario = await createUsuarioInteractor(
      { getUsuarioPorCorreoPersistence, createUsuarioPersistence },
      { correo, contrasena }
    );

    res.status(201).json(newUsuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//update usuario
app.put("/api/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { correo, contrasena, puntos } = req.body;

    const respuestaUpdate = await updateUsuarioInteractor(
      { getUsuarioPersistence, updateUsuarioPersistence },
      { id, correo, contrasena, puntos }
    );

    res.status(200).json(respuestaUpdate);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//delete usuario
app.delete("/api/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteRespuesta = await deleteUsuarioInteractor(
      {
        getUsuarioPersistence,
        deleteUsuarioPersistence,
      },
      { id }
    );

    res.status(204).json(deleteRespuesta);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//CASOS ESPECIALES-------------------------------------//

//get Usuario por correo

app.get("/api/usuarios-correo/:correo", async (req, res) => {
  try {
    const { correo } = req.params;

    const usuario = await getUsuarioPorCorreoInteractor(
      { getUsuarioPorCorreoPersistence },
      { correo }
    );

    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get puntos de usuario por id
app.get("/api/usuarios/:id/puntos", async (req, res) => {
  try {
    const { id } = req.params;
    const puntosUsuario = await getPuntosUsuarioInteractor(
      { getPuntosUsuarioPersistence },
      { id }
    );

    res.status(200).json(puntosUsuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//update redención puntos de usuario
app.put("/api/usuarios/:id/redimir-puntos", async (req, res) => {
  const { id } = req.params;
  const { idProducto, cantidad } = req.body;
  try {
    const respuestaUpdate = await updateRedimirPuntosUsuarioInteractor(
      {
        getPuntosUsuarioPersistence,
        getProductoPersistence,
        updatePuntosUsuarioPersistence,
      },
      { id, idProducto, cantidad }
    );

    res.status(200).json(respuestaUpdate);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//update acumulación puntos de usuario
app.put("/api/usuarios/:id/acumular-puntos", async (req, res) => {
  const { id } = req.params;
  const { idProducto, cantidad } = req.body;

  try {
    const respuestaUpdate = await updateAcumularPuntosUsuarioInteractor(
      {
        getPuntosUsuarioPersistence,
        getProductoPersistence,
        updatePuntosUsuarioPersistence,
      },
      { id, idProducto, cantidad }
    );

    res.status(200).json(respuestaUpdate);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//post ingresar usuario
app.post("/api/usuarios-ingresar", async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const idUsuario = await getIngresarUsuarioInteractor(
      {
        getIngresarUsuarioPersistence,
      },
      { correo, contrasena }
    );

    res.status(200).send(idUsuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log("server listening in http://localhost:8080");
});
