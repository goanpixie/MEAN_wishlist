console.log("Ia m in the model-->wish.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var WishSchema = new mongoose.Schema({
_user: {type: Schema.Types.ObjectId, ref: 'User'},

    
    title : {
    type:String,
    required: [true, "Title is required"],
    trim: true,
    minlength: [5," Title must be atleast 5 letters"]
  },

  description: {
    type:String,
    required: [true, "Descripton is required"],
    trim: true,
    minlength: [10,"Description must be atleast 10 letters"],
  },

  tagged: {
    type: String,
}
}
,{timestamps:true})


var Wish = mongoose.model('Wish', WishSchema)
