var express = require('express');
var router = express.Router();

// Require controller modules
var login_controller = require('../controllers/loginController');
//var vote_controller = require('../controllers/voteController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {world: null });
});

/* GET request for creating a user.*/
router.get('/login', login_controller.user_login_get);

/* POST request for creating user. */
router.post('/login', login_controller.user_login_post);

module.exports = router;
