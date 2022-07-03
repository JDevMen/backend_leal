exports.getProductosPaginadoInteractor = async (
  { getProductosPaginadoPersistence },
  { pagina, offset }
) => {
  try {
    if (pagina < 0) throw new Error("Página no puede ser negativa");

    if (offset < 0) throw new Error("offset no puede ser negativo");

    const productos = await getProductosPaginadoPersistence(pagina, offset);

    if (!productos) throw new Error("Paginación incorrecta");

    return productos;
  } catch (err) {
    throw new Error(err);
  }
};
