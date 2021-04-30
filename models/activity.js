 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 const noteSchema = new Schema({
     content: String,
    
 },{timestamps: true})

 const activitySchema = new Schema({
    //  type: String,
    //  duration: Date,
    //  status: Boolean,
    //  notes: String

    title: {
        type: String
    },
    duration: {
        type: Date,
        
    },
    status: {
        type: Boolean,
    },
    //              type of data              in which collection?  where you can find it
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    // notes: {
    //     type: String,
    // },
    notes: [noteSchema]
 },{ timestamps: true });


 module.exports = mongoose.model('Activity', activitySchema)