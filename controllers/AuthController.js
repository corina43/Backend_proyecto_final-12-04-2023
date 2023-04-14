const { Usuarios } = require('../models');
const {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  createUserService,
  encryptPasswordService,
  generateToken,

} = require('../services/AuthServices');
require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

const authRegisterController = async (req, res) => {
  const body = req.body;

  // Verificar que la contraseña tenga una estructura válida
  try {
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Contraseña inválida, ${error.message}`);
    return;
  }

  // Verificar que el email tenga una estructura válida
  try {
    assertEmailIsValidService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Email inválido, ${error.message}`);
    return;
  }

  // Verificar que el email no esté registrado previamente
  try {
    assertEmailIsUniqueService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`El email ya está registrado`);
    return;
  }

  // Crear el nuevo usuario
  try {
    const usuarioCreado = await createUserService(body);
    res.status(201).json(usuarioCreado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const authLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Buscar el usuario por su email
    const usuarioEncontrado = await Usuarios.findOne({
      where: { email: email },
    });

    if (!usuarioEncontrado) {
      res.status(401).json({ message: "Email incorrecto" });
      return;
    }

    // Cifrar la contraseña proporcionada y verificar que coincida con el hash en la base de datos
    const hashedPassword = encryptPasswordService(password);

    if (hashedPassword !== usuarioEncontrado.password) {
      res.status(401).json({ message: "Contraseña o email incorrectos" });
      return;
    }



    // Crear un JSON Web Token y entregárselo al usuario
    const secret = process.env.JWT_SECRET;

    if (secret.length < 10) {
      throw new Error("JWT_SECRET no está configurado");
    }

    const jwt = jsonwebtoken.sign(
      {
        email: usuarioEncontrado.email,
        id: usuarioEncontrado.id,
        role: usuarioEncontrado.id_rol.toLowerCase(),
      },
      secret
    );
    res.status(200).json({
      message: "Inicio de sesión con exito",
      tu_token_es: jwt,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  authLoginController,
  authRegisterController,
};
