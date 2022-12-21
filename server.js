const express =  require('express');
const app = express();
const {Connection} = require("./database/db")
const dotenv = require("dotenv").config()
const cors = require("cors")
const {userRouter} = require("./routes/userRoute")
const {postRouter} = require("./routes/postRoutes")
const path = require("path")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("./Files",express.static("Files"))
mongoose.set('strictQuery', true);


const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username,password)
app.use("/users",userRouter)
app.use("/posts",postRouter)


app.use(express.static(path.join(__dirname,"./client/build")))

app.get("*",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"./client/build/index.html"))
})


const PORT = process.env.PORT || 8300

app.listen(PORT ,()=>{
    console.log(`server is running at ${PORT} `)
})
