const express = require('express');
 const router = express.Router();
 const ProductosController = require('../controllers/ProductosController');
 const isAdmin = require('../middlewares/isAdmin');
 const verifyToken = require('../middlewares/verifyToken');
// // Rutas de Productos

router.post('/newproducto', ProductosController.crearProducto);
router.get('/', ProductosController.getAll);
router.get('/:id', ProductosController.getProductById);
router.put('/productos/:id', ProductosController.updateProduct);
router.get('/genero/:genero', ProductosController.getByGenero);
router.get('/titulo/:titulo', ProductosController.getByTitulo);

 module.exports = router;