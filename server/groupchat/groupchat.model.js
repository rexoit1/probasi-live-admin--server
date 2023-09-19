const mongoose = require("mongoose");

const groupchatSchema = mongoose.Schema(
  {
    groupId: String,
    // messageType: String,
    // message: String,
    groupName: String,
    image: String,
    friends: [{type:mongoose.Schema.Types.ObjectId,ref: 'User' }],
    date: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Groupchat", groupchatSchema);


