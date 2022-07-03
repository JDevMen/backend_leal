const pool = require("../db");

exports.deleteProductoPersistence = async (id) => {
  try {
    await pool.query("DELETE FROM producto WHERE producto_id = $1", [id]);

    return "Producto eliminado exitosamente";
  } catch (err) {
    throw new Error(err);
  }
};
