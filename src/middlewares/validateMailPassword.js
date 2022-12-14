const { schema1 } = require('../joi/schemas');

const mailValidation = (req, res, next) => {
  const { body } = req;
  const { error } = schema1.validate(body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = mailValidation;