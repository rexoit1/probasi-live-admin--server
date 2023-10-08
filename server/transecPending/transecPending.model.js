const mongoose = require("mongoose");

const TransectionPending = mongoose.Schema(
  {
    transectionId: String,
    totalAmount: String,
    payment_ss: String,
    status: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("TransectionPending", TransectionPending);
