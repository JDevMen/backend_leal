const { UsuarioEntity } = require("../../usuario/usuarioEntity");

exports.createUsuarioInteractor = async (
  { createUsuarioPersistence },
  { correo, contrasena }
) => {
  try {
    const usuario = new UsuarioEntity({ correo, contrasena });

    usuario.validate();

    const newUsuario = await createUsuarioPersistence(usuario);
    return newUsuario;
  } catch (err) {
    throw new Error(err);
  }
};
