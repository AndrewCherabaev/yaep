var Joi = require('joi');
var schema = Joi.object().keys({
	username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

module.exports = function(request) {
	return Joi.validate(request, schema);
}