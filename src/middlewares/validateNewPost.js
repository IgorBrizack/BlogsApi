const { schema4 } = require('../joi/schemas');

const loginValidation = (req, res, next) => {
  const { body } = req;
  const { error } = schema4.validate(body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = loginValidation;