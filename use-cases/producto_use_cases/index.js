import { createProductoPersistence } from "../../data-access/producto/createProductoPersistence";
import { getProductosPersistence } from "../../data-access/producto/getProductosPersistence";
import { createProductoInteractor } from "./createProductoInteractor";
import { getProductosInteractor } from "./getProductosInteractor";

const getProductos = getProductosInteractor({ getProductosPersistence });
const crearProducto = createProductoInteractor({ createProductoPersistence });

const productoService = {
  getProductos,
  crearProducto,
};

export default productoService;
export { getProductos, crearProducto };
