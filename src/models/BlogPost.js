module.exports = (sequelize, DataTypes) => {
  const BlogsPosts = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE }
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'blog_posts',
    underscored: true,
  });


  BlogsPosts.associate = (models) => {
    BlogsPosts.belongsTo(models.User, {
      as: "user",
      foreignKey: "id"
    })
  }
  
  return BlogsPosts;
};