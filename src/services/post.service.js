const { BlogPost, sequelize } = require('../models');

// const insertPostService = async (data) => {
//   const insertedPost = await BlogPost.insert(data);

//   return insertedPost;
// };

const insertPostService = async ({ title, content, categoryIds }) => {
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId: categoryIds[0] },
      {
        transaction: t,
      },
      );
      return newPost;
  });
  return result;
};

module.exports = { insertPostService };