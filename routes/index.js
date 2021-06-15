var express = require('express');
var router = express.Router();

const categories = require('../controllers/category_controller');

/* GET home page. */
router.get('/', categories.getCategories);
router.get('/categories/:gender', categories.getCategory);

module.exports = router;
