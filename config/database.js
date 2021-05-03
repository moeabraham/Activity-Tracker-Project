const mongoose = require('mongoose');

const connectionURI= process.env.DATABASE_URI

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`connected to MongoDB at ${db.host}: ${db.port}`)
});