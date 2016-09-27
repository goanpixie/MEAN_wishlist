var mongoose = require('mongoose')
var User = mongoose.model('User')
var Wish = mongoose.model('Wish')

console.log("I am at the users Controller-Backend")

function UsersController() {

    this.createUser = function(req, res) {
        User.findOne({ name: req.body.name }, function(err, name) {
            if (err) {
                res.json(err)
            } else {
                if (name == null) {
                    var newUser = User({ name: req.body.name })
                    newUser.save(function(newerr) {
                        if (newerr) {
                            res.json(newerr)
                        } else {
                            res.json(newUser)
                        }
                    })
                } else {
                    res.json(name)
                }
            }
        })
    }

    this.getUser = function(req, res) {
        User.find({}).populate('_user').exec(function(err, users) {
            if (err) {
                res.json(err)
            } else {
                res.json(users)
            }
        })
    }

    this.addWish = function(req, res) {
        console.log(req.body)
        var newWish = Wish({ _user: req.body.userid, name: req.body.name, title: req.body.title, description: req.body.description, tagged: req.body.tagged })
        console.log(newWish)
        newWish.save(function(err) {
            if (err) {
                res.json(err)
            } else {
                User.findOne({ _id: req.body.userid, name: req.body.name}, function(err, user) {
                    if (err) {
                        res.json(err)
                    } else {
                        user._wish.push(newWish)
                        user.save(function(err) {
                            if (err) {
                                res.json(err)
                            } else {
                                res.send()
                            }
                        })
                    }

                })
            }
        })
    }


    this.getWish = function(req, res) {
        Wish.find({}).populate('_user').exec(function(err, wishes) {
            if (err) {
                res.json(err)
            } else {
                res.json(wishes)
            }
        })
    }


    this.getWishByUser = function(req, res) {
        console.log("I am here")
        Wish.find({ _user: req.params._user }).populate('_user').exec(function(err, wish) {
            if (err) {
                res.json(err)
            } else {
                res.json(wish)
            }
        })
    }
}

module.exports = new UsersController();
