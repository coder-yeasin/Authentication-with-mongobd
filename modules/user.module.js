
const mongoose = require("mongoose");

const userSchema  = mongoose.Schema({
    username : {
        type: String
    },
    password: {
        type: String 
    },
    createAdT : {
        type: Date,
        default: Date.now
    }
});

const users = mongoose.model("user" , userSchema);
module.exports = users;