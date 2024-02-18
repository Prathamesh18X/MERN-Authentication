const express = require("express");
const {protect} = require('../middleware/authMiddleware.js')
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController.js");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.route("/profile")
.get(protect, getUserProfile)
.put(protect, updateUserProfile);

module.exports = router;
