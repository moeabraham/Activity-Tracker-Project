 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 

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
    notes: {
        type: String,
    }
 },{ timestamps: true });


 module.exports = mongoose.model('Activity', activitySchema)