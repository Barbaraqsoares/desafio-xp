const Joi = require('joi');


const schema = Joi.object({
  codCliente: Joi.number().required().messages(),
  valor: Joi.number().greater(0).required(),
});

const saqueValidate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  
  if (!error) return next();
  
  if (error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  } 
  return res.status(422).json({ message: error.message });
};

module.exports = saqueValidate;