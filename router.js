const express = require('express');
const router = require('express').Router();
// const verifyToken = require('../middlewares/verifyToken');
const UsuariosRoutes = require('./views/UsuariosRoutes');
const AuthRoutes = require('./views/AuthRoutes');



router.use('/auth', AuthRoutes);
router.use('/usuarios', UsuariosRoutes);






 module.exports = router;