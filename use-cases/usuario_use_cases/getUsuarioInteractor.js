exports.getUsuarioInteractor = async ({ getUsuarioPersistence }, { id }) => {
  try {
    const usuario = await getUsuarioPersistence(id);

    if (!usuario) throw new Error(`El usuario con id ${id} no existe`);

    return usuario;
  } catch (err) {
    throw new Error(err);
  }
};
