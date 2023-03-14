const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../DB/model");
const argon2 = require("argon2");

const router = express.Router();

router.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const user = await User.findOne({ email: email });
  if (user) {
    // alert(
    //   "Sorry, the email you entered is already associated with an account"
    // );
    return res.status(400).send("already in");
  }

  const hash = await argon2.hash(password);

  const data = await User.create({ email: email, password: hash, name: name });

  res.send(data);
});

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).send("not found");
  }

  let verifyuser = await argon2.verify(user.password, password);

  if (verifyuser) {
    const token = jwt.sign({ email, name: user.name }, "mohannaga");
    res.send(token);
  } else {
    res.status(400).send("Invalid email or password");
  }
});

router.get("/", async (req, res) => {
  const token = req.headers.token;
  try {
    const verify = jwt.verify(token, "mohannaga");

    if (verify) {
      res.send("wellcome");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
