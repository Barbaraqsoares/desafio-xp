const { authenticateToken } = require('../utils/JWTToken');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  const payload = authenticateToken(token);
  
  if (!payload) {
    throw { status: payload.status, message: payload.message };
  }
  // leva o payload para outras camadas que precisem dele
  res.locals.payload = payload;
  next();
};

module.exports = validateToken;