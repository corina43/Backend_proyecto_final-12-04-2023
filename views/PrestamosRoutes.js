 const express = require('express');
 const router = express.Router();
 const PrestamosController = require('../controllers/PrestamosController');
 const { verifyToken} = require('../middlewares/verifyToken');
 const {isAdmin} = require('../middlewares/isAdmin');

 const{createPrestamo} = require('../controllers/PrestamosController');

 const{getPrestamos} = require('../controllers/PrestamosController')

//  router.post('/prestamos',PrestamosController.PrestamosProductos )


 router.get('/', verifyToken, getPrestamos);
 //router.get('/todoslosprestamos', verifyToken, isAdmin, getAllPrestamos);
 router.post('/crearprestamos', verifyToken, createPrestamo);

 module.exports = router;