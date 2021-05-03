const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');


const port =process.env.PORT || '3000';

require('dotenv').config();




require('./config/passport');
require('./config/database');




//  session middleware
// passport middleware






const indexRouter = require('./routes/index');
const activitiesRouter = require('./routes/activities');
const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

const app = express();


app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(session({
  secret: 'SEIRRocks',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.use(express.json());
app.use(express.static('piblic'));
app.use(methodOverride('_method'));




app.use('/', indexRouter);
app.use('/activities', activitiesRouter);
app.use('/', notesRouter);
app.use('/', usersRouter);

app.listen(port, function(){
    console.log(`express is listening on port ${port}`)
});
