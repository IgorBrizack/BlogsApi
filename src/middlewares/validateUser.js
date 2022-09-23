const schemas = require('../joi/schemas');

const loginValidation = (req, res, next) => {
  const { body } = req;
  const { error } = schemas.validate(body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = loginValidation;