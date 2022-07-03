const pool = require("../db");

exports.getNumeroProductosPersistence = async () => {
  try {
    const numeroProductos = await pool.query("SELECT count(*) FROM producto");

    console.log("numero de productos ", JSON.stringify(numeroProductos));

    return parseInt(numeroProductos.rows[0].count);
  } catch (err) {
    throw new Error(err);
  }
};
