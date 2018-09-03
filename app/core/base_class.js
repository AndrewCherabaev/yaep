var debug = require('debug');

function BaseClass() {
	var self = this;

	Object.defineProperties(self, {
		"__class__": {
			value: self.constructor.name,
			writable: false,
			configurable: false
		}
	});

	self.getMethodName = function(arguments_object) {
		var result = arguments_object.callee.toString().match(/function ([^\(]+)/);
		return (result ? result[1] : 'function');
	}

	self.debug = debug(`yaep:${self.__class__}`);
}

module.exports = BaseClass;