const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    type: String,
    class: String
})

const User = mongoose.model('User', userSchema);

exports.User = { User }