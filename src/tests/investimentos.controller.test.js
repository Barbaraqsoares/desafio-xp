const assert = require('assert');

const investimentosController = require('../controller/investimentos.controller');
const investomentoService = require('../service/investimentos.service');

jest.mock('../service/investimentos.service');

describe('Testando o arquivo investimentos controller', () => {
  it('POST investimentos/comprar/', async () => {
    const reqBody = {
      'codCliente': 1,
      'codAtivo': 1,
      'qtdeAtivo': 2
    }

    await investimentosController.getBuyShares(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(investomentoService.getBuyShares).toHaveBeenCalled();
    expect(investomentoService.getBuyShares).toHaveBeenCalledWith(reqBody.codCliente, reqBody.codAtivo, reqBody.qtdeAtivo);
  });

  it('POST investimentos/comprar/', async () => {
    const reqBody = {
      'codCliente': 1,
      'codAtivo': 1,
      'qtdeAtivo': 2
    }

    await investimentosController.getSellShares(
      { params: reqParams, query: reqQuery },
      { status: () => ({ json: () => {}})})
    expect(investomentoService.getSellShares).toHaveBeenCalled();
    expect(investomentoService.getSellShares).toHaveBeenCalledWith(reqBody.codCliente, reqBody.codAtivo, reqBody.qtdeAtivo);
  });
});