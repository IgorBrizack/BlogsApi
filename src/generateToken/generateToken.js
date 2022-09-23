const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = ({ email }) => {
  const token = jwt.sign({ data: { email } },
     secret, jwtConfig);
  return token;
};

const generateUserToken = ({ displayName, email, image }) => {
  const token = jwt.sign({ data: { displayName, email, image } },
     secret, jwtConfig);
  return token;
};

module.exports = { generateToken, generateUserToken };