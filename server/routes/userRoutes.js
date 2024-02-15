const express = require("express");
const {
  authUser,
  userLogout,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController.js");
const router = express.Router();

router.post("/", authUser);
router.post("/auth", );
router.route("/profile").post(updateUserProfile).put(updateUserProfile);

module.exports = router;
