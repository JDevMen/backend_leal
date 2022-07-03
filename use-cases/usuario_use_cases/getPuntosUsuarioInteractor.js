exports.getPuntosUsuarioInteractor = async (
  { getPuntosUsuarioPersistence },
  { id }
) => {
  try {
    const puntosUsuario = await getPuntosUsuarioPersistence(id);

    if (!puntosUsuario) throw new Error(`El usuario con id ${id} no existe`);

    return { id: id, puntos: puntosUsuario };
  } catch (err) {
    throw new Error(err);
  }
};
