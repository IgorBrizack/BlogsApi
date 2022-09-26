const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategory', 
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

  PostCategories.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
          as: "category_id",
          through: PostCategories,
          foreignKey: 'post_id',
          otherKey: 'category_id'
      });
      models.Category.belongsToMany(models.BlogPost, {
          as: "post_id",
          through: PostCategories,
          foreignKey: 'categoriy_id',
          otherKey: 'post_id'
      });
  }

  return PostCategories;
}

module.exports = PostsCategoriesSchema;