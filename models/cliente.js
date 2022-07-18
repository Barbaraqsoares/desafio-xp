const ClienteSchema = (sequelize, DataTypes) => {
  const ClienteModel = sequelize.define("Cliente", {
    nomeCliente: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    saldo: DataTypes.FLOAT,
  });

  ClienteModel.associate = (models) => {
    ClienteModel.hasMany(models.Carteira, {
      foreignKey: "idCliente",
      as: "Carteira"
    })
  }

  return ClienteModel;
};

module.exports = ClienteSchema;