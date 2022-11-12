import hotel from "../models/hotel.js"


export const createHotel = async(req,res)=>{
    const newHotel = new hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch(err){
        res.status(500).json(error)

    }
}

export const updateHotel = async(req,res)=>{
    try{
        const newHotel = await hotel.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true}) //new:true returns the updated value, else returns previously stored one
        res.status(200).json(newHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const deleteHotel = async(req,res)=>{
    try{
        const status = await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}

export const getAllHotels = async(req,res)=>{
    try{
        const status = await hotel.find()
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}

export const getHotel =async(req,res)=>{
    try{
        const status = await hotel.findById(req.params.id)
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).json(err)

    }
}