const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

// get new form page then post the form
router.get('/users/new', usersCtrl.new)
router.post('/users', usersCtrl.create)

router.post('/activities/:id/users', usersCtrl.addToUser)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;