import mongoose from "mongoose";
const BillingAddressSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      state: { type: String },
      phoneNumber: { type: String },
      orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    },
    { timestamps: true }
  );

module.exports=mongoose.models.BillingAddress || mongoose.model("BillingAddress", BillingAddressSchema)