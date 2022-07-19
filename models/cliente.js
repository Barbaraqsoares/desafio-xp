const ClienteSchema = (sequelize, DataTypes) => {
  const ClienteModel = sequelize.define("Cliente", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeCliente: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    saldo: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    tableName: 'Clientes',
  });

  ClienteModel.associate = (models) => {
    ClienteModel.hasMany(models.Carteira, {
      foreignKey: "idCliente",
      as: "Clientes"
    })
  }

  return ClienteModel;
};

module.exports = ClienteSchema;