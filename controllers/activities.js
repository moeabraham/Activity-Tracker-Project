const Activity = require('../models/activity');
const User = require('../models/user');
// const passport = require('../config/passport')

module.exports = {
    index,
    new: newActivity,
    create,
    show,
    edit,
    update,
    delete: newDelete,
};


function index(req, res){
    // console.log(req.user,'is the user')
    Activity.find({},function(err, activities){
        User.find({}, function(err, users){
            res.render('activities/index',{ activities, user:req.user,  users })

        })
    })
};


  

function newActivity(req,res){
    Activity.find({}, function(err, activities){
        User.find({}, function(err, users){
            res.render('activities/new', {activities,user:req.user, users})

        })

    })
    // not sure why I passed activities!!?
}

function create(req,res){

    // req.body.status = !!req.body.status;

    Activity.create(req.body, function(err, activity){
        console.log('this is req.body', req.body)
        console.log('activity', activity)
        // console.log('this is req.user', req.user)
        // console.log('this is req.params.id', req.params.id)
        // console.log('this is req.params', req)


        res.redirect('/activities')
    })
}




function show(req, res){
    // console.log(req,'this is req.user')
    // .populate will query the user array and pull all of the docs based on the ids it finds in the array
    Activity.findById(req.params.id).populate('users').exec(function (err, activity ){
        User.find(
            {_id : {$nin: activity.users}},function(err, users){
                // console.log(activty)
// console.log(users)
            res.render('activities/show', { activity, users, user:req.user })
            // console.log(activity +'activityy')
            // console.log(users +'users')
            // console.log(req.body)
          
 


        } )


    })
};

function edit(req,res){
    Activity.findById(req.params.id, function(err, activity){
        // console.log('this is req.params.id', req.params.id)

        User.findOne({}, function(err, users){
            activity.save(function(err){
                res.render('activities/edit', {activity,user:req.user, users} )

            })

        })
        // console.log(req.body)
        
    })
}




function update(req, res){
    Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity){
        // console.log(req.params.id)
        res.redirect('/activities')

     
        
    })
    

}   


function newDelete(req, res){
    Activity.findByIdAndDelete(req.params.id, function(err, activity){
       
        res.redirect('/activities')

    })

}
            // res.redirect('activities/show', { activity })

// Activity.save(function(err){
    //     // if(true){
            
    //     // }
    //     // activity.title === req.body;
    //     console.log(input.value)

    // })