  
const loginData = require('../data/loginData');

exports.auth = function(user) {
   return loginData.authUser(user);
}