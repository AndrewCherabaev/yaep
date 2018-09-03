var Users = require('database/db.js').users;
var UserValidator= require('validators/user_validator');
var Controller = require('controllers/abstractController');


function IndexController() {
	var self = this;

	Controller.apply(self, arguments);

	self.index = function index(req, res) {
		self.debug(self.__class__ + '@' + self.getMethodName(arguments))
		res.render('index', { title: self.__class__ });
	};
}

module.exports = IndexController