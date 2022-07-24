const assert = require('assert');

const clienteService = require('../service/cliente.service');

jest.mock('mysql2/promise', () => {
  
});

describe('Testando o arquivo cliente controller', () => {
  it('Testando a função loginClient', async () => {
    const emailCliente = 'barbara@gmail.com';

    const token = clienteService.loginClient(emailCliente);
    expect(typeof token).toBe('object');
  });

  it('POST conta/create', async () => {
    const nomeCliente = "Bela";
    const email = "bela@gmail.com";
    const senha = "12312313";

    await clienteService.createClient(nomeCliente, email, senha);
    expect(typeof clienteService.createClient).toBe('object');
  });

  it('GET conta/:id', () => {
    
  }); 

  it('POST conta/deposito', () => {
    
  }); 
});