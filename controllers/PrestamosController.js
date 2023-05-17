
const { Prestamos ,Usuarios ,Productos } = require('../models');
const models = require('../models/index');

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

const CreatePrestamo = async (req, res) => {
  try {
    const userId = req.id;
    const { id_producto, fecha_inicio, fecha_fin,puntuacion,comentario_producto } = req.body;

    const user = await Usuarios.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'El usuario no existe'
      });
    }

    const producto = await Productos.findByPk(id_producto);

    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'El producto no existe'
      });
    }

    const prestamo = await Prestamos.create({
      id_usuario: userId,
      id_producto,
      fecha_inicio,
      fecha_fin,
      puntuacion,
      comentario_producto
    });

    res.status(201).json({
      success: true,
      message: 'Préstamo creado exitosamente',
      data: prestamo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el préstamo',
      error: error.message
    });
  }
};












  module.exports = {
  
    getPrestamos,
   
    CreatePrestamo,
  };