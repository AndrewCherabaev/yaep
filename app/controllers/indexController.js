var Users = require('database/db.js').users;
var UserValidator= require('validators/user_validator');

function IndexController() { 					//Functional inheritance class style

	this.index = function (req, res) {
		res.render('index', { title: 'Express'});
	}

	this.add = function(req, res) {
		res.render('users/add', req.flash('error')[0]);
	}

	this.create = function(req, res) {
		var body  = req.body;
		var result = UserValidator(body);

		if (result.error) {
			req.flash('error', {err: result.error.details[0].message, data:body});

			res.redirect('/users/add')
		} else {
			Users.push(body).write();
			req.flash('succes', 'created');
			res.redirect('/users');
		}

	}

	this.list = function(req, res) {
		message = req.flash('succes');
		var users = Users.map('username').value();

		res.render('users/list', {users, message});
	}
}

module.exports = new IndexController();			//Use 'exports new' instead of "static" methods of class