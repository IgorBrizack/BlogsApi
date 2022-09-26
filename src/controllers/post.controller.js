const Post = require('../services/post.service');

const insertPost = async (req, res) => {
  const data = req.body;
  const payload = req.user;

  const id = await Post.getUserById(payload);

  const posted = await Post.insertPostService(data, id);

  res.status(201).json(posted);
};

module.exports = {
  insertPost,
};