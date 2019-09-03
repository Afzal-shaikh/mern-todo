const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTodoInput(data) {
  let errors = {};

  data.title = !isEmpty(data.content) ? data.content : '';

  if (Validator.isEmpty(data.content)) {
    errors.todo = 'todo field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
