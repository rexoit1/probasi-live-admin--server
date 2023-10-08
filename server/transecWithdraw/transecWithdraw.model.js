const mongoose = require("mongoose");

const TransectionWithdraw = mongoose.Schema(
  {
    bkashNumber: String,
    bkashType: String,
    amount: String,
    status: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("TransectionWithdraw", TransectionWithdraw);
