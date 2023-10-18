const LiveStreamingHistory = require("./liveStreamingHistory.model");
const User = require("../user/user.model");
const LiveUser = require("../liveUser/liveUser.model");
const moment = require("moment");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// get streaming summary
exports.getStreamingSummary = async (req, res) => {
  try {
    const liveStreamingHistory = await LiveStreamingHistory.findById(req.query.liveStreamingId).populate(['giftFromUser']);

    if (!liveStreamingHistory)
      return res
        .status(200)
        .json({ status: false, message: "Live Streaming Id not Found!!" });

    // remove user from live
    const user = await User.findById(liveStreamingHistory.userId);
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "User does not Exist!" });
    }
    user.isBusy = false;
    await user.save();
    // await LiveUser.findOneAndDelete({ liveUserId: user._id });

    liveStreamingHistory.endTime = new Date().toLocaleString();

    console.log(
      "startTime -----------------------------------",
      liveStreamingHistory.startTime
    );
    console.log(
      "endTime -------------------------------------",
      liveStreamingHistory.endTime
    );
    liveStreamingHistory.duration = moment
      .utc(
        moment(new Date(liveStreamingHistory.endTime)).diff(
          moment(new Date(liveStreamingHistory.startTime))
        )
      )
      .format("HH:mm:ss");
    await liveStreamingHistory.save();

    return res.status(200).json({
      status: true,
      message: "Success!!",
      liveStreamingHistory,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};


exports.updateGiftFromUser = async (req, res) => {
  const giftFromUser = req.body;
  try {
    const liveStreamingHistory = await LiveStreamingHistory.find({_id:ObjectId(req.body.liveStreamingId)});

    if (!liveStreamingHistory)
      return res
        .status(200)
        .json({ status: false, message: "Live Streaming not Found!!" });

    

    let {giftFromUserId} = req.body
    const user = await User.findById(giftFromUserId);
    // console.log("eryhrtfgwe",user)
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "User does not Exist!" });
    }

    

    const userid = ObjectId(giftFromUserId);
    const filter = { _id: ObjectId(req.body.liveStreamingId) };

    const updatedLiveStreamingHistory = await LiveStreamingHistory.findOneAndUpdate(
      filter,
      { $push: { giftFromUser: giftFromUser } },
      { new: true }
    ).exec();
    console.log("oigh8sre90yfg",updatedLiveStreamingHistory)

    return res.status(200).json({
      status: true,
      message: "Success!!",
      updatedLiveStreamingHistory,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};


exports.getAllStreamingSummary = async (req, res) => {

  try {
    // const liveStreamingHistory = await LiveStreamingHistory.findById(req?.query?.liveStreamingId)
    // .populate(['giftFromUser']);

    const liveHistory = await LiveStreamingHistory.find(
      {
        userId : req?.query?.liveStreamingId,
        gifts : { $ne: 0 }
      }

    ).populate(['giftFromUser'])
    
    // const liveExpendData = liveHistory?.giftFromUser.populate('name','username')
    console.log('liveHistory: '+ liveHistory);

    // if (liveHistory?.giftFromUser) {
    //   // const liveExpendData = liveHistory?.giftFromUser('name','username')

    // console.log('liveHistory: '+ liveExpendData);
    // }


    // const respo = json({name:user.name, userID: user.username})
    // console.log(respo)
 

    if (!liveHistory)
      return res
        .status(200)
        .json({ status: false, message: "Live Streaming not Found!!" });

    return res.status(200).json({
      status: true,
      message: "Success!!",
      liveHistory,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};