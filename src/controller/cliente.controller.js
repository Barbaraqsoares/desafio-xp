const clienteService = require('../service/cliente.service');
const { generateJWTToken } = require('../utils/JWTToken');

const loginClient = async (req, res, _next) => {
  const { email } = req.body;

  const user = await clienteService.loginClient(email);
  
  if (user.message) {
    throw { status: 400, message: user.message };
  }
  
  const token = generateJWTToken(email);
  
  return res.status(200).json({ token });
};

const createClient = async (req, res, _next) => {
  const { nomeCliente, email, senha, saldo } = req.body;
  
  const user = await clienteService.createClient(nomeCliente, email, senha, saldo);
  
  if (user.message) {
    throw { status: user.status, message: user.message };
  }
  
  const token = generateJWTToken(email);
  
  return res.status(201).json({ token });
};

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

  return res.status(201).json({ message: `Saque realizado com sucesso. Seu novo saldo é: ${ withdraw }` });
}

const getDeposit = async (req, res, _next) => {
  const { codCliente, valor } = req.body;

  const deposit = await clienteService.getDeposit(codCliente, valor);

  return res.status(201).json({ message: `Deposito realizado com sucesso. Seu novo saldo é: ${ deposit }` });
}

module.exports = {
  loginClient,
  createClient,
  getclienteByClienteId,
  getWithdrawMoney,
  getDeposit,
}