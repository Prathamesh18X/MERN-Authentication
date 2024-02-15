const User = require('../models/userModels')

const authUser = async (req, res) => {
  res.status(200).json({ Message: "welcome to auth" });
};
const userLogout = async (req, res) => {
  res.status(200).json({ Message: "its logout" });
};
const getUserProfile = async (req, res) => {
  res.status(200).json({ Message: "welcome to get profile" });
};
const updateUserProfile = async (req, res) => {
  res.status(200).json({ Message: "welcome to update profile" });
};

module.exports = { authUser, userLogout, getUserProfile, updateUserProfile };
