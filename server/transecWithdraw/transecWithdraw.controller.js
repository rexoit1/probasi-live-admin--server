const TransecWithdraw = require("./transecWithdraw.model");

// get all pending transection
exports.getTransecWithdraws = async (req, res) => {
  try {
    const TransecWithdraws = await TransecWithdraw.find().sort({ createdAt: -1 })
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
    const {transecWithdrawId} = req.params
    const transecWithdraw = await TransecWithdraw.findById(transecWithdrawId)
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

    const transecWithdraw = new TransecWithdraw();
    transecWithdraw.bkashNumber = req.body.bkashNumber;
    transecWithdraw.bkashType = req.body.bkashType;
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
    const {transecWithdrawId} = req.params
    const transecWithdraw = await TransecWithdraw.findById(transecWithdrawId);

    if (!transecWithdraw)
      return res
        .status(200)
        .json({ status: false, message: "TransecWithdraw info does not Exist!" });

 
    await transecWithdraw.deleteOne();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message });
  }
};


exports.updateTransecWithdraw = async (req, res, next) => {
  try {
    const {transecWithdrawId} = req.params
    const transecWithdraw = await TransecWithdraw.findById(transecWithdrawId);

    if (!transecWithdraw)
      return res
        .status(200)
        .json({ status: false, message: "transection record does not Exist!" });


        req.body.bkashNumber ? transecWithdraw.bkashNumber = req.body.bkashNumber : '';
        req.body.bkashType ? transecWithdraw.bkashType = req.body.bkashType : '';
        req.body.amount ? transecWithdraw.amount = req.body.amount : '';
        req.body.status ? transecWithdraw.status = req.body.status : '';

    await transecWithdraw.save();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message });
  }
};


