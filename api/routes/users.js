const express = require('express');
const  router= express.Router();
const sql = require('../../db/database.js');





// router.get('/',(req, res, next) => {

//     sql.query('SELECT * FROM users WHERE id = 1', (err, rows, fields) => {

//         if(!err){
//             console.log(res);
//             res.send(rows)

//         }else{
//             console.log('please check');
//             res.json({
//                 message : 'No data' + err.message + ''
//             })
//         }
//     });



    
// });


const u = require('../../controllers/users.controller')

router.get('/', u.findAll)



module.exports = router;


