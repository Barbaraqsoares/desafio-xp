const ativosService = require('../service/ativos.service');

const getAllActions = async (req, res, _next) => {
  const { codAtivo } =  req.params;

  const acao = await ativosService.getAllActions(codAtivo);

  return res.status(201).json(acao);
}

const getAllActionsByClient = async (req, res, _next) => {
  const { codCliente } = req.params;

  const actionsByClient = await ativosService.getAllActionsByClient(codCliente);

  return res.status(201).json(actionsByClient);
}

module.exports  = {
  getAllActions,
  getAllActionsByClient,
};