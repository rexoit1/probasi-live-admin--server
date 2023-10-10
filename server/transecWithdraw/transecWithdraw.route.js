//express
const express = require("express");
const router = express.Router();

//authentication access
const checkAccessWithKey = require("../../checkAccess");

//Controller
const TransecWithdrawController = require("./transecWithdraw.controller");


//Get getTransecWithdraws
// route.get("/getTransecWithdraws", checkAccessWithKey(), TransecWithdrawController.getTransecWithdraws);
// route.get("/getTransecWithdraw/:transecWithdrawId", checkAccessWithKey(), TransecWithdrawController.getTransecWithdraw);

// //create getTransecWithdraw
// route.post(
//   "/createTransecWithdraw",
//   checkAccessWithKey(),
//   TransecWithdrawController.createTransecWithdraw
// );

// // delete transecWithdraws
// route.delete("/updateTransecWithdraw/:transecWithdrawId", checkAccessWithKey(), TransecWithdrawController.updateTransecWithdraw);

// route.put("/deleteTransecWithdraw/:transecWithdrawId", checkAccessWithKey(), TransecWithdrawController.deleteTransecWithdraw);

 router.route('/')
 .get( //checkAccessWithKey(), 
        TransecWithdrawController.getTransecWithdraws)
 .post(//   checkAccessWithKey(),
        TransecWithdrawController.createTransecWithdraw);

  router.route('/:transecWithdrawId')
  .get( //checkAccessWithKey(), 
          TransecWithdrawController.getTransecWithdraw)
  .put(//   checkAccessWithKey(),
          TransecWithdrawController.updateTransecWithdraw)
  .delete(//   checkAccessWithKey(),
        TransecWithdrawController.deleteTransecWithdraw);


module.exports = router;
