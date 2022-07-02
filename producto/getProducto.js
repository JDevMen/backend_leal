const pool = require("../db.js");

exports.getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const allProductos = await pool.query(
      "SELECT * FROM producto WHERE producto_id = $1",
      [id]
    );

    await res.json(allProductos.rows[0]);
  } catch (err) {
    console.error(err);
  }
};
