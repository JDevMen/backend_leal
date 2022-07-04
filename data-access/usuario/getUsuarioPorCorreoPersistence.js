const pool = require("../db.js");

exports.getUsuarioPorCorreoPersistence = async (correo) => {
  try {
    const usuario = await pool.query(
      "SELECT * FROM usuario WHERE correo = $1",
      [correo]
    );

    if (!usuario || !usuario.rows[0]) return null;

    return usuario.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
