const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


const productRoutes = require('./api/routes/product');
const userRoutes = require('./api/routes/users');
// const userRoutes = require('./controllers/users.controller');


app.use('/product', productRoutes);
app.use('/users', userRoutes);




// app.use((req, res, next) => {
//     res.json({
//         message : 'Success '
//     })
// }) 



module.exports = app;






