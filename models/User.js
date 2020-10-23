const mongoose = require('mongoose');

//User model schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema)