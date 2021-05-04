
const Activity = require('../models/activity');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteNote,
    edit,
    update,
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

function deleteNote(req, res){
    Activity.findOne({'notes._id': req.params.id}, function(err, activity){
        activity.notes.pull(req.params.id)
        activity.save(function(){
            res.redirect(`/activities/${activity._id}`)
        })
    })
}

function edit(req, res){
    Activity.findOne({'notes._id': req.params.id}, function(err, activity){
    const note = activity.notes.id(req.params.id)
    res.render('notes/edit', {
        title: 'edit note', 
        note
    })
    })
};

function update(req, res){
    Activity.findOne({'notes._id': req.params.id}, function (err, activity){
        const note = activity.notes.id(req.params.id);
        note.content = req.body.content

        activity.save(function(){
            res.redirect(`/activities/${activity._id}`)
        })
    })
}
