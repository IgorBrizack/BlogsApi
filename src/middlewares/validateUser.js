const schemas = require('../joi/schemas');

const loginValidation = (req, res, next) => {
  const { body: { username, password } } = req;
  const { error } = schemas.validate({ username, password });
  if (!error) next();
  return res(400).json({ message: error });
};

module.exports = loginValidation;