exports.getUsuarioPorCorreoInteractor = async (
  { getUsuarioPorCorreoPersistence },
  { correo }
) => {
  try {
    const usuario = await getUsuarioPorCorreoPersistence(correo);

    if (!usuario) throw new Error(`El usuario con correo ${correo} no existe`);

    return usuario;
  } catch (err) {
    throw new Error(err);
  }
};
