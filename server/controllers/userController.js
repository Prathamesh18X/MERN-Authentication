const User = require('../models/userModels.js')
const generateToken = require('../utils/generateToken.js')


//register //
const registerUser = async (req, res) => {
    const {userName, email, password} = req.body;

    const existingUser = await User.findOne({email})
    if(existingUser){
        res.status(400).json({message : "user already exists"})
        throw new Error('User already exists')
    }

    const user = await User.create({
        userName,
        email,
        password,
    })

    if(user){
          generateToken(res , user._id)
        res.status(200).json({message : "user succesfully registered !.."})
    }else{
        res.status(400).json({message : 'Invalid User credentials'})
    }
};

//login //
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
      generateToken(res , user._id)
    res.status(200).json({message : "login succesfully!..."})
}else{
    res.status(400).json({message : 'Invalid Email or Password'})
}
};
const logoutUser = async (req, res) => {
  res.cookie('jwt','',{
    httpOnly : true,
    expires : new Date(0), 
  })

  res.status(200).json({ Message: "User logged out" });
};
const getUserProfile = async (req, res) => {
  res.status(200).json({ Message: "welcome to get profile" });
};
const updateUserProfile = async (req, res) => {
  res.status(200).json({ Message: "welcome to update profile" });
};

module.exports = { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile };
