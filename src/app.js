const express = require('express');
const User = require('./controllers/user.controller');
const Login = require('./controllers/login.controller');
const Middleware = require('./middlewares');

// ...

const app = express();

app.use(express.json());

app.post('/login',
  Middleware.validations,
  Login.getToken);

app.post('/user',
  Middleware.validations,
  User.insertUserController);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
