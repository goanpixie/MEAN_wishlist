var mongoose = require('mongoose')
var User = mongoose.model('User')
var Wish = mongoose.model('Wish')

console.log("I am at the users Controller-Backend")

function UsersController() {

this.createUser = function(req,res){
		User.findOne({name: req.body.name}, function(err,name){
			if(err){
				res.json(err)
			}
			else{
				if(name == null){
					var newUser = User({name: req.body.name})
					newUser.save(function(newerr){
						if(newerr){
							res.json(newerr)
						}
						else{
							res.json(newUser)
						}
					})
				}
				else{
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

this.addWish = function(req,res) {
	console.log(req)

    Wish.findOne({ _user: req.body.id, title: req.body.title, id: req.body._id , description: req.body.description, tagged: req.body.tagged}, function(err, wish) {
        if (err) {
            res.json(err)
        } else {
            if (wish == null) {
                var newWish= Wish({ _user: req.body._id, title: req.body.title, id: req.body._id , description: req.body.description, tagged: req.body.tagged })
                newWish.save(function(newerr) {
                    if (newerr) {
                        res.json(newerr)
                    } else {
                        res.json(newWish)
                    }
                })
            } else { res.json(wish) }
            }
        })
    }




this.getWish = function(req, res) {
        Wish.find({}).populate('_wish').exec(function(err, wishes) {
            if (err) {
                res.json(err)
            } else {
                res.json(wishes)
            }
        })
    }


   this.getOneWish = function(req, res) {
    	console.log("I am here")
        Wish.findOne({ _id: req.params.id }, function(err, wish) {
            if (err) {
                res.json(err)
            } else {
                res.json(wish)
            }
        })
    }


}

module.exports = new UsersController();