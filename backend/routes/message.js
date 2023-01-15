const Route = require("express") ;

const route = Route() ;

const User = require("../model/meassageSchema")
const accountSid = process.env.TWILIO_ACCOUNT_SID ;
const authToken = process.env.TWILIO_AUTH_TOKEN ;

const twilioPhoneNum = process.env.TWILIO_PHONE_NUMBER

const client = require("twilio")(accountSid, authToken) ;


// get Message Data //

route.get("/", async(req, res) => {
    const messageData = await User.find({}) ;
    return res.send(messageData)
})

// Post message to database //

route.post("/sendotp/:userId", async(req, res) => {

    const {userId} = req.params ;
    const otp = Math.floor(100000 + Math.random() * 900000) ;
   

    const {name, message} = req.body ;

    var d = new Date();
   
    let time = d.toLocaleTimeString();
   
  
    if(!message){
        return res.status(401).send({message : "Type something..."})
    }
   
    let newMessage = await new User({userId, name, message, time, otp}) ;
    newMessage.save().then(() => {
        res.status(201).send({message : "data save"})
    })
    .catch((e) => {
        console.log(e)
    })
      // send otp message to client //

      client.messages.create({
        body : `Hi. Your OTP is: ${otp} ${time}` ,
        from : "+12056068242"  ,
        to :  "+919890830962"  
    })
    .then((msg) => {
            return res.status(201).send({massage : "massage send success"})
    })
    .catch((e) => {
        console.log(e)
        return res.json({error : e.massage})

    })
   
})


// sort data by name //

route.post("/sortName", async(req, res) => {
    const sortNameData = await User.find().sort({name : 1}) ;
    return res.send(sortNameData) ;
})

// sort data by decending time //

route.post("/sortTime", async(req, res) => {
    const sortNameData = await User.find().sort({time : -1}) ;
    return res.send(sortNameData) ;
})


module.exports = route ;