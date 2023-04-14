const models = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Servicio para verificar si la estructura de la contraseña es válida - al menos una minúscula, una mayúscula y un número, mínimo 8 caracteres
const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("La contraseña debe tener al menos 8 caracteres");
  }

  if (!pass.match(/[a-z]/)) {
    throw new Error("La contraseña debe contener al menos una letra minúscula");
  }

  if (!pass.match(/[A-Z]/)) {
    throw new Error("La contraseña debe contener al menos una letra mayúscula");
  }

  if (!pass.match(/[0-9]/)) {
    throw new Error("La contraseña debe contener al menos un número");
  }
};

// Servicio para verificar si la estructura del correo electrónico es válida
const assertEmailIsValidService = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("El correo electrónico no es válido");
  }
};

// Servicio para verificar si el correo electrónico ya está registrado
const assertEmailIsUniqueService = async (email) => {
  const usuario = await models.Usuarios.findOne({
    where: { email: email },
  });
  if (usuario) {
    throw new Error("El correo electrónico ya está registrado");
  }
};

// Servicio para cifrar una contraseña y crear un hash de dicha contraseña
const encryptPasswordService = (pass) => {
  const hash = crypto
    .createHmac("sha512", '')
    .update(pass)
    .digest("base64");
  return hash;
};

// Servicio para crear un nuevo usuario en la base de datos
const createUserService = async (userBody) => {
  const hash = encryptPasswordService(userBody.password);
  userBody.password = hash;
  const usuario = await models.Usuarios.create({
    nombre: userBody.nombre,
    apellido: userBody.apellido,
    email: userBody.email,
    password: userBody.password,
    fecha_registro: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    id_rol: userBody.id_rol,
    fecha_nacimiento: userBody.fecha_nacimiento,
    ciudad: userBody.ciudad,
    pais: userBody.pais,
    generos_preferidos: userBody.generos_preferidos,
    biografia: userBody.biografia
  });
  return usuario;
};

// Servicio para generar un token
const generateToken = (usuario) => {
  const payload = {
    id: usuario.id,
    email: usuario.email,
    id_rol: usuario.id_rol
  };
  const secret = process.env.JWT_SECRET || 'tu_secreto';
  const options = { expiresIn: '365d' };

  return jwt.sign(payload, secret, options);
};

module.exports = {
    assertValidPasswordService,
    assertEmailIsValidService,
    assertEmailIsUniqueService,
    encryptPasswordService,
    createUserService,
    generateToken,
  }
