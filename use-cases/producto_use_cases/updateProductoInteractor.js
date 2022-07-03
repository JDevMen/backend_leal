const { ProductoEntity } = require("../../producto/productoEntity");

exports.updateProductoInteractor = async (
  { getProductoPersistence, updateProductoPersistence },
  { id, nombre, precio, puntos }
) => {
  try {
    const productoExiste = await getProductoPersistence(id);

    if (!productoExiste) throw new Error(`El producto con id ${id} no existe`);

    const producto = new ProductoEntity({ nombre, precio, puntos });

    producto.validate();

    const productoActualizado = await updateProductoPersistence(id, producto);

    return productoActualizado;
  } catch (err) {
    throw new Error(err);
  }
};
