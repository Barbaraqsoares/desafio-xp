module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Acoes',
   [
     {
      nomeAcao: 'Nubank',
      qntAcao: 1200,
      valorAcao: 12.89,
     },
     {
      nomeAcao: 'Magalu',
      qntAcao: 1200,
      valorAcao: 6.89,
     },
     {
      nomeAcao: 'Vale',
      qntAcao: 1200,
      valorAcao: 112.89,
     },
     {
      nomeAcao: 'Weg',
      qntAcao: 1200,
      valorAcao: 15.89,
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Acoes', null, {});
  }
};