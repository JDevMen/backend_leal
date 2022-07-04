const { UsuarioEntity } = require("../../usuario/usuarioEntity");

exports.createUsuarioInteractor = async (
  { getUsuarioPorCorreoPersistence, createUsuarioPersistence },
  { correo, contrasena }
) => {
  try {
    const usuario = new UsuarioEntity({ correo, contrasena });

    usuario.validate();

    const usuarioExistente = await getUsuarioPorCorreoPersistence(correo);

    if (usuarioExistente) throw new Error("El usuario ya existe");

    const newUsuario = await createUsuarioPersistence(usuario);
    return newUsuario;
  } catch (err) {
    throw new Error(err);
  }
};
