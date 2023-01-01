import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
const app=express()
dotenv.config()

//route imports
import HotelRoute from "./routes/hotel.js"
import userRoute from "./routes/auth.js"
import roomRoute from "./routes/room.js"
import { authenticated } from "./utils/tokenVerify.js"

//env variables
const port= process.env.PORT || 5000 
const mongo=process.env.MONGO

const connect = async()=>{
    try{
        await mongoose.connect(mongo)
    }
    catch(error)
    {
        throw(error)
    }
}

mongoose.connection.on("connected",()=>{
    console.log(`Connected to MongoDB`)
})
mongoose.connection.on("disconnected",()=>{
    console.log(`Disconnected from MongoDB`)
})

    
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/hotel",HotelRoute)
app.use("/user",userRoute)
app.use("/room",roomRoute)

// app.use("/user/verify",authenticated,(req,res,next)=>{
//     res.send("logged in")
//  })

app.use((err,req,res,next)=>{
    const errorStatus= err.status || 500
    const errorMessage = err.message || "Sorry Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(port,()=>{
    connect()
    console.log(`Process running on ${port}`)
})  




