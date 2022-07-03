exports.getNumeroProductosInteractor = async ({
  getNumeroProductosPersistence,
}) => {
  try {
    const numeroProductos = await getNumeroProductosPersistence();

    return { cantidadProductos: numeroProductos };
  } catch (err) {
    throw new Error(err);
  }
};
