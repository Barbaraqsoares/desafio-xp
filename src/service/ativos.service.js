const sequelize = require('sequelize');
const { Acao, Carteira } = require('../../models');

const getAction = async (codAtivo) => {
  const acao = await Acao.findOne({ where: { id: codAtivo }});

  if (acao === null) {
    throw { status: 404, message: "Não possui este ativo!"}
  };
  
  return acao;
}

const getAllActionsByClient = async (codCliente, page = 0) => {
  const itemsPerPage = 20;
  const actionsByClient = await Carteira.findAll({
    where: { idCliente: codCliente }, 
    include: [{ 
      model: Acao,
      as: 'Acoes',
      attributes: { exclude:
        ['id', 'qntAcao'] }
    }],
    attributes: { exclude: 'id' },
    raw: true,
    limit: itemsPerPage,
    offset: itemsPerPage * page,
  });

  if (actionsByClient.length === 0) {
    throw { status: 404, message: "Este cliente não possui ações!"}
  };
  
  return actionsByClient;
}

const getAllActions = async (page = 0) => {
  const itemsPerPage = 20;
  const numberOfSharesInvested = await Acao.findAll({
  include: [{
    model: Carteira,
    as: 'Carteiras',
    attributes: [],
  }],
  attributes: { include: [[sequelize.fn('sum', sequelize.col('Carteiras.qntAcao')), 'qntAcaoInvestida']] },
  group: ['id'],
  raw: false,
  limit: itemsPerPage,
  subQuery: false,
  offset: itemsPerPage * page,
  });
  return numberOfSharesInvested;
}

module.exports  = {
  getAction,
  getAllActionsByClient,
  getAllActions,
};