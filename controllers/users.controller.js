const User = require('../model/user.model.js')

module.exports = {

    findAll : (req, res) => {

        User.getAll((err, data) => {
    
            if(err){
            return res.status(500).send({
                    message: 'Error'
                });
            }else{
                return res.status(200).json({
                    status: 1,
                    users: data
                });
            }
    
        });
     
    }


};