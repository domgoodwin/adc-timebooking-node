var express = require('express');
var router = express.Router();

// Requre controller modules
var login_controller = require('../controllers/loginController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', login_controller.user_login_get);

module.exports = router;
