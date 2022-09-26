const Post = require('../services/post.service');

const insertPost = async (req, res) => {
  const data = req.body;

  const posted = await Post.insertPostService(data);

  res.status(201).json(posted);
};

module.exports = {
  insertPost,
};