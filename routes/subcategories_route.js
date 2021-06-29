var express = require('express');
var router = express.Router();

const subcategory = require('../controllers/subcategory_controller');

router.get('/:gender/:subcategory', subcategory.getSubcategory);


module.exports = router;