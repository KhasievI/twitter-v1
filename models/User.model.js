const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  twitts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  saves: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Twitt",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
