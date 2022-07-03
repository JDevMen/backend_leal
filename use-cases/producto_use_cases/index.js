import { createProductoPersistence } from "../../data-access/producto/createProductoPersistence";
import { getProductoPersistence } from "../../data-access/producto/getProductoPersistence";
import { getProductosPersistence } from "../../data-access/producto/getProductosPersistence";
import { updateProductoPersistence } from "../../data-access/producto/updateProductoPersistence";
import { createProductoInteractor } from "./createProductoInteractor";
import { getProductoInteractor } from "./getProductoInteractor";
import { getProductosInteractor } from "./getProductosInteractor";
import { updateProductoInteractor } from "./updateProductoInteractor";

const getProductos = getProductosInteractor({ getProductosPersistence });
const getProducto = getProductoInteractor({ getProductoPersistence });
const crearProducto = createProductoInteractor({
  getProductoPersistence,
  createProductoPersistence,
});
const updateProducto = updateProductoInteractor({
  getProductoPersistence,
  updateProductoPersistence,
});

const productoService = {
  getProductos,
  getProducto,
  crearProducto,
  updateProducto,
};

export default productoService;
export { getProductos, getProducto, crearProducto, updateProducto };
