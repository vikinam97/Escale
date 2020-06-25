'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: {
        type: String,
        required: [true, "bussiness name is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "bussiness email is required"]
    },
    deleted: {
        type: Boolean,
        defaule: false
    },
    deletedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    regNo: {
        type: Number,
        unique: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user required"]
    }
});

module.exports = mongoose.model('Business', BusinessSchema);
