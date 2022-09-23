const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().required().email().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
  displayName: Joi.string().required().min(8),
  image: Joi.string(),
});

module.exports = schema;