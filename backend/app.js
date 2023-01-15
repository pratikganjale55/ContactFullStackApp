require("dotenv").config() ;

const express = require("express") ;

const app = express() ;
const cors = require("cors") ;
const connection = require("./connection/db") ;
const message = require("./routes/message")
app.use(cors()) ;
app.use(express.json()) ;

app.use(express.urlencoded({ extended : false})) ;

app.use("/", message)

app.listen("5000", () => {
    console.log("server start at 5000")
})