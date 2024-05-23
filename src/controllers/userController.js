const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.registerUser(userData);
    console.log("user", user);
    res.status(201).json({
      message: "User Registered Successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async(req,res) => {
    try{
        const userData = req.body;

        const {token, userId} = await userService.loginUser(userData);

        res.status(200).json({
            message: "User Logged In Successfully",
            token,
            userId
        })

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = { registerUser, loginUser };
