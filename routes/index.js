const express = require('express');
const router = express.Router();
const passport= require('passport');

const indexCtrl = require('../controllers/index');


router.get('/', indexCtrl.index);
// login route
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))
//callback route after user logs in
router.get('/oauth2callback', passport.authenticate('google',{
    successRedirect: '/students',
    failureRedirect: '/'
}))

//logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/')
})

module.exports = router;