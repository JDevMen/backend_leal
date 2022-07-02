const pool = require("../db");

exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, puntos } = req.body;

    const modifiedProducto = await pool.query(
      "UPDATE producto SET nombre= $1, precio= $2, puntos= $3 WHERE producto_id = $4",
      [nombre, precio, puntos, id]
    );

    await res.json("El producto ha sido actualizado");
  } catch (err) {
    console.error(err);
  }
};
