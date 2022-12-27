import User from "../models/auth.js"


export const updateUser = async(req,res)=>{
    try{
        const newUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true}) //new:true returns the updated value, else returns previously stored one
        res.status(200).json(newUser)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const status = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}

export const getAllUsers = async(req,res)=>{
    try{
        const status = await User.find()
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}

export const getUser =async(req,res)=>{
    try{
        const status = await User.findById(req.params.id)
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}