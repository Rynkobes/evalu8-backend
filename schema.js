const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    type: String,
    class: String,
    courses: [String]
})

const User = mongoose.model('User', userSchema);

module.exports = User