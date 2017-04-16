const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
    name: String,
    phone: String,
    billableRate: Number,
    timeZone: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;