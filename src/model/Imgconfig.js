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
        },
        color: {
      type: String,
      enum: ["black", "blue", "rose"],
    },
    model: {
      type: String,
      enum: ["iphonex", "iphone11", "iphone12", "iphone13", "iphone14", "iphone15"],
    },
    material: {
      type: String,
      enum: ["silicone", "polycarbonate"],
    },
    finish: {
      type: String,
      enum: ["smooth", "textured"],
    }
    },
    {timestamps:true}
)


module.exports = mongoose.models.Imgconfig || mongoose.model('Imgconfig', Configschema);