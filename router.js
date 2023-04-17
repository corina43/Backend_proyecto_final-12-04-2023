const express = require('express');
const router = require('express').Router();




const AuthRoutes = require('./views/AuthRoutes');

// const {authBearerMiddleware} = require("./middlewares/authMiddleware")

router.use('/auth', AuthRoutes);

// router.use(authBearerMiddleware)
// router.use('/usuarios', UsuariosRoutes);






module.exports = router;