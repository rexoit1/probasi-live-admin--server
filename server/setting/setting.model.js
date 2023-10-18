const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    referralBonus: { type: Number, default: 50 },
    loginBonus: { type: Number, default: 50 },
    agoraKey: { type: String, default: "AGORA KEY" },
    agoraCertificate: { type: String, default: "AGORA CERTIFICATE" },
    maxSecondForVideo: { type: Number, default: 30 },
    privacyPolicyLink: { type: String, default: "PRIVACY POLICY LINK" },
    privacyPolicyText: { type: String, default: "PRIVACY POLICY TEXT" },
    chatCharge: { type: Number, default: 10 },
    callCharge: { type: Number, default: 10 },
    googlePlayEmail: { type: String, default: "GOOGLE PLAY EMAIL" },
    googlePlayKey: { type: String, default: "GOOGLE PLAY KEY" },
    paypalClientsId: { type: String, default: "AdZy27XSOjQt9zuM3sShHAOwjeSwAvKM54iuqGrw-arLTu3L9Yt64kaxXfLXQhszKrvTIQX918-lE__U" },
    paypalKey: { type: String, default: "EM3CPm_85dvlc_50IVJVkdinp8ZsL5COtXmGsSfaey4iw4Mw4eChdLEIH4I8686ZJAss8eLwHgoJzfAY"},
    bkashPersonal: { type: String },
    bkashAgent: { type: String },
    googlePlaySwitch: { type: Boolean, default: false },
    stripeSwitch: { type: Boolean, default: false },
    stripePublishableKey: { type: String, default: "STRIPE PUBLISHABLE KEY" },
    stripeSecretKey: { type: String, default: "STRIPE SECRET KEY" },
    currency: { type: String, default: "$" },
    rCoinForCashOut: { type: Number, default: 20 },
    rCoinForDiamond: { type: Number, default: 20 },
    diamond: { type: Number, default: 1 },
    isAppActive: { type: Boolean, default: true },
    paymentGateway: { type: Array, default: [] },
    minRcoinForCashOut: { type: Number, default: 200 }, // minimum rCoin for withdraw [redeem]
    freeDiamondForAd: { type: Number, default: 20 },
    maxAdPerDay: { type: Number, default: 3 },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Setting", settingSchema);
