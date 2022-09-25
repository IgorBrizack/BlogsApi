const { Category } = require('../models');

const postCategoryService = async ({ name }) => {
  const newCategory = Category.create({ name });
  return newCategory;
};

const getAllCategoriesService = async () => {
  const allCategories = Category.findAll();

  return allCategories;
};

module.exports = {
  postCategoryService,
  getAllCategoriesService,
};