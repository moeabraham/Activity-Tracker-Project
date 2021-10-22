const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

// index page to show all activites
router.get('/',isLoggedIn, activitiesCtrl.index);
// new.ejs return view to add new activity
router.get('/new',isLoggedIn, activitiesCtrl.new);
router.post('/', activitiesCtrl.create)

router.get('/:id',isLoggedIn, activitiesCtrl.show)

router.get('/:id/edit',isLoggedIn, activitiesCtrl.edit)

router.put('/:id',isLoggedIn, activitiesCtrl.update )

router.delete('/:id',isLoggedIn, activitiesCtrl.delete)



function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;