//express
const express = require("express");
const route = express.Router();

//authentication access
const checkAccessWithKey = require("../../checkAccess");

//Controller
const TransecWithdrawController = require("./transecWithdraw.controller");


//Get getTransecWithdraws
route.get("/getTransecWithdraws", checkAccessWithKey(), TransecWithdrawController.getTransecWithdraws);
route.get("/getTransecWithdraw", checkAccessWithKey(), TransecWithdrawController.getTransecWithdraw);

//create getTransecWithdraw
route.post(
  "/createTransecWithdraw",
  checkAccessWithKey(),
  TransecWithdrawController.createTransecWithdraw
);

// delete transecWithdraws
route.delete("/updateTransecWithdraw", checkAccessWithKey(), TransecWithdrawController.updateTransecWithdraw);

route.put("/deleteTransecWithdraw", checkAccessWithKey(), TransecWithdrawController.deleteTransecWithdraw);


module.exports = route;
