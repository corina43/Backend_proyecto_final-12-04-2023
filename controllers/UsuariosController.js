const models = require('../models');
const authService = require('../services/AuthServices');

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, apellido, email, password, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;

    authService.assertEmailIsValidService(email);
    await authService.assertEmailIsUniqueService(email);
    authService.assertValidPasswordService(password);

    const usuarioCreado = await authService.createUserService({
      nombre,
      apellido,
      email,
      password,
      fecha_registro: new Date(),
      id_rol: 2, // Rol por defecto para nuevos usuarios (por ejemplo, id_rol: 2 para "Usuario")
      fecha_nacimiento,
      ciudad,
      pais,
      generos_preferidos,
      biografia
    });

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      usuario: usuarioCreado
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await models.Usuarios.findAll({ include: [{ model: models.Roles, as: 'Roles' }] });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await models.Usuarios.findByPk(req.params.id, { include: [{ model: models.Roles, as: 'Roles' }] });
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario' });
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { nombre, apellido, email, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;
    const usuario = await models.Usuarios.findByPk(req.params.id);

    if (usuario) {
      usuario.nombre = nombre || usuario.nombre;
      usuario.apellido = apellido || usuario.apellido;
      usuario.email = email || usuario.email;
      usuario.fecha_nacimiento = fecha_nacimiento || usuario.fecha_nacimiento;
      usuario.ciudad = ciudad || usuario.ciudad;
      usuario.pais = pais || usuario.pais;
      usuario.generos_preferidos = generos_preferidos || usuario.generos_preferidos;
      usuario.biografia = biografia || usuario.biografia;
      await usuario.save();

      res.status(200).json({
        message: 'Usuario actualizado con exito',
        usuario: usuario
      });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};
const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await models.Usuarios.findByPk(req.params.id);

    if (usuario) {
      await usuario.destroy();
      res.status(200).json({ message: 'Usuario eliminado con exito' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};

