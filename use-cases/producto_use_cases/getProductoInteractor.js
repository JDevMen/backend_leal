exports.getProductoInteractor = async ({ getProductoPersistence }, { id }) => {
  try {
    const producto = await getProductoPersistence(id);

    if (!producto) throw new Error(`El producto con id ${id} no existe`);

    return producto;
  } catch (err) {
    throw new Error(err);
  }
};
