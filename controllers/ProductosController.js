const { Productos } = require('../models');
const models = require('../models/index');

const ProductosController = {};


ProductosController.getAll = async (req,res) =>{
  let resp = await models.Productos.findAll();
  res.send(resp);
}

// ProductosController.createProduct = async (req, res) => {
//   try {
//     const { titulo, autor, descripcion, fecha_publicacion, tipo, categoria, genero, duracion, formato } = req.body;

//     const newProduct = await Productos.create({
//       titulo,
//       autor,
//       descripcion,
//       fecha_publicacion,
//       tipo,
//       categoria,
//       genero,
//       duracion,
//       formato,
//     });

//     return res.json({
//       success: true,
//       message: 'Producto creado',
//       data: newProduct,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: 'Algo salió mal',
//       error: error.message,
//     });
//   }
// };
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



