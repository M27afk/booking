import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app=express()
dotenv.config()
//route imports
import HotelRoute from "./routes/hotel.js"

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


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/hotel",HotelRoute)


app.listen(port,()=>{
    connect()
    console.log(`Process running on ${port}`)
})  




