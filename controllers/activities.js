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
    Activity.find({},function(err, activities){
        User.find({}, function(err, users){
            res.render('activities/index',{ activities, currentUser:req.user,  users })

        })
    })
};

function newActivity(req,res){
    Activity.find({}, function(err, activities){
        User.find({}, function(err, users){
            res.render('activities/new', {activities,currentUser:req.user, users})

        })

    })
    // not sure why I passed activities!!?
}

function create(req,res){

    req.body.status = !!req.body.status;

    Activity.create(req.body, function(err, activity){

        
        res.redirect('/activities')
    })
}




function show(req, res){
    
    // .populate will query the user array and pull all of the docs based on the ids it finds in the array
    Activity.findById(req.params.id).populate('user').exec(function (err, activity ){
        
        User.find({},function(err, users){
            res.render('activities/show', { activity, users, user:req.user })

          
 


        } )

       
    })
};

function edit(req,res){
    Activity.findById(req.params.id, function(err, activity){
        User.findById({_id}, function(err, users){
            activity.save(function(err){
                res.render('activities/edit', {activity,user:req.user, users} )

            })

        })
        // console.log(req.body)
        
    })
}




function update(req, res){
    console.log(req.params.id, req.body)
    Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity){
        console.log(req.params.id)
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