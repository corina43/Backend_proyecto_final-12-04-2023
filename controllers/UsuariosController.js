const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');

const UsuariosController = {};


UsuariosController.verUsuarios = async (req,res) =>{
  try{
    const usuarios = await Usuarios.findAll();
    return res.json(
      {
        success: true,
        message: 'informacion usuarios',
        data: usuarios
      }
    );
  }catch (error) {
    return res.status(500).json(
      { 
        succes: false,
        message: 'Algo va mal.',
        data: error.message 
      }
    );
  }
};

UsuariosController.verUsuariosPerfil = async (req,res) =>{
  try {
    // console.log(req,res)
    const id_usuario = req.id_usuario;
    const usuarios = await Usuarios.findByPk(
       id_usuario,
      {
       
        attributes:
        {
          exclude: ["id", "password", "id_rol"]
        },
        include:
        {
          models: Usuarios,
          attributes:
          {
            exclude: ["id", "id_usuario"]
          }
        }

      }
    );console.log(usuarios)
    if (!usuarios){
      return res.status(504).json(
        {
          succes:false,
          message: 'Usuario no encontrado'
        }
      );
    }
    return res.json(
      {
        succes: true,
        message:'Informacion del usuario',
        data: usuarios
      }
    );
  }catch (error) {
    return res.status(500).json(
      {
        succes: false,
        message:'Algo va mal',
        data: error.message
      }
    );
  }
};


UsuariosController.editarPerfil = async (req, res) => {
  try {
    const { nombre, apellido, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;

    const usuario = await Usuarios.findByPk(req.id_usuario);

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

module.exports = UsuariosController;








