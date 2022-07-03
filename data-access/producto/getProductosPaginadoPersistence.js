const pool = require("../db");

exports.getProductosPaginadoPersistence = async (pagina, offset) => {
  try {
    const offsetSQL = pagina * offset;

    const fetchSQL = offset;

    const allProductos = await pool.query(
      "SELECT * FROM producto OFFSET $1 ROWS FETCH NEXT $2 ROWS ONLY",
      [offsetSQL, fetchSQL]
    );

    return allProductos.rows;
  } catch (err) {
    throw new Error(err);
  }
};
