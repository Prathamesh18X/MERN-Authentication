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

//logout //
const logoutUser = async (req, res) => {
  res.cookie('jwt','',{
    httpOnly : true,
    expires : new Date(0), 
  })

  res.status(200).json({ Message: "User logged out" });
};

//Get user Details //
const getUserProfile = async (req, res) => {
  const user = {
    _id : req.user._id,
    userName : req.user.userName,
    email : req.user.email,
  }
  res.status(200).json(user);
};

//Update User //
const updateUserProfile = async (req, res) => {
  const existingUser = await User.findById(req.user._id);
  if(existingUser){
    existingUser.name = req.body.name;
    existingUser.email = req.body.email;

    if(req.body.password){
      existingUser.password = req.body.password;
    }
    const updatedUser = await existingUser.save()

    res.status(200).json({
      _id : updatedUser._id,
      userName : updatedUser.userName,
      email : updatedUser.email,
    });
  }else{
    res.status(404).json({message : 'user cannot update'})
  }
  // res.status(200).json({ Message: "Welcome to update profile" });
};

module.exports = { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile };
