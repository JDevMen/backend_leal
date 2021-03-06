exports.deleteProductoInteractor = async (
  { getProductoPersistence, deleteProductoPersistence },
  { id }
) => {
  try {
    const productoAEliminar = await getProductoPersistence(id);

    if (!productoAEliminar) {
      throw new Error(`El producto a eliminar con id ${id} no existe`);
    }

    const productoEliminado = deleteProductoPersistence(id);

    return productoEliminado;
  } catch (err) {
    throw new Error(err);
  }
};
