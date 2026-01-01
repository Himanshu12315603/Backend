const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Himanshu12345:cMOh2IzEBigVayib@cluster0.di3aai5.mongodb.net/todo-app');
//mongoose.connect(process.env);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
