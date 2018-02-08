
// Display login page on GET login
exports.user_login_get = function(req, res) {
    res.render('login', { title: 'Login' });
};

// Try to login on POST login
exports.user_login_post = function(req, res) {
    // TODO try login
    res.render('home', {title: 'Home'});
}

