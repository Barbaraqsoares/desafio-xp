const { Cliente } = require('../../models');

const custumerBalance = async (codCliente) => {
  const cliente = await Cliente.findOne({ where: { id: codCliente }, attributes: { exclude: ['nomeCliente', 'email', 'senha']}});

  return cliente;
}
const getclienteByClienteId = async (id) => {
  const cliente = await custumerBalance(id);

  if (!cliente) {
    return { status: 400, message: 'Invalid fields' };
  }
  return cliente;
}

const getWithdrawMoney = async (codCliente, valor) => {
  const balance = await custumerBalance(codCliente);

  if (valor > balance.dataValues.saldo) {
    return { status: 404, message: "Insufficient founds"}
  }

  const updateValue = await Cliente.update({ where: { id: codCliente }})
  
  return valor;
}

module.exports = {
  getclienteByClienteId,
  getWithdrawMoney,
}
