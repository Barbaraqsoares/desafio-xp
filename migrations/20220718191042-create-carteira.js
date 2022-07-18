'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carteiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idCliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        refereces: {
          model: 'Cliente',
          key: 'id'
        }
      },
      idAcao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        refereces: {
          model: 'Acao',
          key: 'id'
        }
      },
      qntAcao: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carteiras');
  }
};