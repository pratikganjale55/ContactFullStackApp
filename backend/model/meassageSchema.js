const mongoose = require("mongoose") ;

const User = mongoose.Schema({
      userId : {
          type : String ,
          required : true 
      },
      name : {
        type : String ,
        required : true
      },
      message : {
          type : String ,
          required : true 
      },
      time : {
          type : String ,
       
      },
      otp : {
          type :Number ,
          required : true
      }
})


const post = mongoose.model("messages", User) ;

module.exports = post ;