const assert = require('assert');

const clienteController = require('../controller/cliente.controller');
const clienteService = require('../service/cliente.service');

jest.mock('../service/cliente.service');

describe('Testando o arquivo cliente controller', () => {
  it('POST /login', () => {
    const reqBody = {
      'email': 'barbara@gmail.com',
    }
    clienteController.loginClient(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(clienteService.loginClient).toHaveBeenCalledWith(reqBody.email);
  });

  it('POST /login', () => {
    const reqBody = {
      'email': 'barbara@gmail.com',
    }
    clienteController.loginClient(
      { body: reqBody },
      { status: () => ({ json: () => {}})})
    expect(clienteService.loginClient).toHaveBeenCalledWith(reqBody.email);
  })


})