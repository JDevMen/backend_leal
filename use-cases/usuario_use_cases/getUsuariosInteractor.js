exports.getUsuariosInteractor = async ({ getUsuariosPersistence }) => {
  try {
    const usuarios = await getUsuariosPersistence();

    return usuarios;
  } catch (err) {
    throw new Error(err);
  }
};
