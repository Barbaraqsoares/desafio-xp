const AcaoSchema = (sequelize, DataTypes) => {
  const AcaoModel = sequelize.define("Acao", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeAcao: DataTypes.STRING,
    qntAcao: DataTypes.INTEGER,
    valorAcao: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    tableName: 'Acoes',
  });

  AcaoModel.associate = (models) => {
    AcaoModel.hasMany(models.Carteira, {
      foreignKey: "idAcao",
    })
  }

  return AcaoModel;
};

module.exports = AcaoSchema;