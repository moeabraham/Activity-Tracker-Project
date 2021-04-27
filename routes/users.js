const express = require('express');
const router = express.Router;
const usersCtrl = require('../controllers/users')

// get new form page then post the form
router.get('/users/new', usersCtrl.new)
router.post('/users', usersCtrl.create)

router.post('/activities/:id/users', usersCtrl.addToCast)

module.exports = router;