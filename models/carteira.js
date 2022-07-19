const CarteiraSchema = (sequelize, DataTypes) => {
  const CarteiraModel = sequelize.define("Carteira", {
    qntAcao: {
      type: DataTypes.INTEGER,
    },
  },  
  {
    timestamps: false,
  });

  CarteiraModel.associate = (models) => {
   models.Acao.belongsToMany(models.Cliente, {
     as: "Clientes",
     through: CarteiraModel,
     foreignKey: 'idAcao',
     otherKey: 'idCliente'
   })
  }

  CarteiraModel.associate = (models) => {
    models.Cliente.belongsToMany(models.Acao, {
      as: "Acoes",
      through: CarteiraModel,
      foreignKey: "idCliente",
      otherKey: 'idAcao'
    })
  }

  return CarteiraModel;
};

module.exports = CarteiraSchema;