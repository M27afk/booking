import  jwt  from "jsonwebtoken";
import { errorHandler } from "./errorHandler.js";

 export const authenticated=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token)
    return next(errorHandler(401,"User not Authenticated!"))
    jwt.verify(token,process.env.JWT,(err,user)=>{

        if(err)
        next(errorHandler(403,"Token not valid"))
        req.user=user
        next()
    })
 }

 export const authUser=(req,res,next)=>{
    authenticated(req,res, ()=>{
        if(req.user.userid===req.params.id || req.user.admin)
       { 
        next()
    }
        else{
                return next(errorHandler(403,"You are not authorised!"))}
    })
 }

 export const authAdmin=(req,res,next)=>{
    authenticated(req,res, ()=>{
        if(req.user.admin)
       { 
        next()
    }
        else{
                return next(errorHandler(403,"You are not authorised!"))}
    })
 }