const User = require('../models/user');
const Activity = require('../models/activity')

module.exports = {
    new:newUser,
    create,
    addToCast,
}

function newUser(req, res){

    User.find({}, function(err, users){


        res.render('users/new',{
            title: "add a user",
            users  //obj. shorthand
    })



    
    });

}

function create(req, res){
    User.findById(req.params.id, function(err, user){
        res.redirect('users/new')

    })
};

function addToCast(req, res){

Activiyu.findById(req.params.id, function(err, activity){
    activity.user.push(req.body.performerId)
    activity.save(function(err){
        res.redirect(`/activities/${activity._id}`)
    })
})
}