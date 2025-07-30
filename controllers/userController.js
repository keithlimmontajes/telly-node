const { db, auth } = require("../config/firebase");
const emailjs = require("@emailjs/nodejs");

exports.getUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await auth.createUser({
      email,
      password,
    });

    res.status(201).json({
      uid: userRecord.uid,
      email: userRecord.email,
    });

    res.status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.generateCode = async (req, res) => {
  const { email } = req.body;

  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 15 * 60 * 1000;

    await db.collection("twoFactorCodes").doc(email).set({
      code,
      expiresAt,
      used: false,
    });

    res.status(200).json({ code });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.verifyCode = async (req, res) => {
  const { email, code } = req.body;

  try {
    const doc = await db.collection("twoFactorCodes").doc(email).get();
    const data = doc.data();

    if (
      !doc.exists ||
      !data ||
      data.code !== code || 
      Date.now() > data.expiresAt ||
      data.used
    ) {
      return res.status(403).json({ error: "Invalid or expired code" });
    }

    await doc.ref.update({ used: true });
    res.status(200).json({ data: "success code verification!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
