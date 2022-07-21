const { Acao, Carteira } = require('../../models');

const getAllActions = async (codAtivo) => {
  const acao = await Acao.findOne({ where: { id: codAtivo }});

  if (acao === null) {
    throw { status: 400, message: "Não possui este ativo!"}
  };
  
  return acao;
}

const getAllActionsByClient = async (codCliente) => {
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
  });

  if (actionsByClient.length === 0) {
    throw { status: 400, message: "Este cliente não possui ações!"}
  };
  
  return actionsByClient;
}

module.exports  = {
  getAllActions,
  getAllActionsByClient,
};