const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../DB/model");
const argon2 = require("argon2");
const nodemailer = require("nodemailer");
const passport = require("passport");
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohanrangajagarapu9@gmail.com",
    pass: "feabxxkqhhrnnweg",
  },
});

const router = express.Router();

router.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const user = await User.findOne({ email: email });
  if (user) {
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

//gmail

router.post("/auth/email", async (req, res) => {
  const { email } = req.body;
  // console.log(email);
  const user = await User.findOne({ email: email });
  if (user) {
    const name = user.name;
    let details = {
      from: "mohanrangajagarapu9@gmail.com",
      to: email,
      subject: "984966 is your Facebook account recovery code",
      text:
        " Hi " +
        name +
        ",We received a request to reset your Facebook password. Enter the following password reset code: 984966",
    };

    mailTransporter.sendMail(details, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email send");
      }
    });
    return res.status(200).send("found");
  } else {
    res.status(400).send("not found");
  }
});

//google
// require("./Auth");
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/auth/google/failure" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// );

// router.get("/auth/google/success", (req, res) => {
//   res.send("hello");
// });
// router.get("/auth/google/failure", (req, res) => {
//   res.send("fail");
// });

module.exports = router;
