//routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const {verifyToken} = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Rutas para usuarios

//router.get('/:email', verifyToken, UsuariosController.getInformation);
router.get('/profile', verifyToken, UsuariosController.verUsuariosPerfil);
router.put('/perfil', verifyToken, UsuariosController.editarPerfil);
router.get('/todos', verifyToken, isAdmin, UsuariosController.verUsuarios);
router.get('/all', verifyToken, isAdmin, UsuariosController.getAll);
//router.get('/allprestamos', verifyToken, isAdmin, UsuariosController.getAllPrestamos);
router.get('/prestamos', verifyToken, isAdmin, UsuariosController.getAllPrestamos);
 router.get('/myloans',verifyToken, UsuariosController.getMyPrestamos)
 router.get('/prestamos/:email',verifyToken, UsuariosController.ObtenerPrestamosPorEmail)
module.exports = router;










