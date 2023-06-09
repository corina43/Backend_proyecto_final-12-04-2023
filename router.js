// const express = require('express');
const router = require('express').Router();

const UsuariosRoutes = require('./views/UsuariosRoutes');
const AuthRoutes = require('./views/AuthRoutes');
const ProductosRoutes = require('./views/ProductosRoutes');
const PrestamosRoutes = require('./views/PrestamosRoutes');

router.use('/auth', AuthRoutes);
router.use('/usuarios', UsuariosRoutes);
router.use('/productos', ProductosRoutes);
router.use('/prestamos', PrestamosRoutes);




 module.exports = router;