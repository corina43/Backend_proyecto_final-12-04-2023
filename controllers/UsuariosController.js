const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');
const models = require('../models/index');
const UsuariosController = {};

UsuariosController.getAll = async (req,res) =>{
  let resp = await models.Usuarios.findAll();
  console.log(req)
  res.send(resp);
}

UsuariosController.verUsuarios = async (req,res) => {
  console.log(req,"Controlador de Usuarios iniciado.")
  try{
    console.log(req,"Controlador de Usuarios iniciado.")
    const usuarios = await models.Usuarios.findAll();
    console.log(usuarios);
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
    console.log(req,res)
    const id = req.id;
    const usuarios = await Usuarios.findByPk(
     
       id,
     
      {
       
        attributes:
        {
          exclude: ["id", "password", "id_rol"]
        },
        

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

UsuariosController.getInformation = async (req,res) => {

  let {email } = req.params;
  let resp = await models.Usuarios.findAll({
    where: {email: email}
  })
  res.send(resp)
};

UsuariosController.EditarPerfil = async (req, res) => {
  try {
    const { nombre, apellido, fecha_nacimiento,fecha_registro, ciudad, pais, generos_preferidos, biografia } = req.body;

    const usuario = await Usuarios.findByPk(req.id);

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
      fecha_registro: fecha_registro || usuario.fecha_registro,
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

//los usuarios activos
UsuariosController.getAllActiveUsers = async (req, res) => {
  let resp = await models.Usuarios.findAll(
   { where: {
      deleted: false,
      id_usuarios: "2"
    }}
  );
  res.send(resp)
}

// Los usuarios borrados
UsuariosController.getAllDeletedUsers = async (req, res) => {
  let resp = await models.Usuarios.findAll({
    where: {
      deleted: true,
    },
  });
  res.send(resp);
};

UsuariosController.getAllPrestamos = async (req, res) => {
  let resp = await models.Prestamos.findAll();
  console.log(req)
  res.send(resp);
};


UsuariosController.EliminarUsuario = async (req, res) => {
  const { id } = req.params;
console.log(req.params,'hhhhhhhhhh')
  try {
    // Buscar el usuario por su ID
    const usuario = await Usuarios.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Eliminar el usuario
    await usuario.destroy();

    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

module.exports = UsuariosController;








