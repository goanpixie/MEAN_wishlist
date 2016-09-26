console.log("I am in the model-->user.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
	 _wish: [{type: Schema.Types.ObjectId, ref: 'Wish'}],
    name: {
    type: String,
    required: [true, "Your username is required"],
    maxlength: [20, "Your username cannot be longer than 20 characters"],
    validate: {
      validator: function(un){
        return /^[a-z0-9]+$/i.test(un)
      },
      message: "Your username can only contain alphanumeric characters"
    }
  }
},{timestamps:true})



var User = mongoose.model('User', UserSchema)