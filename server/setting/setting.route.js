const express = require("express");
const router = express.Router();

const SettingController = require("./setting.controller");

const checkAccessWithKey = require("../../checkAccess");

// store setting data
// router.post("/", checkAccessWithKey(), SettingController.store);

// update setting
router.patch("/:settingId", SettingController.update);

//splashScreen setting get api
router.get("/", SettingController.getSetting);

router.put("/:settingId", SettingController.handleSwitch);

module.exports = router;
