const pool = require("../db");

exports.deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await pool.query(
      "DELETE FROM producto WHERE producto_id = $1",
      [id]
    );
    res.json("Producto eliminado");
  } catch (err) {
    console.error(err);
  }
};
