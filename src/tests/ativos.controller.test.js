const assert = require('assert');

const ativosController = require('../controller/ativos.controller');
const ativosService = require('../service/ativos.service');

jest.mock('../service/ativos.service');
jest.mock('../service/cliente.service');

describe('Testando o arquivo ativos controller', () => {
  it('GET /:codAtivo', () => {
    const reqParams = {
      'codAtivo': 1,
    };

    ativosController.getAction(
      { params: reqParams },
      { status: () => ({ json: () => {}})})
    expect(ativosService.getAction).toHaveBeenCalled();
    expect(ativosService.getAction).toHaveBeenCalledWith(reqParams.codAtivo);
  });

  it('GET conta/ativos/:codCliente', () => {
    const reqParams = {
      codCliente: 1,
    };

    const reqQuery = {
      page: 1,
    };

    ativosController.getAllActionsByClient(
      { params: reqParams, query: reqQuery },
      { status: () => ({ json: () => {}})})
    expect(ativosService.getAllActionsByClient).toHaveBeenCalled();
    expect(ativosService.getAllActionsByClient).toHaveBeenCalledWith(reqParams.codCliente, reqQuery.page);
  });

  it.only('GET qntInvestida/', () => {
    const reqQuery = {
      page: 1,
    };

    ativosController.getAllActions(
      { query: reqQuery },
      { status: () => ({ json: () => {}})})
    expect(ativosService.getAllActions).toHaveBeenCalled();
  });
});