const express = require('express');
const User = require('./controllers/user.controller');
const Login = require('./controllers/login.controller');
const Category = require('./controllers/category.controller');
const Post = require('./controllers/post.controller');
const Middleware = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login',
  Middleware.validateMailPassword,
  Login.getToken);

app.post('/user',
  Middleware.validateUserData,
  User.insertUserController);
  
app.get('/user',
  Middleware.validateToken,
  User.getAllUsers);
  
app.get('/user/:id',
  Middleware.validateToken,
  User.getUserById);

app.post('/categories',
  Middleware.validateToken,
  Middleware.validateNameField,
  Category.postCategory);

app.get('/categories',
  Middleware.validateToken,
  Category.getAllCategories);

app.post('/post',
  Middleware.validateToken,
  Middleware.validateNewPost,
  Post.insertPost);

app.get('/post',
  Middleware.validateToken,
  Post.getPosts);

app.get('/post/search',
  Middleware.validateToken,
  Post.getPostsByTitle);

app.get('/post/:id', 
  Middleware.validateToken,
  Post.insertPostById);

app.put('/post/:id', 
  Middleware.validateToken,
  Middleware.validatePostPut,
  Post.attualizePostById);

app.delete('/post/:id',
  Middleware.validateToken,
  Post.deletePostById);

app.delete('/user/me', 
  Middleware.validateToken,
  User.deleteUser);  

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
