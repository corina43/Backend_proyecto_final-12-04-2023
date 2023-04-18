const { Productos } = require('../models');

const ProductosController = {};

ProductosController.createProduct = async (req, res) => {
  try {
    const { titulo, autor, descripcion, fecha_publicacion, tipo, categoria, genero, duracion, formato } = req.body;

    const newProduct = await Productos.create({
      titulo,
      autor,
      descripcion,
      fecha_publicacion,
      tipo,
      categoria,
      genero,
      duracion,
      formato,
    });

    return res.json({
      success: true,
      message: 'Producto creado',
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};

ProductosController.getProducts = async (req, res) => {
  try {
    const products = await Productos.findAll();

    return res.json({
      success: true,
      message: 'Lista de productos',
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};

ProductosController.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Productos.findByPk(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado',
      });
    }

    return res.json({
      success: true,
      message: 'Producto encontrado',
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};

ProductosController.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, descripcion, fecha_publicacion, tipo, categoria, genero, duracion, formato } = req.body;

    const product = await Productos.findByPk(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado',
      });
    }

    await product.update({
      titulo,
      autor,
      descripcion,
      fecha_publicacion,
      tipo,
      categoria,
      genero,
      duracion,
      formato,
    });

    return res.json({
      success: true,
      message: 'Producto actualizado',
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};


ProductosController.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Productos.findByPk(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado',
      });
    }

    await product.destroy();

    return res.json({
      success: true,
      message: 'Producto eliminado',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Algo salió mal',
      error: error.message,
    });
  }
};

module.exports = ProductosController;



