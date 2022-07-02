const pool = require("../db.js");

exports.getProductos = async (req, res) => {
  try {
    const allProductos = await pool.query("SELECT * FROM producto");

    await res.json(allProductos.rows);
  } catch (err) {
    console.error(err);
  }
};
