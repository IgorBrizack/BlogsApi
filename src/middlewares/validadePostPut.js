const { schema5 } = require('../joi/schemas');

const putValidation = (req, res, next) => {
  const { body } = req;
  const { error } = schema5.validate(body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = putValidation;