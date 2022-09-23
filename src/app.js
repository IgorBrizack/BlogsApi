const express = require('express');
const User = require('./controllers/user.controller');
const Login = require('./controllers/login.controller');
const LoginMiddleware = require('./middlewares');

// ...

const app = express();

app.use(express.json());

app.post('/login',
  LoginMiddleware.validateUser,
  Login.getToken);

app.get('/user', User.getAllUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
