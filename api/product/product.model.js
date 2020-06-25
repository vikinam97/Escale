'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "bussiness name is required"]
    },
    mrp: {
        type: Number,
        required: [true, "mrp rate is required"]
    },
    description: String,
    images: [{
        type: String
    }],
    deleted: {
        type: Boolean,
        default: false
    },
    deletedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user required"]
    }
});

module.exports = mongoose.model('Product', ProductSchema);
