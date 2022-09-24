const Joi = require('joi');

const schema2 = Joi.object({
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

const schema1 = Joi.object({
  email: Joi.string().required().email().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
});

module.exports = { schema1, schema2 };