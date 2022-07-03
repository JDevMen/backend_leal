const pool = require("../db");

exports.createUsuarioPersistence = async (usuario) => {
  try {
    const newUsuario = await pool.query(
      "INSERT INTO usuario (correo, contrasena) VALUES ($1, $2) RETURNING *",
      [usuario.correo, usuario.contrasena]
    );

    return newUsuario.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
