import  mongoose, { Schema } from "mongoose";

const HotelSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        type: {
            type: String,
            required: true,
        },
        city:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        distance:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        photos:{
            type:[String]
        },
        image:{
            data:Buffer,
            contentType:String
        },
        rating:{
            type:Number,
            min:0,
            max:5
        },
        rooms:{
            type:[String]
        },
        cheapestPrice:{
            type:Number,
            required:true
        },
        featured:{
            type:Boolean,
            required:false
        }
    }
);

export default mongoose.model("Hotel",HotelSchema)