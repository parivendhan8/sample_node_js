const db = require('../db/database.js')

const User = function(user){
    this.id = user.id;
    this.name = user.name;
    this.mobiel_no = user.mobiel_no;
    this.address = user.address;
};

User.getAll = result => {

    db.query('SELECT * FROM users', (err, res) => {

        if(err){
            console.log('err' +  err);
            result(null, err);
            return
        }else{
            console.log('users' +  res);
            result(null, res);
        }
    });


};

module.exports = User