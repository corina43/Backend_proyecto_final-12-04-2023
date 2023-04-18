// routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('./middlewares/isAdmin');

// Rutas para usuarios

router.get('/perfil', verifyToken, UsuariosController.verPerfil);
router.put('/perfil', verifyToken, UsuariosController.editarPerfil);

// Rutas de administrador para usuarios

router.post('/admin/usuarios', verifyToken, isAdmin, UsuariosController.createAdmin);
router.get('/admin/usuarios', verifyToken, isAdmin, UsuariosController.getAllUsers);
router.get('/admin/usuarios/:id', verifyToken, isAdmin, UsuariosController.getUserById);
router.put('/admin/usuarios/:id', verifyToken, isAdmin, UsuariosController.updateUser);
router.delete('/admin/usuarios/:id', verifyToken, isAdmin, UsuariosController.deleteUser);


module.exports = router;










