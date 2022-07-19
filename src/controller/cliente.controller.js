const clienteService = require('../service/cliente.service');

const getclienteByClienteId = async (req, res, next) => {
  const { id } =  req.params;

  const cliente = await clienteService.getclienteByClienteId(id);
  return res.status(201).json(cliente);
}

module.exports = {
  getclienteByClienteId,
}