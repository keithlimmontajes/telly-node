const express = require("express");
const router = express.Router();

/** CONTROLLERS */
const {
  getUsers,
  createUser,
  generateCode,
  verifyCode,
} = require("../controllers/userController");

/** ROUTES */
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.post("/generateCode", generateCode);
router.post("/verifyCode", verifyCode);

module.exports = router;
