import mongoose from 'mongoose';


//const mongo_uri = 'mongodb://localhost/dbetitc';
const mongo_uri = 'mongodb+srv://1Sistemas:<1Sistemas>@cluster0.k3y8i.mongodb.net/<1Sistemas>?retryWrites=true&w=majority'

        mongoose.connect(mongo_uri,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });