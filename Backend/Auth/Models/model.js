const mongoose = require("mongoose");


// userschema for  store signup data
const userSchema = mongoose.Schema({
  fullname: { type: String, require: true },
  email: { type: String, require: true },
  password: {type:String,require:true},
  country:{type:String,default:"India"},
  currency:{type:String,default:"INR"}
});

// user model
const User = mongoose.model("user", userSchema);

module.exports = {User};