import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      email: { type: String, required: true },
      orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
  