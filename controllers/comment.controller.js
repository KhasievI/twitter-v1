const Comment = require('../models/Comments.model');

module.exports.commentControler = {
    addComment: (req, res) => {
        Comment.create({
            text: req.body.text,
            user: req.body.user,
            twitId: req.params.id,
        }).then((data) => {
            res.json(data)
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getCommemt: (req, res) => {
        Comment.find().populate('user twitId').then((data) => {
            res.json(data)
        })
    },
}

