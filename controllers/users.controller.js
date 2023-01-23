const User = require('../models/User.model')

module.exports.userController = {
    addUser: (req, res) => {
        User.create({
            name: req.body.name,
            age: req.body.age,
        }).then((user) => {
            res.json(user)
        })
    },
    getUsers: (req, res) => {
        User.find().populate('twitts saves').then((user) => {
            res.json(user)
        })
    }, 
    addSaves: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {$push: { saves: req.body.saves }})
        .then((data) => {
            res.json(data)
        })
    }
}
