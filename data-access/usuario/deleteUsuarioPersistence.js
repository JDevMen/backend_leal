const pool = require("../db");

exports.deleteUsuarioPersistence = async (id) => {
  try {
    await pool.query("DELETE FROM usuario WHERE usuario_id = $1", [id]);

    return "Usuario eliminado exitosamente";
  } catch (err) {
    throw new Error(err);
  }
};
