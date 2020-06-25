'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    bio: String,
    profilePic: String,
    password: {
        type: String,
        required: true
    },
    phone: Number,
    deleted: {
        type: Boolean,
        defaule: false
    },
    deletedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model('User', UserSchema);
