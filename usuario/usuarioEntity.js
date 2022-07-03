exports.UsuarioEntity = class ProductoEntity {
  constructor({ correo, contrasena }) {
    this.correo = correo;
    this.contrasena = contrasena;
  }

  validate() {
    if (this.correo === "" || this.correo === null)
      throw new Error("Correo no puede ser vacío");
    if (this.puntos < 0) throw new Error("Puntos no puede ser negativo");
  }
};
