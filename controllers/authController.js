const emailjs = require("@emailjs/nodejs");
const { auth } = require("../config/firebase");

const loginWithEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 15 * 60 * 1000;

    const formattedTime = new Date(expiresAt).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    await emailjs.send(
      "service_pvi6gfa",
      "template_isdxtnb",
      {
        email,
        passcode: code,
        time: formattedTime,
      },
      "ClMAVIYuwm9U_Z4mo"
    );

    res.status(200).json({
      success: true,
      message: "2FA code sent",
      code,
      expiresAt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { loginWithEmail };
