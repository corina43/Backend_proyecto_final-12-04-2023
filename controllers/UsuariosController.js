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

UsuariosController.editarPerfil = async (req, res) => {
  try {
    const { nombre, apellido, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;

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



UsuariosController.getAllPrestamos = async (req, res) => {
  let resp = await models.Prestamos.findAll();
  console.log(req)
  res.send(resp);
};


UsuariosController.getMyPrestamos = async (req, res) => {
  try {
    let resp = await models.Prestamos.findAll({
      where: {
        usuario_id: req.auth.id_usuario,
        fecha_fin: null,
      },
      include: models.Productos,
    });
    res.status(200).json({
      resp,
      message: "Here are your loans",
    });
  } catch (error) {
    res.json({ message: "There are no loans" });
  }
};
UsuariosController.ObtenerPrestamosPorEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await Usuarios.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const prestamos = await Prestamos.findAll({
      where: { id_usuario: usuario.id },
      include: [{ model: Productos }],
    });

    res.status(200).json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports = UsuariosController;








