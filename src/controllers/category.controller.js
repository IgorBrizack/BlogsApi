const CategoryService = require('../services/category.service');

const postCategory = async (req, res) => {
  const entryData = req.body;

  const data = await CategoryService.postCategoryService(entryData);

  return res.status(201).json(data);
};

module.exports = {
  postCategory,
};