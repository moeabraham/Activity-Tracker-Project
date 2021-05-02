
const Activity = require('../models/activity');
const User = require('../models/user');

module.exports = {
    create,
}

function create(req,res){
    Activity.findById(req.params.id, function(err, activity){
        console.log(activity)
        console.log(activity.notes)

        activity.notes.push(req.body);
        activity.save(function(){
            res.redirect(`/activities/${activity._id}`)
        })
    })

}