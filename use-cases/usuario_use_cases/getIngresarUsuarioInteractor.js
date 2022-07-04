exports.getIngresarUsuarioInteractor = async (
  { getIngresarUsuarioPersistence },
  { correo, contrasena }
) => {
  try {
    const usuario = await getIngresarUsuarioPersistence(correo);

    if (!usuario) throw new Error(`El usuario con correo ${correo} no existe`);

    if (usuario.contrasena !== contrasena)
      throw new Error("Contraseña incorrecta");

    return { idUsuario: usuario.usuario_id };
  } catch (err) {
    throw new Error(err);
  }
};
