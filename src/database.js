import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://juandiego:tests123@cluster0.lxmiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(db => console.log("Database listening"))
    .catch(err => console.log(err))