 const express = require('express');
 const router = express.Router();
 const PrestamosController = require('../controllers/PrestamosController');
 const { verifyToken} = require('../middlewares/verifyToken');
 const {isAdmin} = require('../middlewares/isAdmin');

 const{CreatePrestamo} = require('../controllers/PrestamosController');

 const{getPrestamos} = require('../controllers/PrestamosController')

//  router.post('/prestamos',PrestamosController.PrestamosProductos )


 router.get('/', verifyToken, getPrestamos);
 //router.get('/todoslosprestamos', verifyToken, isAdmin, getAllPrestamos);
 router.post('/crearprestamos', verifyToken, CreatePrestamo);

 module.exports = router;