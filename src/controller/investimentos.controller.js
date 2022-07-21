const investomentoService = require('../service/investimentos.service');

const getBuyShares = async (req, res, _next) => {
  const {codCliente, codAtivo, qtdeAtivo} = req.body;

  const BuyShares = await investomentoService.getBuyShares(codCliente, codAtivo, qtdeAtivo);

  if (BuyShares.status === 400) {
    return res.status(BuyShares.status).json(BuyShares);
  }
  return res.status(201).json(BuyShares);
}

const getSellShares = async (req, res, _next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;

  const sell = await investomentoService.getSellShares(codCliente, codAtivo, qtdeAtivo);
  
  if (sell.status === 400) {
    return res.status(sell.status).json(sell);
  }

  return res.status(201).json(sell);
}


module.exports = {
  getBuyShares,
  getSellShares,
}