exports.updateAcumularPuntosUsuarioInteractor = async (
  {
    getPuntosUsuarioPersistence,
    getProductoPersistence,
    updatePuntosUsuarioPersistence,
  },
  { id, idProducto, cantidad }
) => {
  try {
    if (cantidad < 0)
      throw new Error(
        "La cantidad de producto a acumular no puede ser menor a 1"
      );

    const puntosActuales = await getPuntosUsuarioPersistence(id);
    const productoAAcumular = await getProductoPersistence(idProducto);
    if (puntosActuales === null)
      throw new Error(`No existe el usuario con id ${id}`);

    if (productoAAcumular === null)
      throw new Error(`No existe el producto con id ${idProducto}`);
    const nuevosPuntos = puntosActuales + productoAAcumular.puntos * cantidad;

    const mensajePuntos = await updatePuntosUsuarioPersistence(
      id,
      nuevosPuntos
    );

    return {
      respuesta: mensajePuntos,
      nuevosPuntos: nuevosPuntos,
      producto: productoAAcumular,
      cantidad: cantidad,
    };
  } catch (err) {
    throw new Error(err);
  }
};
