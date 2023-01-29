import hotel from "../models/hotel.js"


export const createHotel = async(req,res,next)=>{
    const newHotel = new hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch(err){
        next(err)

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

export const getCount= async(req,res,next)=>{
  
    const cities=req.query.cities.split(",")

    try{

        const count=await Promise.all(cities.map(city=>{
            return hotel.countDocuments({city:city})
        }))
        res.status(200).json(count)

    }
    catch(err){
        next(err)
    }
}

export const getType= async(req,res,next)=>{

    try{
        const hotels=await hotel.countDocuments({type:"Hotel"})
        const apartment=await hotel.countDocuments({type:"Apartment"})
        const villa=await hotel.countDocuments({type:"Villas"})
        const cabins=await hotel.countDocuments({type:"Cabin"})
        res.status(200).json([
                        {type:"Hotel",count:hotels },
            {type:"Villa",count:villa },
            {type:"Apartment",count:apartment},
            {type:"Cabin",count:cabins },
        ])

    }
    catch(err){
        next(err)
    }
}