import hotel from "../models/hotel.js"
import room from "../models/room.js"

export const createRoom = async(req,res,next)=>{
    const hotelId= req.params.hotelid
    const newroom = new room(req.body)
    try{
        const savedroom = await newroom.save()
        try {
            await hotel.findByIdAndUpdate(hotelId, {$push: {rooms:savedroom._id}})
        } catch (error) {
            next(err)
        }
        res.status(200).json(savedroom)
    }
    catch(err){
        next(err)

    }
}

export const updateroom = async(req,res)=>{
    try{
        const newroom = await room.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true}) //new:true returns the updated value, else returns previously stored one
        res.status(200).json(newroom)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const deleteroom = async(req,res)=>{
    const hotelId= req.params.hotelid
    try{
        await hotel.findByIdAndDelete(req.params.id)
        try {
            await hotel.findByIdAndUpdate(hotelId, {$pull: {rooms:req.params.id}})
        } catch (error) {
            next(err)
        }
        res.status(200).json("Room has been deleted.")
    }
    catch(err){
        res.status(500).json(err)

    }
}

export const getAllrooms = async(req,res)=>{
    try{
        const status = await room.find()
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}

export const getroom =async(req,res)=>{
    try{
        const status = await room.findById(req.params.id)
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}