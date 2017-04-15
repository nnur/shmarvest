const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    encryptedPassword: String,
    name: String,
    contactPhone: String,
    billableRate: Number,
    timeZone: String,
    isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;