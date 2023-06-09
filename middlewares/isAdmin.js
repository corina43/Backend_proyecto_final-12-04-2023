const isAdmin = (req, res, next) => {
  try {
    const { id_rol } = req;

    if (id_rol !== 1) {
      return res.status(403).json({
        success: false,
        message: 'Acceso denegado. No tienes permiso para realizar esta acción.',
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Algo salió mal.',
      error: error.message,
    });
  }
};

module.exports = isAdmin;



