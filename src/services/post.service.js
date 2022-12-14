const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { BlogPost, User, PostCategory, Category } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

const getUserById = async (payload) => {
  const { id } = await User.findOne({ where: { email: payload.data.email } });
  return id;
};

const insertPostService = async ({ title, content, categoryIds }, id) => {
  const t = await sequelize.transaction();
  try {
    const newPost = await BlogPost.create({ title, content, userId: id },
        { transaction: t });
    const insertCategories = categoryIds.map((el) =>
     PostCategory.create({ postId: newPost.id, categoryId: el },
      { transaction: t }));
    await Promise.all(insertCategories);
    await t.commit();
    return newPost;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

const getPostsService = async (userId) => {
  const posts = await BlogPost
  .findAll({ where: { userId },
    attributes: { exclude: ['UserId'] },
    include: [{ 
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password'],
    },
   }, { 
    model: Category,
     as: 'categories',
     through: {
      attributes: [],
      // Isso significa que da tabela intermediária, não quero que ele traga nada.
     },
    }] });

  return posts;
};

const getPostsByIdService = async (id) => {
  const post = await BlogPost
  .findOne({ where: { id },
    attributes: { exclude: ['UserId'] },
    include: [{ 
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password'],
    },
   }, { 
    model: Category,
     as: 'categories',
     through: {
      attributes: [],
      // Isso significa que da tabela intermediária, não quero que ele traga nada.
     },
    }] });

  return post;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ where: { id },
    attributes: { exclude: ['UserId'] },
    include: [{ 
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password'],
    },
   }, { 
    model: Category,
     as: 'categories',
    }] });

  return post;
};

const attPostService = async ({ title, content }, id) => {
  const [qtdUpdated] = await BlogPost.update({ title, content }, { where: { id } });
  return qtdUpdated > 0;
};

const deletePostService = async (id) => {
  await BlogPost.destroy({ where: { id } });
  
  return true;
}; 

const getSearchedPosts = async (searching) => {
    // referência de uso do Op.or Op.like
    // sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
  const posts = await BlogPost
    .findAll({ where: { [Op.or]: [{ title: { [Op.substring]: searching } },
      { content: { [Op.substring]: searching } }] },
      attributes: { exclude: ['UserId'] },
      include: [{ model: User,
      // on: 'userId',  
      as: 'user',
      attributes: { exclude: ['password'],
    },
    }, { 
      model: Category,
      as: 'categories',
      through: {
      attributes: [],
      // Isso significa que da tabela intermediária, não quero que ele traga nada.
      },
    }] });
  return posts;
};

module.exports = { 
  insertPostService,
  getUserById,
  getPostsService,
  getPostsByIdService,
  getPostById,
  attPostService,
  deletePostService,
  getSearchedPosts,
  };