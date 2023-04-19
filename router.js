// const express = require('express');
const router = require('express').Router();
// const verifyToken = require('../middlewares/verifyToken');
//const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRoutes = require('./views/UsuariosRoutes');
const AuthRoutes = require('./views/AuthRoutes');
const ProductosRoutes = require('./views/ProductosRoutes');


router.use('/auth', AuthRoutes);
router.use('/usuarios', UsuariosRoutes);
router.use('/productos', ProductosRoutes);





 module.exports = router;