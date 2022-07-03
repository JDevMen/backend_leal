const pool = require("../db");

exports.updatePuntosUsuarioPersistence = async (id, puntos) => {
  try {
    await pool.query("UPDATE usuario SET puntos= $1 WHERE usuario_id = $2", [
      puntos,
      id,
    ]);
    return "Puntos de usuario actualizados exitosamente.";
  } catch (err) {
    throw new Error(err);
  }
};
