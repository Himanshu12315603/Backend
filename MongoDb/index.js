const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/user_app")

const User = mongoose.model('Users', {name: String, email: String, password: String });

// CRUD:- create, read, update, delete

// read user
const existingUser = await User.findOne({email})


//create user
const user = new User({
    name: 'imanshu Kumar',
    email: 'himansu@gmial.com',
    password: '123429'
})

user.save();
