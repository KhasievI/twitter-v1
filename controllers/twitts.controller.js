const Twitt = require("../models/Twitt.model");

module.exports.twittController = {
  addTwitt: (req, res) => {
    Twitt.create({
      text: req.body.text,
      user: req.body.user,
    }).then((data) => {
      User.twitts.push(data);
    });
  },
  deleteTwitt: (req, res) => {
    Twitt.findByIdAndDelete(req.params.id).then((data) => {
      res.json(data);
    });
  },
  getTwitts: (req, res) => {
    Twitt.find()
      .populate("user")
      .then((data) => {
        res.json(data);
      });
  },
  getTwittsByUserId: (req, res) => {
    Twitt.find({ user: req.params.id })
      .populate("user")
      .then((data) => {
        res.json(data);
      });
  },
  likePost: (req, res) => {
    Twitt.findByIdAndUpdate(req.params.id, {
      $push: { likes: req.body.user },
    }).then((data) => {
      res.json(data);
    });
  },
};
