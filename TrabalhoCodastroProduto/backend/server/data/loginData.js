const database = require('../database/database');

exports.authUser = function (user) {
    return database.query('select nome from usuario where email = $1 AND senha = $2', [user.email, user.senha])
}