var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('subcategory', {message: 'Subcategory page'});
});

module.exports = router;
