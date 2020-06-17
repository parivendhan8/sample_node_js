const express = require('express');
const  router = express.Router();
// const user = require('./users')


router.get('/',(req, res, next) => {


    const error = new Error('Not Found');
    error.status = 404;
    next(error)

    

    res.json({
        message : 'Success GET '
    });
});


router.post('/',(req, res, next) => {
    res.status(200).json({
        message : 'Success POST'
    });
}) ;


router.get('/:id',(req, res, next) => {


    const id = req.params.id;

    console.log(`my id ${id}`)

    if ( id === 'success'){
        res.status(200).json({
            message : 'Success ' + id + ''
        });
    } else{
        res.status(200).json({
            message : 'Different id'
        });
    }

  
}) ;




// router.use('/',(req, res, next) => {
//     res.status(200).json({
//         message : 'Success POST'
//     });
// }) ;


module.exports = router;




