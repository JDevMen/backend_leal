const pool = require("../db");

exports.getUsuariosPersistence = async () => {
  try {
    const allUsuarios = await pool.query("SELECT * FROM usuario");

    return allUsuarios.rows;
  } catch (err) {
    throw new Error(err);
  }
};
