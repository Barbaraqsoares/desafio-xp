const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dçijbasfduihsdf';
const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign({ payload }, JWT_SECRET, jwtConfig);

const authenticateToken = (token) => {
  if (!token) {
    throw { status: 401, message: 'Token not found' };
  }
  try {
    const instrospection = jwt.verify(token, JWT_SECRET, jwtConfig);
    return instrospection;
  } catch (e) {
    throw { status: 401, message: 'Expired or invalid token' };
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};