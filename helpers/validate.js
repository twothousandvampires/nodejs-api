const Validate = require('validatorjs');

const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validate(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

const only_alphabetic_characters = /^[a-zA-Z]+$/;
const only_numbers = /^[a-zA-Z]+$/;
const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

Validate.register('only_alpha', value => only_alphabetic_characters.test(value), 'must contain only alphabetic characters');
Validate.register('only_nums', value => only_numbers.test(value), 'must contain only numbers');
Validate.register('phone_format', value => phone.test(value), 'wrong phone format');

module.exports = validator
