module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    display_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull:false },
    password: { type:DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.INTEGER },
    // employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  // Address.associate = (models) => {
  //   Address.belongsTo(models.Employee,
  //     { foreignKey: 'employeeId', as: 'employees' });
  // };

  return Users;
};