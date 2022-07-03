const pool = require("../db");

exports.getProductosPersistence = async () => {
  try {
    const allProductos = await pool.query("SELECT * FROM producto");

    return allProductos.rows;
  } catch (err) {
    throw new Error(err);
  }
};
