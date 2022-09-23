module.exports = (sequelize, DataTypes) => {
  const BlogsPosts = sequelize.define('blog_posts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  // BlogsPosts.associate = (models) => {
  //   BlogsPosts.hasMany(models.PostsCategoriesSchema, {
  //     as: "posts_categories",
  //     foreignKey: "category_id"
  //   })
  // }

  return BlogsPosts;
};