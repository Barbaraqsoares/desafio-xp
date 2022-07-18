const CarteiraSchema = (sequelize, DataTypes) => {
  const CarteiraModel = sequelize.define("Carteira", {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    idAcao: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    qntAcao: DataTypes.DECIMAL,
  });

  CarteiraModel.associate = (models) => {
    CarteiraModel.belongsTo(models.Cliente, {
      through: CarteiraModel,
      foreignKey: "idCliente",
      as: "Cliente"
    })
  }

  CarteiraModel.associate = (models) => {
    CarteiraModel.belongsTo(models.Acao, {
      through: CarteiraModel,
      foreignKey: "idAcao",
      as: "Acao"
    })
  }

  return CarteiraModel;
};

module.exports = CarteiraSchema;