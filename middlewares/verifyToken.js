const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  
  try {

    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(505).json(
        { 
          succes: false,
          message: 'You shall not pass!!.' 
        }
      );
    };

    const [ bearer, token ]  = authorization.split(" ")

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
// console.log(decoded)

    req.id_usuario = decoded.id_usuario;
    req.nombre = decoded.nombre;
    req.id_rol = decoded.id_rol;


    next();
  } catch (error) {
    return res.status(500).json(
      {
        succes: false,
        message: "Something went wrong.",
        error: error.message
      }
    );
  };
};

module.exports = verifyToken;