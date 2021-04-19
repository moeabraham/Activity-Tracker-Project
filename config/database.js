const mongoose = require('mongoose');
const connectionString= 'mongodb+srv://admin:abc1234@cluster0.9vfr4.mongodb.net/Activity-tracker?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`connected to MongoDB at ${db.host}: ${db.port}`)
});