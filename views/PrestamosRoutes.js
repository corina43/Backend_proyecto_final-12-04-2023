const express = require('express');
 const router = express.Router();
 const PrestamosController = require('../controllers/PrestamosController');
 const {isValidUser} = require('../middlewares/verifyToken');

//  router.post('/prestamos',PrestamosController.PrestamosProductos )
 //router.get('/misPrestamos/:email',isValidUser(), PrestamosController.getMiPrestamos)
 router.get('/:email', PrestamosController.obtenerPrestamosPorEmail);
 module.exports = router;