//routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Rutas para usuarios

router.get('/perfil', verifyToken, UsuariosController.verUsuariosPerfil);
router.put('/perfil', verifyToken, UsuariosController.editarPerfil);
router.get('/todos', verifyToken, isAdmin, UsuariosController.verUsuarios);



module.exports = router;










