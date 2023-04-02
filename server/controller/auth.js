import user from "../models/auth.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";

export const createUser = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new user({
            name:req.body.name,
            username:req.body.username,
            password:hash,
            email:req.body.email,
            isAdmin:req.body.isAdmin
        })
        await newUser.save()
        res.status(201).json("User Created")
    }
    catch(err){
        next(err)
    }
}

export const login = async (req,res,next)=>{
    try{
        const UserValid = await user.findOne({username:req.body.username})
        if(!UserValid)
        return next(errorHandler(404,"User not found!"))

       const isPwdValid = await bcrypt.compare(req.body.password, UserValid.password)
       if(!isPwdValid)
       return next(errorHandler(404,"Wrong username or password!"))

      const token=jwt.sign({userid:UserValid._id,name:UserValid.username,admin:UserValid.isAdmin}, process.env.JWT)
      const {_id,password, ...otherDetails}=UserValid._doc
      res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails})
    }
    catch(err){
        next(err)
    }
}

export const adminUser = async(req,res,next)=>{

    try{
        const admin =await user.find({isAdmin:true})
        res.status(200).json(admin)
    }
    catch(err){
        next(err)
    }
}
