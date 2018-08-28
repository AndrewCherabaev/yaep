var db = require('database/db.js');

function IndexController() { 					//Functional inheritance class style

	this.index = function (req, res) {
		res.render('index', { title: 'Express'});
	}

	this.add = function(req, res) {
		res.render('users/add');
	}

	this.create = function(req, res) {
		var users = db.users,
			body  = req.body;

		id = users.size().value();

		users.push({
			id: 	  id+1,
			username: body.username,
			password: body.password
		}).write();

		res.redirect('/users');
	}

	this.list = function(req, res) {
		var users = db.users.map('username').value();

		res.render('users/list', {users});
	}



}

module.exports = new IndexController();			//Use 'exports new' instead of "static" methods of class