const User = require('../models/user');
const Activity = require('../models/activity')

module.exports = {
    new:newUser,
    create,
    addToUser,
    index,
}


function index(req,res){
    User.find({}, function (err, users){
        res.render('users/index', {users, 
            user: req.user
        })
    })
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

function addToUser(req, res){

Activity.findById(req.params.id, function(err, activity){
    
    activity.user.push(req.body.performerId)
    activity.save(function(err){
        res.redirect(`/activities/${activity._id}`)
    })
})
}