const AuthController = {};
const { Usuarios } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarios = require('../models/usuarios');

// const usuariosController = {};

// AuthController.createUserProfile = async (req, res) => {
//     try {
       
//         const { nombre, apellido, email, password, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;
//         console.log(req,body);
//         if (!password) {
//             return res.status(506).json({
//                 success: false,
//                 message: "Debe proporcionar una contraseña"
//             });
//         }

//         const encryptedPassword = bcrypt.hashSync(password, 10);

//         if (nombre === "" || apellido === "" || email === "" || password === "") {
//             return res.status(506).json({
//                 success: false,
//                 message: "Debe completar todos los campos"
//             });
//         } else if (!/.{8,}$/.test(password)) {
//             return res.status(507).json({
//                 success: false,
//                 message: "Su contraseña debe contener al menos ocho caracteres."
//             });
//         } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
//             return res.status(508).json({
//                 success: false,
//                 message: "Su contraseña debe contener al menos una letra y un número."
//             });
//         }

//         const newUser = await Usuarios.create({
//             nombre: nombre,
//             apellido: apellido,
//             email: email,
//             password: encryptedPassword,
//             fecha_nacimiento: fecha_nacimiento,
//             ciudad: ciudad,
//             pais: pais,
//             generos_preferidos: generos_preferidos,
//             biografia: biografia,
//             id_rol: 2
//         });

//         return res.json({
//             success: true,
//             message: "Usuario registrado",
//             data: newUser
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: 'Algo salió mal',
//             error: error.message
//         });
//     }
// };

AuthController.createUserProfile = async (req, res) => {
    try {
        const { nombre, apellido, email, password, fecha_nacimiento, ciudad, pais, generos_preferidos, biografia } = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        if (nombre === "" || apellido === "" || email === "" || password === "" || fecha_nacimiento === "" || ciudad === "" || pais === "" || generos_preferidos=== "" || biografia=== "" ) {
            return res.status(506).json({
                success: false,
                message: "Debe completar todos los campos"
            });
        } else if (!/.{8,}$/.test(password)) {
            return res.status(507).json({
                success: false,
                message: "Su contraseña debe contener al menos ocho caracteres."
            });
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            return res.status(508).json({
                success: false,
                message: "Su contraseña debe contener al menos una letra y un número."
            });
        }

        const newUser = await Usuarios.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: encryptedPassword,
            fecha_nacimiento: fecha_nacimiento,
            ciudad: ciudad,
            pais: pais,
            generos_preferidos: generos_preferidos,
            biografia: biografia,
            id_rol: 2
        });

        return res.json({
            success: true,
            message: "Usuario registrado",
            data: newUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Algo salió mal',
            error: error.message
        });
    }
};







AuthController.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Usuarios.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(501).json({
                success: false,
                message: 'Credenciales inválidas'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(501).json({
                success: false,
                message: 'Credenciales inválidas'
            });
        }

        const token = jwt.sign(
            {
               usuariosnombre: usuarios.nombre, 
              usuariosid: usuarios.id,
              usuariosemail:usuarios.email,
              id_rol: usuarios.id_rol


            },
            process.env.JWT_SECRET,
            {
                expiresIn: '300d'
            }
        );

        return res.json({
            success: true,
            message: "hola usuario.",
            data: token
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Algo salió mal',
            error: error.message
        });
    }
};


module.exports = AuthController;
