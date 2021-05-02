const Activity = require('../models/activity');
// const user = require('../models/user');
const User = require('../models/user');


module.exports = {
    index

}


function index(req,res){
    User.find({}, function(err, users){
        Activity.find({}, function(err, activities){

            res.render('index', {users, user: req.user, activities})

        })


    })
};