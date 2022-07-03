const pool = require("../db.js");

exports.getProductoPersistence = async (id) => {
  try {
    const producto = await pool.query(
      "SELECT * FROM producto WHERE producto_id = $1",
      [id]
    );

    if (!producto || !producto.rows[0]) return null;

    return producto.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
