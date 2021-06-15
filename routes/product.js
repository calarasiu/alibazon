var express = require('express');
var router = express.Router();

/* GET product page. */
router.get('/', function(req, res, next) {
  res.render('product', {message:'Product page'});
});

module.exports = router;