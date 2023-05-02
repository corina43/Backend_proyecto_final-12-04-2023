
const { Prestamos ,Usuarios } = require('../models');
// const models = require('../models/index');
// const db = require('../models');
const PrestamosController = {};



const ObtenerHistorialPrestamos = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const historialPrestamos = await Prestamos.findAll({
      where: { id_usuario: id_usuario },
      // include: [
      //   { association: 'Usuarios' },
        // { association: 'Productos' }
      
    });
    res.status(200).json({ success: true, data: historialPrestamos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener el historial de préstamos.'});
  }
};


// PrestamosController.getAll = async (req, res) => {
//   let resp = await models.Prestamos.findAll();
//   console.log(req)
//   res.send(resp);
// }

//  const getAllPrestamos = async (req, res) => {
//   try {
//       let prestamosActivos = await Prestamos.findAll({
//           include: {
//           model: Usuarios,
//           attributes: ['id'],
//           },
//           attributes: ['producto_id', 'usuario_id']
//       });
//           res.status(200).json({
//           message: `These are all the appointment in the calendar`,
//           prestamosActivos,
//       });   
//   } catch (error) {
//       return res.status(500).json({
//           success: false,
//           message: "Ups, something were wrong",
//           error: error.message
//       })
//   }
// }


// const ObtenerPrestamosPorEmail = async (req, res) => {
//   try {
//     const { email } = req.params;
//     const usuario = await db.Usuarios.findOne({ where: { email } });

//     if (!usuario) {
//       return res.status(404).json({ error: 'Usuario no encontrado' });
//     }

//     const prestamos = await db.Prestamos.findAll({
//       where: { id_usuario: usuario.id },
//       include: [{ model: db.Productos }],
//     });

//     res.status(200).json(prestamos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };

// PrestamosController.getAllPrestamos = async (req,res) => {
  
//   try {

//     const prestamos = await Prestamos.findAll(
//       {
//         include: 
//         {
//           model: Productos,
//           attributes: 
//           {
//             exclude: ["id", "id_productos"]
//           }
//         },
//         // attributes: 
//         // {
//         //   exclude: ["patient_id", "doctor_id"]
//         // }      
//       }
//     );

//     if (!prestamos) {
//       return res.status(503).json({ message: 'Not existing appointments.' });
//     }

//     return res.json(
//       {
//         succes: true,
//         message: 'Appointment found.',
//         data: prestamos,
//       }
//     );
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Something went wrong.' });
//   };
// };

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







  module.exports = {
    ObtenerHistorialPrestamos,
    // ObtenerPrestamosPorEmail,
    //getAllPrestamos
    // ... otras funciones del controlador
  };