const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

// index page to show all activites
router.get('/', activitiesCtrl.index);
// new.ejs return view to add new activity
router.get('/new',activitiesCtrl.new);
router.post('/', activitiesCtrl.create)


module.exports = router;