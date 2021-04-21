const Activity = require('../models/activity');

module.exports = {
    index,
    new: newActivity,
    create,
};


function index(req, res){
    Activity.find({},function(err, activities){
        res.render('activities/index',{ activities })
    })
};

function newActivity(req,res){
    res.render('activities/new', {})
    // not sure why I passed activities!!?
}

function create(req,res){

    req.body.nowShowing = !!req.body.nowShowing;

    Activity.create(req.body, function(err, activities){
        
        res.redirect('/activities')
    })
}