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

module.exports = {
  insertPost,
};