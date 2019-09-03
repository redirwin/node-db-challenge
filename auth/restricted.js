const bcrypt = require('bcryptjs');

const Users = require('../routes/auth-model');

module.exports = function restricted(req, res, next) {
    let {username, password} = req.headers;

    try {
        const user = await auth.getAllUsers(username);
        if(username && password) {
            
        }
    }
    
}