const express = require('express');
 const router = express.Router();
 const ProductosController = require('../controllers/ProductosController');
// const isAdmin = require('../middlewares/isAdmin');
// const verifyToken = require('../middlewares/verifyToken');
// // Rutas de Productos

// //router.post('/productos', ProductosController.createProduct);
router.get('/', ProductosController.getAll);
// // router.get('/productos/:id', ProductosController.getProductById);
// // router.put('/productos/:id', verifyToken, isAdmin, ProductosController.updateProduct);

 module.exports = router;