const Setting = require("./setting.model");

exports.store = async (req, res) => {
  try {
    const setting = new Setting();

    setting.referralBonus = 20;

    await setting.save();

    return res
      .status(200)
      .json({ status: true, message: "Success!!", setting });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

exports.getSetting = async (req, res) => {
  try {
    const setting = await Setting.findOne();

    return res
      .status(200)
      .json({ status: true, message: "Success!!", setting });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};
// update the setting data
exports.update = async (req, res) => {
  try {
    const setting = await Setting.findById(req.params.settingId);

    if (!setting)
      return res
        .status(200)
        .json({ status: false, message: "Setting data does not Exist!" });

    // setting.referralBonus = req.body?.referralBonus
    //   ? req.body?.referralBonus
    //   : setting.referralBonus;
    setting.agoraKey = req.body?.agoraKey
      ? req.body?.agoraKey
      : setting.agoraKey;
    setting.agoraCertificate = req.body.agoraCertificate
      ? req.body.agoraCertificate
      : setting.agoraCertificate;
    setting.maxSecondForVideo = req.body.maxSecondForVideo
      ? req.body.maxSecondForVideo
      : setting.maxSecondForVideo;
    setting.privacyPolicyLink = req.body.privacyPolicyLink
      ? req.body.privacyPolicyLink
      : setting.privacyPolicyLink;
    setting.privacyPolicyText = req.body.privacyPolicyText
      ? req.body.privacyPolicyText
      : setting.privacyPolicyText;
    setting.chatCharge = req.body.chatCharge
      ? req.body.chatCharge
      : setting.chatCharge;
    setting.callCharge = req.body.callCharge
      ? req.body.callCharge
      : setting.callCharge;
    setting.googlePlayEmail = req.body.googlePlayEmail
      ? req.body.googlePlayEmail
      : setting.googlePlayEmail;
    setting.googlePlayKey = req.body.googlePlayKey
      ? req.body.googlePlayKey
      : setting.googlePlayKey;

      setting.paypalClientsId = req.body.paypalClientsId
      ? req.body.paypalClientsId
      : setting.paypalClientsId;
    setting.paypalKey = req.body.paypalKey
      ? req.body.paypalKey
      : setting.paypalKey;

    setting.bkashPersonal = req.body.bkashPersonal
      ? req.body.bkashPersonal
      : setting.bkashPersonal;
    setting.bkashAgent = req.body.bkashAgent
      ? req.body.bkashAgent
      : setting.bkashAgent;
    setting.stripePublishableKey = req.body.stripePublishableKey
      ? req.body.stripePublishableKey
      : setting.stripePublishableKey;
    setting.stripeSecretKey = req.body.stripeSecretKey
      ? req.body.stripeSecretKey
      : setting.stripeSecretKey;
    setting.currency = req.body.currency ? req.body.currency : setting.currency;
    setting.diamond = req.body.diamond ? req.body.diamond : setting.diamond;
    setting.rCoinForDiamond = req.body.rCoinForDiamond
      ? req.body.rCoinForDiamond
      : setting.rCoinForDiamond; // 100diamond  = rCoin
    setting.minRcoinForCashOut = req.body.minRcoinForCaseOut
      ? req.body.minRcoinForCaseOut
      : setting.minRcoinForCashOut;
    setting.paymentGateway = req.body.paymentGateway
      ? req.body.paymentGateway
      : setting.paymentGateway;
    setting.loginBonus = req.body.loginBonus
      ? req.body.loginBonus
      : setting.loginBonus;
if(setting.diamond == 0){
  return res
  .status(200)
  .json({ status: false, message: "Diamond value must greater than 0 ." });
}
    if (setting.diamond > setting.rCoinForDiamond) {
      return res
        .status(200)
        .json({ status: false, message: "PCoin is less then Diamond" });
    }
    await setting.save();

    return res
      .status(200)
      .json({ status: true, message: "Success!!", setting });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

// handle setting switch
exports.handleSwitch = async (req, res) => {
  try {
    const setting = await Setting.findById(req.params.settingId);

    if (!setting)
      return res
        .status(200)
        .json({ status: false, message: "Setting data does not Exist!" });

    if (req.query.type === "googlePlay") {
      setting.googlePlaySwitch = !setting.googlePlaySwitch;
    } else if (req.query.type === "stripe") {
      setting.stripeSwitch = !setting.stripeSwitch;
    } else {
      setting.isAppActive = !setting.isAppActive;
    }

    await setting.save();

    return res
      .status(200)
      .json({ status: true, message: "Success!!", setting });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};
