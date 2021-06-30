var express = require('express');
var router = express.Router();

const gender = require('../controllers/gender_controller');
const category = require('../controllers/category_controller');


router.use('/:gender', category.getCategory);
router.get('/:gender', gender.getGenderAttributes);



module.exports = router;
