const TransecPending = require("./transecPending.model");
const fs = require("fs");
const { compressImage } = require("../../util/compressImage");

//FCM node


// get all pending transection
exports.getTransecPendings = async (req, res) => {
  try {
    const transecPendings = await TransecPending.find().sort({ createdAt: -1 })
      // .skip(req.query.start ? parseInt(req.query.start) : 0)
      // .limit(req.query.limit ? parseInt(req.query.limit) : 20);

    if (!transecPendings)
      return res.status(200).json({ status: false, message: "No data found!" });

    return res.status(200).json({ status: true, message: "Successful", transecPendings });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

exports.getTransecPending = async (req, res) => {
  try {
    const {transectionId} = req.params
    const transecPending = await TransecPending.findById(transectionId)
      // .skip(req.query.start ? parseInt(req.query.start) : 0)
      // .limit(req.query.limit ? parseInt(req.query.limit) : 20);

    if (!transecPending)
      return res.status(200).json({ status: false, message: "No data found!" });

    return res.status(200).json({ status: true, message: "Successful", transecPending });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

// create TransecPending
exports.createTransecPending = async (req, res) => {
  try {
    if (
      !req.body.transectionId ||
      !req.body.totalAmount ||
      !req.file ||
      !req.body.status
    )
      return res
        .status(200)
        .json({ status: false, message: "Invalid Details!!" });

    
      console.log('request accessssssssssing',req.file)
    // compress image
    compressImage(req.file);

    const transecPending = new TransecPending();
    transecPending.transectionId = req.body.transectionId;
    transecPending.totalAmount = req.body.totalAmount;
    transecPending.payment_ss = `${req.file.path}`;
    transecPending.status = req.body.status;
    

    await transecPending.save();

    return res.status(200).json({ status: true, message: "Success!!", transecPending });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error !",
    });
  }
};

//delete message
exports.deleteTransecPending = async (req, res, next) => {
  try {
    const {transectionId} = req.params
    const transecPending = await TransecPending.findById(transectionId);

    if (!transecPending)
      return res
        .status(200)
        .json({ status: false, message: "Transection pending info does not Exist!" });

 
    await transecPending.deleteOne();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message });
  }
};


exports.updateTransecPending = async (req, res, next) => {
  try {
    const {transectionId} = req.params
    const transecPending = await TransecPending.findById(transectionId);

    if (!TransecPending)
      return res
        .status(200)
        .json({ status: false, message: "transection record does not Exist!" });


        req.body.totalAmount ? transecPending.totalAmount = req.body.totalAmount : '';
        req.body.payment_ss ? transecPending.payment_ss = req.body.payment_ss : '';
        req.body.status ? transecPending.status = req.body.status : '';

    await transecPending.save();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message });
  }
};


