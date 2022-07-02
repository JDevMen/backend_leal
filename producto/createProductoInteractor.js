const { ProductoEntity } = require("./productoEntity");

exports.createProductoInteractor = async (
  { createProductoPersistence },
  { nombre, precio, puntos }
) => {
  try {
    const producto = new ProductoEntity({ nombre, precio, puntos });

    producto.validate();

    const newProducto = await createProductoPersistence(producto);
    return newProducto;
  } catch (err) {
    throw new Error(err);
  }
};
