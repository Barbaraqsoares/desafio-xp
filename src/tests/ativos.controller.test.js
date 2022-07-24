const assert = require('assert');

const ativosController = require('../controller/ativos.controller');
const ativosService = require('../service/ativos.service');
const mockGetAll = jest.spyOn(ativosService, 'getAction');
const mockGetAllActionsByClient = jest.spyOn(ativosService, 'getAllActionsByClient');
const mockGetAllActions = jest.spyOn(ativosService, 'getAllActions');


describe('Testando o arquivo ativos controller', () => {
  beforeEach(() => jest.useFakeTimers());
  it('GET /:codAtivo', () => {
    const reqParams = {
      'codAtivo': 1,
    };

    ativosController.getAction(
      { params: reqParams },
      { status: () => ({ json: () => {}})})
    expect(mockGetAll).toHaveBeenCalled();
    expect(mockGetAll).toHaveBeenCalledWith(reqParams.codAtivo);
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
    expect(mockGetAllActionsByClient).toHaveBeenCalled();
    expect(mockGetAllActionsByClient).toHaveBeenCalledWith(reqParams.codCliente, reqQuery.page);
  });

  it('GET qntInvestida/', () => {
    const reqQuery = {
      page: 1,
    };

    ativosController.getAllActions(
      { query: reqQuery },
      { status: () => ({ json: () => {}})})
    expect(mockGetAllActions).toHaveBeenCalled();
  });
});