var express = require('express');
var router = express.Router();

const gender = require('../controllers/gender_controller');
const category = require('../controllers/category_controller')
const subcategory = require('../controllers/subcategory_controller')
/* GET home page. */
router.get('/', gender.getGender);
router.use('/categories/:gender', category.getCategory);
router.get('/categories/:gender', gender.getGenderAttributes);
router.get('/categories/:gender/:subcategory', subcategory.getSubcategory);

module.exports = router;
