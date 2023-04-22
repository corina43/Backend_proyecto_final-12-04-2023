const PrestamosController = {};

const models = require('../models/index');
const db = require('../models');

const obtenerPrestamosPorEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await db.Usuarios.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const prestamos = await db.Prestamos.findAll({
      where: { id_usuario: usuario.id },
      include: [{ model: db.Productos }],
    });

    res.status(200).json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



// Prestamo de  un producto
// PrestamosControllers.PrestamosProductos = async (req, res) => {
//   try {
//     let body = req.body;
//     delete body.fecha_inicio
//     delete body.fecha_fin
//     if (body.email === req.auth?.email) {
//       let productos = await models.Productos.findOne({
//         where: { titulo: body.name }
//       })
//       let repeated = await models.Prestamos.findOne({
//         where: {
//           id_usuario: req.auth.id,
//           id_producto: id_producto,
//           fecha_fin : null
//         }
//       })
//       if (!repeated) {
//         let resp = await models.Prestamos.create({
//           fecha_inicio: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
//           fecha_fin : null,
//           id_usuario: req.auth.id,
        
//         })
//         res.status(200).json({
//           resp,
//           email: req.auth?.email,
//           message: "Prestamo realizado"
//         })
//       } else {
//         res.json({
//           message: "Lo siento no puedes prestar libro"
//         })
//       }
//     }
//   } catch (error) {
//     res.json({ message: "Error" })
//     console.error(error)
//   }

// }


PrestamosController.getMiPrestamos = async (req, res) => {
    let resp = await models.Prestamos.findAll({
      where: {
       id: req.auth.id
      }
    })
    res.status(200).json({
      resp,
      message: "Here are your loans"
    })
  }

  module.exports = { obtenerPrestamosPorEmail,PrestamosController };