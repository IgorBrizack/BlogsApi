const Post = require('../services/post.service');

const insertPost = async (req, res) => {
  const data = req.body;
  const payload = req.user;

  try {
    const id = await Post.getUserById(payload);

    const posted = await Post.insertPostService(data, id);
    res.status(201).json(posted);
  } catch (error) {
    res.status(400).json({ message: '"categoryIds" not found' });
  }
};

const getPosts = async (req, res) => {
  const payload = req.user;
  const userId = await Post.getUserById(payload);
  const data = await Post.getPostsService(userId);

  res.status(200).json(data);
};

module.exports = {
  insertPost,
  getPosts,
};