const Joi = require('joi');

const StringEmpty = 'Some required fields are missing';
const InvalidFields = 'Invalid fields';

const schema4 = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
  content: Joi.string().required().messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const schema3 = Joi.object({
  name: Joi.string().required(),
});

const schema2 = Joi.object({
  email: Joi.string().required().email().messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
  displayName: Joi.string().required().min(8),
  image: Joi.string(),
});

const schema1 = Joi.object({
  email: Joi.string().required().email().messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
});

module.exports = { schema1, schema2, schema3, schema4 };