const express = require("express");
const router = express.Router();

const LiveStreamingHistoryController = require("./liveStreamingHistory.controller");

var checkAccessWithKey = require("../../checkAccess");

//start streaming
router.get("/getStreamingSummary", 
 //checkAccessWithKey(), 
LiveStreamingHistoryController.getStreamingSummary);


router.patch("/updateGiftFromUser",LiveStreamingHistoryController.updateGiftFromUser)

router.get("/getAllStreamingSummary", 
 checkAccessWithKey(), 
LiveStreamingHistoryController.getAllStreamingSummary);



module.exports = router;
