const express = require('express');
const morgan = require('morgan');
const port = 3000;
const session = require('express-session');

require('./config/database');
const methodOverride = require('method-override');



const indexRouter = require('./routes/index');
const activitiesRouter = require('./routes/activities');
const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

const app = express();


app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(express.static('piblic'));
app.use(methodOverride('_method'));

//  session middleware
app.use(session({
    secret: 'SEIRRocks',
    resave: false,
    saveUninitialized: true
  }));
// passport middleware
app.use(passport.initialize());
app.use(passport.session());



app.use('/', indexRouter);
app.use('/activities', activitiesRouter);
app.use('/', notesRouter);
app.use('/', usersRouter);

app.listen(port, function(){
    console.log(`express is listening on port ${port}`)
});
