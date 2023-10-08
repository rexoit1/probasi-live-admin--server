//express
const express = require("express");
const route = express.Router();

//authentication access
const checkAccessWithKey = require("../../checkAccess");

//Controller
const TransecPendingController = require("./transecPending.controller");

//multer
const multer = require("multer");
const storage = require("../../util/multer");
const router = require("../setting/setting.route");
const upload = multer({
  storage,
});

//Get Route Of Chat
// route.get("/getTransecPendings", checkAccessWithKey(), TransecPendingController.getTransecPendings);
// route.get("/getTransecPendings", TransecPendingController.getTransecPendings);
// route.get("/getTransecPending", checkAccessWithKey(), TransecPendingController.getTransecPending);

route.get("/getTransecPendings", TransecPendingController.getTransecPendings);
route.get("/getTransecPending", checkAccessWithKey(), TransecPendingController.getTransecPending);

//create chat-topic
route.post(
  "/createTransecPending",
  // checkAccessWithKey(),
  upload.single("payment_ss"),
  TransecPendingController.createTransecPending
);

// delete message
route.delete("/updateTransecPending", checkAccessWithKey(), TransecPendingController.updateTransecPending);

route.put("/deleteTransecPending", checkAccessWithKey(), TransecPendingController.deleteTransecPending);


module.exports = route;
