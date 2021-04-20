const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');



const indexRouter = require('./routes/index');
const activitiesRouter = require('./routes/activities');

const app = express();


app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(express.static('piblic'));

app.use('/', indexRouter);
app.use('/activities', activitiesRouter)


app.listen(port, function(){
    console.log(`express is listening on port ${port}`)
});
