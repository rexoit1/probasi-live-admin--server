const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", default: null },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video", default: null },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Comment", commentSchema);
