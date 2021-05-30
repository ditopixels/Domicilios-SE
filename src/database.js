import mongoose from 'mongoose'

mongoose.connect('', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(db => console.log("Database listening"))
    .catch(err => console.log(err))