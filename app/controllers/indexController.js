var Users = require('database/db.js').users;
var UserValidator= require('middleware/user_validator');

function IndexController() { 					//Functional inheritance class style

	this.index = function (req, res) {
		res.render('index', { title: 'Express'});
	}

	this.add = function(req, res) {
		res.render('users/add');
	}

	this.create = function(req, res) {
		var body  = req.body;
		var result = UserValidator(body);

		if (result.error) {
			message = result.error.details[0].message;
			error = {
				status: result.error.name
			};
			res.render('error', {message, error})
		} else {
			Users.push(body).write();
			res.redirect('/users');
		}

	}

	this.list = function(req, res) {
		var users = Users.map('username').value();

		res.render('users/list', {users});
	}
}

module.exports = new IndexController();			//Use 'exports new' instead of "static" methods of class