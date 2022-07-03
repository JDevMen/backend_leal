const pool = require("../db");

exports.createProductoPersistence = async (producto) => {
  try {
    const newProducto = await pool.query(
      "INSERT INTO producto (nombre, precio, puntos) VALUES ($1, $2, $3) RETURNING *",
      [producto.nombre, producto.precio, producto.puntos]
    );

    return newProducto.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
