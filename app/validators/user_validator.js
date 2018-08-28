var Joi = require('joi');
var schema = Joi.object().keys({
	username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).required()
});

module.exports = function(request) {
	return Joi.validate(request, schema);
}