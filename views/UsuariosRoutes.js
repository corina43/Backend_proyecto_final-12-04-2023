//routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const {verifyToken} = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Rutas para usuarios

router.get('/:email', verifyToken, UsuariosController.getInformation);
router.get('/profile', verifyToken, UsuariosController.verUsuariosPerfil);
router.put('/perfil', verifyToken, UsuariosController.editarPerfil);
router.get('/todos', verifyToken, isAdmin, UsuariosController.verUsuarios);
router.get('/all', verifyToken, isAdmin, UsuariosController.getAll);


module.exports = router;










