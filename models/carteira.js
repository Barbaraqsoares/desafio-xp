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
    CarteiraModel.belongsTo(models.Cliente, {
     as: "Clientes",
     foreignKey: "idCliente"
   });
   CarteiraModel.belongsTo(models.Acao, {
    as: "Acoes",
    foreignKey: 'idAcao'
  })
  }

  return CarteiraModel;
};

module.exports = CarteiraSchema;