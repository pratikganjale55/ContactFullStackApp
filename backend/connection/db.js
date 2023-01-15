const mongoose = require("mongoose") ;
mongoose.set('strictQuery', false);
const db = process.env.DATABASE
let connection = mongoose.connect(db)
.then(() => console.log("database connection successful"))
.catch((e) => {
    console.log(e)
}) ;



module.exports = connection ;