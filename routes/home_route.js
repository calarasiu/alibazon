var express = require('express');
var router = express.Router();

const home = require('../controllers/home_controller');

/* GET home page. */
router.get('/', home.getHomePage);

module.exports = router;