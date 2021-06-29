var express = require('express');
var router = express.Router();

const gender = require('../controllers/gender_controller');
const category = require('../controllers/category_controller');

const breadcrumbs = require('../controllers/breadcrumbs_controller');

/* GET home page. */
router.use(breadcrumbs.get_breadcrumbs)
router.get('/', gender.getGender);
router.use('/:gender', category.getCategory);
router.get('/:gender', gender.getGenderAttributes);



module.exports = router;
