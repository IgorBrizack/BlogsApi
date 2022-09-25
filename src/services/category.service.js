const { Category } = require('../models');

const postCategoryService = async ({ name }) => {
  const newCategory = Category.create({ name });
  return newCategory;
};

module.exports = {
  postCategoryService,
};