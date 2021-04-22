const Activity = require('../models/activity');

module.exports = {
    create,
}

function create(req,res){
    Activity.findById(req.params.id, function(err, activity){
        activity.notes.push(req.body);
        activity.save(function(){
            res.redirect(`/activities/${activity._id}`)
        })
    })

}