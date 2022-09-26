module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    displayName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull:false },
    password: { type:DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {  
    User.hasMany(models.BlogPost, {
        foreingKey: 'userId', as: 'user'
    }); 
  }

  return User;
};