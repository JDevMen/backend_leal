const pool = require("../db.js");

exports.getPuntosUsuarioPersistence = async (id) => {
  try {
    const usuario = await pool.query(
      "SELECT puntos FROM usuario WHERE usuario_id = $1",
      [id]
    );

    if (!usuario.rows.length) return null;

    return usuario.rows[0].puntos;
  } catch (err) {
    throw new Error(err);
  }
};
