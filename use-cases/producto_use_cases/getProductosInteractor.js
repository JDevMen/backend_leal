exports.getProductosInteractor = async ({ getProductosPersistence }) => {
  try {
    const productos = await getProductosPersistence();

    return productos;
  } catch (err) {
    throw new Error(err);
  }
};
