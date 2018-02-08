var util = require('util');
const crypto = require('crypto');
var db = require('../db');
var key = "1234567890";

// How new users are created
var User = function (data){
    this.data = data;
}

User.prototype.create = function(username, name, password, assignedProjects, role, callback){

    var passwd = getHash(password);

    var query = util.format(`
        INSERT INTO users (Username, Role_ID, Passwd, Name, Assigned_Projects) 
        VALUES ('%s',%s,'%s','%s','%s')`,
        username, role, passwd, name, assignedProjects); 
    console.log(query);
    db.query(query, function(error, results, fields){
        if(error) throw error;
        this.data = {
            userID: 0,
            name:name,
            username: username,
            password: password,
            assignedProjects: assignedProjects,
            role: role
        };
        callback(results);
    });
};

function getHash(password){
    var hash = crypto.createHash('sha512')
    hash.update(password);
    return hash.digest('hex');
}


User.prototype.save = function(callback){
    
};

// Static method to find a user in DB
User.findByUsername = function(username, callback){
    //db.get
    var data;
    var query = util.format(`
        SELECT User_ID, Username, Role_ID, Passwd, Name, Assigned_Projects 
        FROM users 
        WHERE Username='%s'`,
        username);
    db.query(query, function (error, results, fields) {
        if (error) throw error;
        if (results.length > 1) throw new Error("More then one user returned from username");
        //console.log(results[0]);
        data = {
            userID: results[0].User_ID,
            name:results[0].Name,
            username: results[0].Username,
            password: results[0].Passwd,
            assignedProjects: results[0].Assigned_Projects,
            role: results[0].Role_ID
        };    
        callback(new User(data))  
      });
    
};

module.exports = User;