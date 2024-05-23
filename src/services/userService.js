const User = require("../models/User");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ username: userData.username });
    if (existingUser) {
      throw new Error("User Already Exists");
    }

    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async(userData) => {
    try{
const {username} = userData;
const user = await User.findOne({username});

if(!user){
    throw new Error("User does not exist")
};

const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
console.log("token",token);

return {token, user}
    } catch(error){
        throw error;
    }
}

module.exports = { registerUser, loginUser };
