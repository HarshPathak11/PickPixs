import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    configuration: { type: mongoose.Schema.Types.ObjectId, ref: "Imgconfig", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["fulfilled", "shipped", "awaiting_shipment"],
      default: "awaiting_shipment",
    },
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: "ShippingAddress" },
    billingAddress: { type: mongoose.Schema.Types.ObjectId, ref: "BillingAddress" },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
