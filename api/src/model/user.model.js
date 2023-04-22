const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    userType: { type: String, required: true },
    googleUser: { type: Boolean, required: false },
    password: { type: String, required: true },
},{
    timestamps:true
});

const User = mongoose.model('user', UserSchema);
module.exports = User;