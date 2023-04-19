const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');

const UsuariosController = {};

UsuariosController.verPerfil = async (req, res) => {
  try {
    const usuario = await Usuarios.findByPk(req.userId);

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    res.json({
      success: true,
      data: usuario,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};

UsuariosController.editarPerfil = async (req, res) => {
  try {
    const { nombre, apellido, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;

    const usuario = await Usuarios.findByPk(req.userId);

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    await usuario.update({
      nombre: nombre || usuario.nombre,
      apellido: apellido || usuario.apellido,
      fecha_nacimiento: fecha_nacimiento || usuario.fecha_nacimiento,
      ciudad: ciudad || usuario.ciudad,
      pais: pais || usuario.pais,
      generos_preferidos: generos_preferidos || usuario.generos_preferidos,
      biografia: biografia || usuario.biografia,
    });

    res.json({
      success: true,
      message: 'Perfil actualizado correctamente',
      data: usuario,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};
UsuariosController.agregarUsuario = async (req, res) => {
    try {
      if (!req.isAdmin) {
        return res.status(403).json({
          success: false,
          message: 'No tienes permisos para realizar esta acción',
        });
      }
  
     
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Algo salió mal',
        error: error.message,
      });
    }
  };
  
  UsuariosController.editarUsuario = async (req, res) => {
    try {
      if (!req.isAdmin) {
        return res.status(403).json({
          success: false,
          message: 'No tienes permisos para realizar esta acción',
        });
      }
  
      const { id, nombre, apellido, email, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia, id_rol } = req.body;
  
      const usuario = await Usuarios.findByPk(id);
  
      if (!usuario) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }
  
      await usuario.update({
        nombre: nombre || usuario.nombre,
        apellido: apellido || usuario.apellido,
        email: email || usuario.email,
        fecha_nacimiento: fecha_nacimiento || usuario.fecha_nacimiento,
        ciudad: ciudad || usuario.ciudad,
        pais: pais || usuario.pais,
        generos_preferidos: generos_preferidos || usuario.generos_preferidos,
        biografia: biografia || usuario.biografia,
        id_rol: id_rol || usuario.id_rol,
      });
  
      res.json({
        success: true,
        message: 'Usuario actualizado correctamente',
        data: usuario,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Algo salió mal',
        error: error.message,
      });
    }
  };
  

module.exports = UsuariosController;








