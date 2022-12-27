import mongoose, { Schema } from "mongoose";
const userSchema= new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            required:false
        }
        
    },  
    {timestamps:true}

)

export default mongoose.model("User",userSchema)