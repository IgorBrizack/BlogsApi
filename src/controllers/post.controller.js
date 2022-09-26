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

const insertPostById = async (req, res) => {
  const { id } = req.params;

  const data = await Post.getPostsByIdService(id);

  if (!data) return res.status(404).json({ message: 'Post does not exist' }); 

  return res.status(200).json(data);
};

const attualizePostById = async (req, res) => {
  const { id } = req.body;
  const payload = req.user;

  const userId = await Post.getUserById(payload);
  if (id !== userId) return res.status(401).json({ message: 'Unauthorized user' });

  const hasPost = await Post.getPostById(id);

  if (!hasPost) { return res.status(200).json(hasPost); }
};

module.exports = {
  insertPost,
  getPosts,
  insertPostById,
  attualizePostById,
};