const { Carteira, Acao, Cliente, sequelize } = require('../../models');

const infoAction = async (codAtivo) => {
  const acao = await Acao.findOne({ 
    where: { id: codAtivo },
    attributes: { exclude: ['nomeAcao', 'id']}
  });
  return acao;
}

const infoCliente = async (codCliente) => {
  const saldoCliente = await Cliente.findOne({
    where: { id: codCliente },
    attributes: { exclude: ['nomeCliente', 'senha', 'email']}
  });
  return saldoCliente;
}

const infoCarteira = async (codCliente, codAtivo) => {
  const carteiraDeAcoes = await Carteira.findOne({
    where: { idCliente: codCliente, idAcao: codAtivo },
    attributes: { exclude: ['id']}
  });

  if (!carteiraDeAcoes) {
    return { status: 400, message: 'Você não possui essa ação!'};
  }

  const data = carteiraDeAcoes.dataValues;
  return data;
}

const getBuyShares = async (codCliente, codAtivo, qtdeAtivo) => {
  const acao = await infoAction(codAtivo);
  const saldoCliente = await infoCliente(codCliente);
  
  const { id, saldo } = saldoCliente.dataValues;
  const { qntAcao, valorAcao } = acao.dataValues;

  if (qntAcao < qtdeAtivo) {
    return { status: 400, message: 'Quantidade inexistente!'};
  }
  
  const purchaseValue = valorAcao * qtdeAtivo;

  if (purchaseValue >= saldo) {
    return { status: 400, message: 'Saldo insuficiente!'};
  }

  const newBalance = saldo - purchaseValue;
  const newAmountOfAction = qntAcao - qtdeAtivo;

  await sequelize.transaction(async (transaction) => {
    await Cliente.update({ saldo: newBalance }, { where: { id: codCliente }}, { transaction });
    
    const thereIsAction = await Carteira.findOne({ where: { idCliente: codCliente, idAcao: codAtivo }});
    
    if (!thereIsAction) {
      await Carteira.create({ idCliente: id, idAcao: codAtivo, qntAcao: qtdeAtivo }, { transaction });
    } else {
        const { qntAcao: qntAcaoCliente } = thereIsAction.dataValues;
        const amountOfCustomerAction =  qntAcaoCliente + qtdeAtivo;
        await Carteira.update({ qntAcao: amountOfCustomerAction }, { where: { idCliente: codCliente, idAcao: codAtivo }});
        await Acao.update({ qntAcao: newAmountOfAction }, { where: { id: codAtivo }});
    }
  });

  return { status: 201, message: 'Successful purchase!'}
}

const getSellShares = async (codCliente, codAtivo, qtdeAtivo) => {
  const acao = await infoAction(codAtivo);
  const saldoCliente = await infoCliente(codCliente);
  const carteiraDeAcoes = await infoCarteira(codCliente, codAtivo);
  
  const { id, saldo } = saldoCliente.dataValues;
  const { qntAcao, valorAcao } = acao.dataValues;
  
  if (qntAcaoCliente < qtdeAtivo) {
    return { status: 400, message: 'Quantidade inexistente!'};
  }
  
  const purchaseValue = valorAcao * qtdeAtivo;

  const newBalance = saldo + purchaseValue;

  const newAmountOfAction = qntAcao + qtdeAtivo;

  const newActionsBalance = qntAcaoCliente - qtdeAtivo;

  await sequelize.transaction(async (transaction) => {
    await Cliente.update({ saldo: newBalance }, { where: { id: codCliente }}, { transaction });

    await Carteira.update({ qntAcao: newActionsBalance }, { where: { idCliente: codCliente, idAcao: codAtivo }}, { transaction });

    await Acao.update({ qntAcao: newAmountOfAction }, { where: { id: codAtivo }});
  });

  return { status: 201, message: 'Successful purchase!'}
}

module.exports = {
  getSellShares,
  getBuyShares,

}