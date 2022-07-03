exports.updateRedimirPuntosUsuarioInteractor = async (
  {
    getPuntosUsuarioPersistence,
    getPuntosProductoPersistence,
    updatePuntosUsuarioPersistence,
  },
  { id, idProducto, cantidad }
) => {
  try {
    if (cantidad < 0)
      throw new Error(
        "La cantidad de producto a redimir no puede ser menor a 1"
      );

    const puntosActuales = await getPuntosUsuarioPersistence(id);
    const puntosProductoARedimir = await getPuntosProductoPersistence(
      idProducto
    );

    if (puntosActuales === null)
      throw new Error(`No existe el usuario con id ${id}`);

    if (puntosProductoARedimir === null)
      throw new Error(`No existe el producto con id ${idProducto}`);

    const nuevosPuntos = puntosActuales - puntosProductoARedimir * cantidad;

    if (nuevosPuntos < 0)
      throw new Error("No cuenta con los puntos suficientes para redimir.");

    const mensajePuntos = await updatePuntosUsuarioPersistence(
      id,
      nuevosPuntos
    );

    return { respuesta: mensajePuntos, nuevosPuntos: nuevosPuntos };
  } catch (err) {
    throw new Error(err);
  }
};
