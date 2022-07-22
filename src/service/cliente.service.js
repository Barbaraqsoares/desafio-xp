const { Cliente } = require('../../models');
const { generateJWTToken } = require('../utils/JWTToken');

const loginClient = async (email) => {
  const user = await Cliente.findOne({ where: { email } });
  if (!user) {
    throw { status: 422, message: 'Invalid fields' };
  }
  return user;
};

const createClient = async (nomeCliente, email, senha, saldo) => {
  const hasUser = await Cliente.findOne({ where: { email } });
  
  if (hasUser) {
    throw { status: 422, message: 'Usuário já cadastrado!' };
  }

  await Cliente.create({ nomeCliente, email, senha, saldo });
  
  const token = generateJWTToken(email);

  return token;
};

const custumerBalance = async (codCliente) => {
  const cliente = await Cliente.findOne({ where: { id: codCliente }, attributes: { exclude: ['nomeCliente', 'email', 'senha']}});

  return cliente;
}
const getBalanceByClienteId = async (id) => {
  const cliente = await custumerBalance(id);

  if (!cliente) {
    throw { status: 400, message: 'Invalid fields' };
  }
  return cliente;
}

const getWithdrawMoney = async (codCliente, valor) => {
  const balance = await custumerBalance(codCliente);

  if (valor > balance.dataValues.saldo) {
    throw { status: 404, message: "Insufficient founds"}
  }

  const updateSaldo = balance.dataValues.saldo - valor;

  await Cliente.update({ saldo: updateSaldo}, { where: { id: codCliente }})
  
  return updateSaldo;
}

const getDeposit = async (codCliente, valor) => {
  const balance = await custumerBalance(codCliente);
  
  const updateSaldo = balance.dataValues.saldo + valor;

  await Cliente.update({ saldo: updateSaldo}, { where: { id: codCliente }})
  
  return updateSaldo;
}

module.exports = {
  loginClient,
  createClient,
  getBalanceByClienteId,
  getWithdrawMoney,
  getDeposit,
}
