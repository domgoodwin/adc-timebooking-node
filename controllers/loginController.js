var userModel = require('../models/user');


exports.user_login_get = function(req, res, next) {
    userModel.findByUsername('test', function(data){
        console.log(data);
    });

    var user = new userModel();
    // user.create('test', 'tester', 'test', '1,2,2', 2, function(data){
    //     console.log(data);
    // });
    res.render('login', { title: 'Login' });
};