var express = require('express');
var router = express.Router();

const gender = require('../controllers/gender_controller');
const category = require('../controllers/category_controller');
const subcategory = require('../controllers/subcategory_controller');
const product = require('../controllers/product_controller');

/* GET home page. */
router.get('/', gender.getGender);
router.use('/categories/:gender', category.getCategory);
router.get('/categories/:gender', gender.getGenderAttributes);
router.get('/categories/:gender/:subcategory', subcategory.getSubcategory);
router.get('/products/:subcategory_id', product.getProducts);
router.get('/products/:primary_category_id/:id', product.getProduct);


module.exports = router;
