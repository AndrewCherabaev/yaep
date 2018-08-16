function IndexController() { 					//Functional inheritance class style

	this.index = function (req, res) {
		res.render('index', { title: 'Express'});
	}

}

module.exports = new IndexController();			//Use 'exports new' instead of "static" methods of class