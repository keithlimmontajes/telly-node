const express = require("express");
const router = express.Router();

router.get("dashboard", (req, res) => {
  res.send("Hello from dashboard");
});

module.exports = router;
