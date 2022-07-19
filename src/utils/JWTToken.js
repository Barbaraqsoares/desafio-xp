const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dçijbasfduihsdf';
const jwtConfig = {
  expiresIn: '120m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign({ payload }, JWT_SECRET, jwtConfig);

const authenticateToken = (token) => {
  if (!token) {
    const newError = { status: 401, message: 'Token not found' };
    throw newError;
  }
  try {
    const instrospection = jwt.verify(token, JWT_SECRET, jwtConfig);
    return instrospection;
  } catch (e) {
    const newError = { status: 401, message: 'Expired or invalid token' };
    throw newError;
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};