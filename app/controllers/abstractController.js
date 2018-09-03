var BaseClass = require('core/base_class')

var empty_method = function(req, res, next) {
	res.send('Action is not defined');
};


function Controller() {
	var self = this;

	BaseClass.apply(self, arguments);

	self.index = empty_method;
	self.show = empty_method;
	self.edit = empty_method;
	self.create = empty_method;
	self.store = empty_method;
	self.update = empty_method;
	self.destroy = empty_method;
}

module.exports = Controller;