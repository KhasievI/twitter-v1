const express = require("express");
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    twitId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twitt'
    },
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment