module.exports = router = require('express').Router();
var indexController = require('controllers/indexController');

router.route('/')
	.get(indexController.index);
router.route('/users')
	.get(function(req, res, next){
		res.send('respond with a resource');
	});