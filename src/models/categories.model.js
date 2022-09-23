module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.PostsCategoriesSchema, {
      as: "posts_categories",
      foreignKey: "post_id"
    })
  }

  return Categories;
};
