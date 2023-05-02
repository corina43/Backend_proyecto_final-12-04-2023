 const express = require('express');
 const router = express.Router();
 const PrestamosController = require('../controllers/PrestamosController');
 const { verifyToken} = require('../middlewares/verifyToken');
 const {isAdmin} = require('../middlewares/isAdmin');
 const { ObtenerHistorialPrestamos } = require('../controllers/PrestamosController');
 const{getAllPrestamos} = require('../controllers/PrestamosController');
const{obtenerPrestamosPorUsuario} = require('../controllers/PrestamosController')
//  router.post('/prestamos',PrestamosController.PrestamosProductos )

 //router.get('/:email',verifyToken, PrestamosController.ObtenerPrestamosPorEmail);

 router.get('/historial/:id_usuario', ObtenerHistorialPrestamos);
 //router.get('/todoslosprestamos',verifyToken, isAdmin, getAllPrestamos)
 //router.get('/prestamos', verifyToken, obtenerPrestamosPorUsuario);

 module.exports = router;