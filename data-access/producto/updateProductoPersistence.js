const pool = require("../db");

exports.updateProductoPersistence = async (id, producto) => {
  try {
    await pool.query(
      "UPDATE producto SET nombre= $1, precio= $2, puntos= $3 WHERE producto_id = $4",
      [producto.nombre, producto.precio, producto.puntos, id]
    );
    return "Producto actualizado exitosamente";
  } catch (err) {
    throw new Error(err);
  }
};
