
const { Prestamos ,Usuarios ,Productos } = require('../models');
const models = require('../models/index');

//const PrestamosController = {};



// const ObtenerHistorialPrestamos = async (req, res) => {
//   const { id_usuario } = req.params;
//   try {
//     const historialPrestamos = await Prestamos.findAll({
//       where: { id_usuario: id_usuario },
      
//     });
//     res.status(200).json({ success: true, data: historialPrestamos });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error al obtener el historial de préstamos.'});
//   }
// };



  const getPrestamos = async (req, res) => {
  try {
    const userId = req.id;

    const user = await Usuarios.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'El usuario no existe'
      });
    }

    const prestamos = await Prestamos.findAll({
      where: { id_usuario: userId },
      include: { model: Productos }
    });

    res.status(200).json({
      success: true,
      data: prestamos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los préstamos',
      error: error.message
    });
  }
};









  module.exports = {
    //ObtenerHistorialPrestamos,
    getPrestamos,
  };