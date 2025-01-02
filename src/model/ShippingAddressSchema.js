const mongoose = require("mongoose");

const ShippingAddressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.models.ShippingAddress || mongoose.model("ShippingAddress", ShippingAddressSchema);
