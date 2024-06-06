const User = require("../../Models/User");

//GetUserById
const getUserById = async (req, res) => {
    console.log(req.params);
    const userId = req.params.userId;
    console.log(userId);
    try {
      const userDetails = await User.findOne({ _id: userId });
      console.log(userId);
      console.log(userDetails);
      return res.json({ data: userDetails });
    } catch (err) {
      return res.json({
        data: null,
        error: err,
        message: `User is not present with this id ${userId}`,
      });
    }
  };

  
module.exports = {
    getUserById,
  };