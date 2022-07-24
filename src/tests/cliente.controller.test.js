const assert = require('assert');

const clienteController = require('../controller/cliente.controller');
const clienteService = require('../service/cliente.service');

jest.mock('../service/cliente.service');

describe('Testando o arquivo cliente controller', () => {
  it('POST /login', async () => {
    const reqBody = {
      'email': 'barbara@gmail.com',
    }
    await clienteController.loginClient(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(clienteService.loginClient).toHaveBeenCalledWith(reqBody.email);
  });

  it('POST conta/create', async () => {
    const reqBody = {
      "nomeCliente": "Bela",
      "email": "bela@gmail.com",
      "senha": "12312313"
    };
    await clienteController.createClient(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(clienteService.createClient).toHaveBeenCalled();
  });

  it('GET conta/:id', () => {
    const reqParams = {
      id: 1,
    }
    clienteController.getBalanceByClienteId(
      { params: reqParams },
      { status: () => ({ json: () => {}})})
    expect(clienteService.getBalanceByClienteId).toHaveBeenCalled();
    expect(clienteService.getBalanceByClienteId).toHaveBeenCalledWith(reqParams.id);
  });

  it('POST conta/saque', () => {
    const reqBody = {
      "codCliente": 1,
      "valor": 100.00,
    };
    clienteController.getWithdrawMoney(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(clienteService.getWithdrawMoney).toHaveBeenCalled();
    expect(clienteService.getWithdrawMoney).toHaveBeenCalledWith(reqBody.codCliente, reqBody.valor);
  }); 

  it('POST conta/deposito', () => {
    const reqBody = {
      "codCliente": 1,
      "valor": 100.00,
    };
    clienteController.getDeposit(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(clienteService.getDeposit).toHaveBeenCalled();
    expect(clienteService.getWithdrawMoney).toHaveBeenCalledWith(reqBody.codCliente, reqBody.valor);
  }); 
});