// routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/perfil', verifyToken, UsuariosController.verPerfil);
router.put('/perfil', verifyToken, UsuariosController.editarPerfil);


module.exports = router;










