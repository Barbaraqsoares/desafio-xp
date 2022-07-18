module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Carteiras',
   [
     {
      idCliente: 3,
      idAcao: 2,
      qntAcao: 30,
     },
     {
      idCliente: 3,
      idAcao: 1,
      qntAcao: 20,
     },
     {
      idCliente: 1,
      idAcao: 1,
      qntAcao: 5,
     },
     {
      idCliente: 2,
      idAcao: 2,
      qntAcao: 20,
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carteiras', null, {});
  }
};
