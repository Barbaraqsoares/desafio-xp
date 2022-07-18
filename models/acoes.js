const AcaoSchema = (sequelize, DataTypes) => {
  const AcaoModel = sequelize.define("Acao", {
    nomeAcao: DataTypes.STRING,
    qntAcao: DataTypes.INTEGER,
    valorAcao: DataTypes.FLOAT,
  });

  AcaoModel.associate = (models) => {
    AcaoModel.hasMany(models.Carteira, {
      foreignKey: "idAcao",
      as: "Carteira"
    })
  }

  return AcaoModel;
};

module.exports = AcaoSchema;