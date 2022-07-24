require('mysql2/node_modules/iconv-lite').encodingExists('cesu8');

const clienteService = require('../service/cliente.service');

// const connection = require('../../config/config');

jest.mock('mysql2/promise', async () => {});

describe('Testando o arquivo cliente controller', () => {

  it('Testando a função loginClient', async () => {
    const emailCliente = 'barbara@gmail.com';

    const token = await clienteService.loginClient(emailCliente);
    expect(typeof token).toBe('object');
  });

  it('Testando a função createCliente', async () => {
    const nomeCliente = "Dida";
    const email = "biladida@gmail.com";
    const senha = "12312313";

    const cliente = await clienteService.createClient(nomeCliente, email, senha);
    // expect(cliente).toHaveBeenCalled();

    await destroy(cliente);
  });

  it('Testando a função getBalanceByClienteId', async () => {
    const id = 1;

    const cliente = await clienteService.getBalanceByClienteId(id)
    expect(typeof cliente).toBe('object');
  }); 

  it('Testando a função getWithdrawMoney', async () => {
    const codCliente = 1;
    const valor = 10.00;

    const cliente = await clienteService.getWithdrawMoney(codCliente, valor);
    expect(cliente).toHaveBeenCalled();
  });

  it('Testando a função getDeposit', async () => {
    const codCliente = 1;
    const valor = 1000.00;

    const cliente = await clienteService.getDeposit(codCliente, valor);
    expect(cliente).toHaveBeenCalled();
  });
});