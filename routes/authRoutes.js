const express = require("express");
const router = express.Router();

/** CONTROLLERS */
const { loginWithEmail } = require("../controllers/authController");

/** ROUTES */
router.post("/login", loginWithEmail);

module.exports = router;