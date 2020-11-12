import mongoose from 'mongoose';


const mongo_uri = 'mongodb://localhost/dbetitc';
        mongoose.connect(mongo_uri,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });