import user from "../models/auth.js"

export const createUser = async(req,res,next)=>{
    const newUser = new user(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }
    catch(err){
        next(err)

    }
}