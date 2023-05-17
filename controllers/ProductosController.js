const { Productos } = require('../models');
const models = require('../models/index');

const ProductosController = {};


ProductosController.getAll = async (req,res) =>{
  let resp = await models.Productos.findAll();
  console.log('Data sent from controller:', resp);
  res.send(resp);
};


ProductosController.getByGenero = async (req, res) => {
  let genero = req.params.genero;
  let resp = await models.Productos.findAll({
    attributes: ['titulo', 'genero'],
    where: { genero: genero }
  })
  console.log(res,req)
  res.send(resp);
};


ProductosController.getByTitulo = async (req, res) => {
  let titulo = req.params.titulo;
  let resp = await models.Productos.findAll({
 
    where: { titulo: titulo }
  })
  // console.log(res,req)
  res.send(resp);
};

ProductosController.getProductById = async (req, res) => {
let id = req.params.id;
let resp = await models.Productos.findAll({
  where: {id : id}
});
res.send(resp);
};





// Endpoint para crear un nuevo producto
ProductosController.crearProducto = async (req, res) => {
  try {
    // Obtener los datos del producto del cuerpo de la solicitud
    const { titulo, autor, descripcion, fecha_publicacion, tipo, categoria, genero, duracion, formato, poster_path } = req.body;

    // Crear el nuevo producto en la base de datos
    const nuevoProducto = await Productos.create({
      titulo,
      autor,
      descripcion,
      fecha_publicacion,
      tipo,
      categoria,
      genero,
      duracion,
      formato,
      poster_path,
    });

    // Enviar una respuesta con el nuevo producto creado
    res.status(201).json({
      mensaje: 'Producto creado exitosamente',
      producto: nuevoProducto,
    });
  } catch (error) {
    // Manejar errores
    console.error('Error al crear el producto:', error);
    res.status(500).json({
      mensaje: 'Ocurrió un error al crear el producto',
      error: error.message,
    });
  }
}





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



