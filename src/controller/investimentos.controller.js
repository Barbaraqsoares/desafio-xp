const investomentoService = require('../service/investimentos.service');

const getBuyShares = async (req, res, _next) => {
  const {codCliente, codAtivo, qtdeAtivo} = req.body;

  const BuyShares = await investomentoService.getBuyShares(codCliente, codAtivo, qtdeAtivo);

  if (BuyShares.status === 400) {
    throw { status: BuyShares.status, message: BuyShares.message };
  }
  return res.status(201).json(BuyShares);
}

const getSellShares = async (req, res, _next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;

  const sell = await investomentoService.getSellShares(codCliente, codAtivo, qtdeAtivo);
  
  if (sell.status === 400) {
    throw { status: sell.status, message: sell.message };
  }

  return res.status(201).json(sell);
}


module.exports = {
  getBuyShares,
  getSellShares,
}