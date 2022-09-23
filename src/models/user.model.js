module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    display_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull:false },
    password: { type:DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  return Users;
};