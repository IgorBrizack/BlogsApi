const CategoryService = require('../services/category.service');

const postCategory = async (req, res) => {
  const entryData = req.body;

  const data = await CategoryService.postCategoryService(entryData);

  return res.status(201).json(data);
};

const getAllCategories = async (req, res) => {
  const data = await CategoryService.getAllCategoriesService();

  return res.status(200).json(data);
};

module.exports = {
  postCategory,
  getAllCategories,
};