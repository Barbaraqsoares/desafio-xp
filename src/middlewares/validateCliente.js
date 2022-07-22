const Joi = require('joi');

const clientSchema = Joi.object({
  nomeCliente: Joi.string().min(2).required().messages({
    'string.min': '400|{{#label}} length must be at least 2 characters long',
  }),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required().messages({
    'string.min': '400|{{#label}} length must be at least 6 characters long',
  }),
  saldo: Joi.number(),
}).messages({
  'any.required': '400|{{#label}} is required',
  'string.base': '400| Must be a string',
  'string.empty': '400|Fields cannot be empty',
  'email.base': '400|{{#label}} must be a valid email',
  'string.email': '400|{{#label}} must be a valid email',
  'saldo.base': '400|{{#label}} must be a number',
});

const validateClient = (req, res, next) => {
  const { error } = clientSchema.validate(req.body);
 
  if (error) {
    const [code, message] = error.message.split('|');
    throw { status: code, message: message };
  }
  next();
};

module.exports = validateClient;