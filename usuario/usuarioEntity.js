const { isValidEmail } = require("../utils/validateEmail");

exports.UsuarioEntity = class ProductoEntity {
  constructor({ correo, contrasena, puntos }) {
    this.correo = correo;
    this.contrasena = contrasena;
    this.puntos = puntos;
  }

  validate() {
    if (this.correo === "" || this.correo === null)
      throw new Error("Correo no puede ser vacío");

    if (!isValidEmail(this.correo)) throw new Error("Correo inválido");

    if (this.puntos < 0) throw new Error("Puntos no puede ser negativo");
  }
};
