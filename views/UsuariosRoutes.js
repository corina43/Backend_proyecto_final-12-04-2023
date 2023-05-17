//routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const {verifyToken} = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Rutas para usuarios


router.get('/profile', verifyToken, UsuariosController.verUsuariosPerfil);
router.patch('/perfil', verifyToken, UsuariosController.editarPerfil);
router.get('/todos', verifyToken, isAdmin, UsuariosController.verUsuarios);
router.get('/all', verifyToken, isAdmin, UsuariosController.getAll);
router.get('/allprestamos', verifyToken, isAdmin, UsuariosController.getAllPrestamos);
router.get('/prestamos', verifyToken, isAdmin, UsuariosController.getAllPrestamos);

// Ver usuarios existentes(admin only)
router.get('/activos', isAdmin, UsuariosController.getAllActiveUsers)
// Ver usuarios borrados (admin only)
router.get('/usuariosdelete', isAdmin, UsuariosController.getAllDeletedUsers)

// Borrar usuarios - ADMIN ONLY
router.delete('/delete/:id', verifyToken,isAdmin, UsuariosController.EliminarUsuario);

module.exports = router;










