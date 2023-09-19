
const Group = require("./groupchat.model")

exports.GroupchatCreate = async (req, res) => {
    try {
        const {groupId, friends, groupName} = req.body;

        // const newGroup = new Group({groupId, friends, groupName}).populate('User');
        console.log(groupId, "friends:",friends, groupName)

    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: false, error: error.message || "Server Error" });
    }
  };


