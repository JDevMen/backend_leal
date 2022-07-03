const pool = require("../db.js");

exports.getPuntosProductoPersistence = async (id) => {
  try {
    const producto = await pool.query(
      "SELECT puntos FROM producto WHERE producto_id = $1",
      [id]
    );

    if (!producto || !producto.rows[0]) return null;

    return producto.rows[0].puntos;
  } catch (err) {
    throw new Error(err);
  }
};
