const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
      {
        postId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
      },
      {
          timestamps: false,
          tableName: 'posts_categories',
          underscored: true,
      }
  );

  PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
          as: "categories",
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId'
      });
      models.Category.belongsToMany(models.BlogPost, {
          as: "posts",
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId'
      });
  }

  return PostCategory;
}

module.exports = PostsCategoriesSchema;