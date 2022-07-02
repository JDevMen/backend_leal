exports.ProductoEntity = class ProductoEntity {
  constructor({ nombre, precio, puntos }) {
    this.nombre = nombre;
    this.precio = precio;
    this.puntos = puntos;
  }

  validate() {
    if (this.nombre === "") throw new Error("Nombre inválido");
    if (this.precio < 0) throw new Error("Precio no puede ser negativo");
    if (this.puntos < 0) throw new Error("Puntos no puede ser negativo");
  }
};
