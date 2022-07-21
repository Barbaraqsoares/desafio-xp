const Joi = require('joi');


const schema = Joi.object({
  codCliente: Joi.number().required(),
  valor: Joi.number().greater(0).required(),
});

const saqueValidate = (req, _res, next) => {
  const { error } = schema.validate(req.body);
  
  if (!error) return next();
  
  if (error.message.includes('required')) {
    throw { status: 400, message: error.message };
  };
  throw { status: 422, message: error.message };
};

module.exports = saqueValidate;