module.exports = router = require('express').Router();
var indexController = require('controllers/indexController');

router.route('/')
	.get(indexController.index);

router.route('/users')
	.get(indexController.list);

router.route('/users/add')
	.get(indexController.add)
	.post(indexController.create);