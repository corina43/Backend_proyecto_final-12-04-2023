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

    req.id = decoded.id;
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


const isValidRole = (role) => (req, res, next) => {
  if (req.auth?.role === role) {
    
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

const isValidUser = (email) => async (req, res, next) => {
  email = req.params.email || req.body.email
  console.log(email)
  console.log(req.auth.email)
  if (req.auth?.email === email) {
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

module.exports = {
  verifyToken,
  isValidRole,
  isValidUser
}