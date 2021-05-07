import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/domicilios', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(db => console.log("Database listening"))
    .catch(err => console.log(err))