const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app=express()
const port= process.env.PORT || 5000 
app.listen(port,()=>{
    console.log(`Process running on ${port}`)
})  
app.get('/',
(req,res)=>{
    res.json({
     message:"Hello"
    })
 }
)
app.post('/',
(req,res)=>{
    res.json({
     message:"hi"
    })
 }
)
app.delete('/:id',
(req,res)=>{
    res.json({
     message:"hi",
     id:req.params.id
    })
 }
)