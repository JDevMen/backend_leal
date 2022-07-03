exports.deleteUsuarioInteractor = async (
  { getUsuarioPersistence, deleteUsuarioPersistence },
  { id }
) => {
  try {
    const usuarioAEliminar = await getUsuarioPersistence(id);

    if (!usuarioAEliminar) {
      throw new Error(`El usuario a eliminar con id ${id} no existe`);
    }

    const usuarioEliminado = deleteUsuarioPersistence(id);

    return usuarioEliminado;
  } catch (err) {
    throw new Error(err);
  }
};
