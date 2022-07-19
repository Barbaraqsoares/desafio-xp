const { Cliente } = require('../../models');

const getclienteByClienteId = async (id) => {
  const cliente = await Cliente.findOne({ where: { id }, attributes: { exclude: ['nomeCliente', 'email', 'senha']}});

  if (!cliente) {
    return { status: 400, message: 'Invalid fields' };
  }
  return cliente;
}

module.exports = {
  getclienteByClienteId,
}