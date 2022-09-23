const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', 
      {},
      {
          timestamps: false,
          tableName: 'posts_categories',
          underscored: true,
      }
  );

  PostCategories.associate = (models) => {
      models.Categories.belongsToMany(models.Categories, {
          as: "modules",
          through: PostCategories,
          foreignKey: 'post_id',
          otherKey: 'category_id'
      });
      models.Module.belongsToMany(models.Course, {
          as: "courses",
          through: PostCategories,
          foreignKey: 'categoriy_id',
          otherKey: 'post_id'
      });
  }

  return CourseModuleTable;
}

module.exports = PostsCategoriesSchema;