 const express = require('express');
 const router = require('express').Router();

const AuthController = require('../controllers/AuthController');
// const verifyToken = require('../middlewares/verifyToken');


 router.post('/register', AuthController.createUserProfile);
 router.post('/login', AuthController.userLogin);

module.exports = router;