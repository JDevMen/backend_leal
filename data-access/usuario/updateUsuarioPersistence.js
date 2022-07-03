const pool = require("../db");

exports.updateUsuarioPersistence = async (id, usuario) => {
  try {
    await pool.query(
      "UPDATE usuario SET correo= $1, contrasena= $2, puntos= $3 WHERE usuario_id = $4",
      [usuario.correo, usuario.contrasena, usuario.puntos, id]
    );
    return "Usuario actualizado exitosamente";
  } catch (err) {
    throw new Error(err);
  }
};
