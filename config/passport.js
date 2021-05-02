const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
// const Activity = require('../models/activity')

// require('./config/database');
// require('./config/passport');




// we use passport.use to plug in the login options
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
},  function(accessToken, refreshToken, profile, cb){
        User.findOne({googleId: profile.id}, function(err, user){
            // check for student or create one
            // handle errors
            if (err) return cb(err)
            if(user){
                return cb(null, user)
            } else {
                // student does not exist
                const newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    avatarURL: profile.photos[0].value
                });
                newUser.save(function(err){
                    if(err) return cb(err);
                    return cb(null, newUser)
                })
            }
        })

}

))

// passport serializeUser
passport.serializeUser(function(user, done){
    done(null, user.id)
})

// passport deserializeUser
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user) // creates req.user at this moment
    })
})