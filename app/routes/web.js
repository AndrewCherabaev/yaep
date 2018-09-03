module.exports = router = require('express').Router();
var indexController = new (require('controllers/indexController'));

router.route('/')
	.get(indexController.index);
router.route('/:id')
	.get(indexController.show);
