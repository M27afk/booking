import express from "express";
import {createUser,login } from "../controller/auth.js";
import {updateUser ,deleteUser,getAllUsers,getUser} from "../controller/user.js";
import { authAdmin, authenticated, authUser } from "../utils/tokenVerify.js";

const Route = express.Router()

Route.route("/register").post(createUser)

Route.route("/login").post(login)   


Route.get("/find",authAdmin,getAllUsers)

Route.route("/:id").put(authUser,updateUser)
                    .delete(authUser,deleteUser)

// Route.get("/verify",authenticated,(req,res,next)=>{
//     res.send("Hello "+(req.user.name)+"! You are logged in")
// })

// Route.get("/verifyuser/:id",authUser,(req,res,next)=>{
//     res.send("Hello "+(req.user.name)+"! You are authorised")
// })

// Route.get("/verifyadmin/:id",authAdmin,(req,res,next)=>{
//     res.send("Hello "+(req.user.name)+"! You are accessed with Admin permissions")
// })


export default Route