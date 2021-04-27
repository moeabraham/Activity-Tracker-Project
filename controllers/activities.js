const Activity = require('../models/activity');
const User = require('../models/user');


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
        res.render('activities/index',{ activities })
    })
};

function newActivity(req,res){
    Activity.find({}, function(err, activities){
        res.render('activities/new', {activities})

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
        User.find(
          {_id: {$nin: activity.user}},
          function(err, users){
            res.render('activities/show', { activity })

          }  
        )
    })
};


// function update(req, res){
//     Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity){
//         activity.save(function(err){

//             res.redirect('/activities/index', { activity })


//         })
//     })
    

// }
function edit(req,res){
    Activity.findById(req.params.id, function(err, activity){
        // console.log(req.body)
            res.render('activities/edit', {activity} )
        
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