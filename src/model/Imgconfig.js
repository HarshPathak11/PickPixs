import mongoose from "mongoose";

const Configschema=new mongoose.Schema(
    {
        height:{
            type:Number,
            required:true
        },
        width:{
            type:Number,
            required:true
        },
        url:{
            type:String,
            required:true
        },
        configuredUrl:{
            type:String,
        }
    },
    {timestamps:true}
)


module.exports = mongoose.models.Imgconfig || mongoose.model('Imgconfig', Configschema);