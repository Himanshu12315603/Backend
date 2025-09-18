const express = require("express")
const mongoose = require("mongoose")

const app = express();

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/user_app")

const User = mongoose.model('Users', {
    name: String, 
    email: String, 
    password: String 
});

app.post("/signup", async (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // CRUD => create, read, update, delete

    // read user
    // User.delete User.update
    const existingUser = await User.findOne({ email: username })


    if(existingUser) {
        return res.status(400).send("Username already exists");
    }

    //create user
    const user = new User({
        name: username,
        email: username,
        password: password 
    })

    user.save();
    res.json({
        "msg" : "User created succefully"
    })
})
app.listen(3000); 
