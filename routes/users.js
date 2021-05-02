const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')


//get users
router.get('/users',isLoggedIn, usersCtrl.index)

// get new form page then post the form
router.get('/users/new',isLoggedIn, usersCtrl.new)
router.post('/users',isLoggedIn, usersCtrl.create)

router.post('/activities/:id/users', isLoggedIn, usersCtrl.addToUser)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;