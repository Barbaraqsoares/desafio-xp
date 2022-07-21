const { Acao, Carteira } = require('../../models');

const getAllActions = async (codAtivo) => {
  const acao = await Acao.findOne({ where: { id: codAtivo }});
  
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
  
  return actionsByClient;
}

module.exports  = {
  getAllActions,
  getAllActionsByClient,
};