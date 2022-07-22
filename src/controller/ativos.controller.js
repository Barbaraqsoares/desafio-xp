const ativosService = require('../service/ativos.service');

const getAction = async (req, res, _next) => {
  const { codAtivo } =  req.params;

  const acao = await ativosService.getAction(codAtivo);

  return res.status(201).json(acao);
}

const getAllActionsByClient = async (req, res, _next) => {
  const { codCliente } = req.params;
  const { page } = req.query;

  const actionsByClient = await ativosService.getAllActionsByClient(codCliente, page);

  return res.status(201).json(actionsByClient);
}

const getAllActions = async (req, res, next) => {
  const acoes = await ativosService.getAllActions(req.query.page);

  if(!acoes) {
    throw { status: 422, message: "Não foi possível a entrega da lista de ações"}
  }

  return res.status(201).json(acoes)
}

module.exports  = {
  getAction,
  getAllActionsByClient,
  getAllActions,
};