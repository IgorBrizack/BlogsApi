const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('posts_categories', 
      {},
      {
          timestamps: false,
          tableName: 'posts_categories',
          underscored: true,
      }
  );

  PostCategories.associate = (models) => {
      models.Categories.belongsToMany(models.Categories, {
          as: "category_id",
          through: PostCategories,
          foreignKey: 'post_id',
          otherKey: 'category_id'
      });
      models.Module.belongsToMany(models.BlogsPosts, {
          as: "post_id",
          through: PostCategories,
          foreignKey: 'categoriy_id',
          otherKey: 'post_id'
      });
  }

  return CourseModuleTable;
}

module.exports = PostsCategoriesSchema;