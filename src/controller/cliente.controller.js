const clienteService = require('../service/cliente.service');

const getclienteByClienteId = async (req, res, _next) => {
  const { id } =  req.params;

  const cliente = await clienteService.getclienteByClienteId(id);

  if (cliente.message) {
    return res.status(cliente.status).json(cliente);
  }
  return res.status(201).json(cliente);
}

const getWithdrawMoney = async (req, res, _next) => {
  const { codCliente, valor } = req.body;

  const withdraw = await clienteService.getWithdrawMoney(codCliente, valor);

  if (withdraw.message) {
    return res.status(withdraw.status).json(withdraw);
  }

  return res.status(201).json(withdraw);
}

module.exports = {
  getclienteByClienteId,
  getWithdrawMoney,
}