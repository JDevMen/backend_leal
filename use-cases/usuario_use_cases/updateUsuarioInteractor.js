const { UsuarioEntity } = require("../../usuario/usuarioEntity");

exports.updateUsuarioInteractor = async (
  { getUsuarioPersistence, updateUsuarioPersistence },
  { id, correo, contrasena, puntos }
) => {
  try {
    const usuarioExiste = await getUsuarioPersistence(id);

    if (!usuarioExiste) throw new Error(`El producto con id ${id} no existe`);

    const usuario = new UsuarioEntity({ correo, contrasena, puntos });

    usuario.validate();

    const usuarioActualizado = await updateUsuarioPersistence(id, usuario);

    return usuarioActualizado;
  } catch (err) {
    throw new Error(err);
  }
};
