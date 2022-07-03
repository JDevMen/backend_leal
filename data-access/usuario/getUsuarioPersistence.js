const pool = require("../db.js");

exports.getUsuarioPersistence = async (id) => {
  try {
    const usuario = await pool.query(
      "SELECT * FROM usuario WHERE usuario_id = $1",
      [id]
    );

    if (!usuario || !usuario.rows[0]) return null;

    return usuario.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
