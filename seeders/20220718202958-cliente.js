module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Clientes',
   [
     {
       nomeCliente: 'Bárbara Soares',
       email: 'barbara@gmail.com',
       senha: '123456',
       saldo: 1500
     },
     {
      nomeCliente: 'Caio Soares',
      email: 'caioa@gmail.com',
      senha: '123456',
      saldo: 1800
    },
    {
      nomeCliente: 'Pedro Soares',
      email: 'pedro@gmail.com',
      senha: '123456',
      saldo: 1000
    },
    {
      nomeCliente: 'Lucas Soares',
      email: 'lucas@gmail.com',
      senha: '123456',
      saldo: 1400
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', null, {});
  }
};
