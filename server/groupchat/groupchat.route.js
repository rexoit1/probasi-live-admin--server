const express = require("express");
const { GroupchatCreate } = require("./groupchat.controller");
const route = express.Router();

const checkAccessWithKey = require("../../checkAccess");

route.post(
    "/addgroup", 
    // checkAccessWithKey(),
    GroupchatCreate
  );

module.exports = route;