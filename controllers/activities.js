const Activity = require('../models/activity');

module.exports = {
    index,
    new: newActivity,
    create,
    show,
    edit,
    update,
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
    Activity.findById(req.params.id, function(err, activity){
        res.render('activities/show', {activity})
    })
};

function edit(req,res){
    Activity.findById(req.params.id, function(err, activity){
        // console.log(req.body)
            res.render('activities/edit',{activity} )
        
    })
}

// function update(req, res){
//     Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity){
//         activity.save(function(err){

//             res.redirect('/activities/index', { activity })


//         })
//     })
    

// }


function update(req, res){
    Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity){
        console.log(req.params.id)

        // Activity.save(function(err){
        //     // if(true){
                
        //     // }
        //     // activity.title === req.body;
        //     console.log(input.value)

        // })
    })
    
            res.redirect('activities/show', { activity })

}