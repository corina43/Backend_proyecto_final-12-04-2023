const express = require('express');
const router = express.Router();
const ProductosController = require('./controllers/ProductosController');

// Rutas de Productos

router.post('/productos', verifyToken, isAdmin, ProductosController.createProduct);
router.get('/productos', ProductosController.getAllProducts);
router.get('/productos/:id', ProductosController.getProductById);
router.put('/productos/:id', verifyToken, isAdmin, ProductosController.updateProduct);
