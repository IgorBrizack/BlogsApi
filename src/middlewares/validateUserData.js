const { schema2 } = require('../joi/schemas');

const userDataValidation = (req, res, next) => {
  const { body } = req;
  const { error } = schema2.validate(body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = userDataValidation;