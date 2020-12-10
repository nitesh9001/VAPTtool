const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },  
  password: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required:true
  },
  phoneNumber: {
    type:String,
    required:true,
  },
  CompanyName: {
    type: String,
    required: true
  },
  yourPostion: {
    type: String,
    required:true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true,
  },
  resetPasswordToken: {
    type:String
  },
  resetPasswordExpires:{
     type:Date
  }
});
module.exports = User = mongoose.model("users", UserSchema);