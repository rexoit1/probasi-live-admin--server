const TransecWithdraw = require("./transecWithdraw.model");

// get all pending transection
exports.getTransecWithdraws = async (req, res) => {
  try {
    const TransecWithdraws = await Chat.find().sort({ createdAt: -1 })
      // .skip(req.query.start ? parseInt(req.query.start) : 0)
      // .limit(req.query.limit ? parseInt(req.query.limit) : 20);

    if (!TransecWithdraws)
      return res.status(200).json({ status: false, message: "No data found!" });

    return res.status(200).json({ status: true, message: "Successful", TransecWithdraws });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

exports.getTransecWithdraw = async (req, res) => {
  try {
    const transecWithdraw = await Chat.findById(req.query.transectionId)
      // .skip(req.query.start ? parseInt(req.query.start) : 0)
      // .limit(req.query.limit ? parseInt(req.query.limit) : 20);

    if (!transecWithdraw)
      return res.status(200).json({ status: false, message: "No data found!" });

    return res.status(200).json({ status: true, message: "Successful", transecWithdraw });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

// create TransecWithdraw
exports.createTransecWithdraw = async (req, res) => {
  try {
    if (
      !req.body.bkashNumber ||
      !req.body.bkashType ||
      !req.body.amount ||
      !req.body.status
    )
      return res
        .status(200)
        .json({ status: false, message: "Invalid Details!!" });

    

    // compress image
    compressImage(req.file);

    const transecWithdraw = new TransecWithdraw();
    transecWithdraw.bkashNumber = req.body.transectionId;
    transecWithdraw.bkashType = req.body.totalAmount;
    transecWithdraw.amount = req.body.amount;
    transecWithdraw.status = req.body.status;

    await transecWithdraw.save();

    return res.status(200).json({ status: true, message: "Success!!", transecWithdraw });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error !",
    });
  }
};

//delete message
exports.deleteTransecWithdraw = async (req, res, next) => {
  try {
    const transecWithdraw = await TransecWithdraw.findById(req.query.transecWithdrawId);

    if (!transecWithdraw)
      return res
        .status(200)
        .json({ status: false, message: "Chat does not Exist!" });

 
    await transecWithdraw.deleteOne();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message });
  }
};


exports.updateTransecWithdraw = async (req, res, next) => {
  try {
    const transecWithdraw = await TransecWithdraw.findById(req.query.transecWithdrawId);

    if (!TransecWithdraw)
      return res
        .status(200)
        .json({ status: false, message: "transection record does not Exist!" });


        req.body.bkashNumber ? transecWithdraw.bkashNumber = req.body.bkashNumber : '';
        req.body.bkashType ? transecWithdraw.bkashType = req.body.bkashType : '';
        req.body.amount ? transecWithdraw.amount = req.body.amount : '';
        req.body.status ? transecWithdraw.status = req.body.status : '';

    await TransecWithdraw.save();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message });
  }
};


