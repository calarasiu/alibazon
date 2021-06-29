var express = require('express');
var router = express.Router();

const products = require('../controllers/product_controller');

router.get('/:gender/:subcategory/:subcategory_id/:product_name', products.getProduct);


module.exports = router;