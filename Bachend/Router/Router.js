const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../DB/model");
const argon2 = require("argon2");
const multer = require("multer");
const Uploader = require("../DB/uploadmodel");

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "img" + "-" + uniqueSuffix);
  },
});
const upload = multer({ dest: storage });

// router.post("/auth/upload", upload.single(), async (req, res) => {
//   const img = req.file;
//   const { text, email } = req.body;
//   console.log(img, text, email);
//   res.send(img);
  // try {
  //   const user = await Upload.findOne({ email: email });
  //   if (user) {
  //     const data = await Upload.updateOne({ text: text, img: img });
  //   } else {
  //     const data = await User.create({ email: email, text: text, img: img });
  //   }
  // } catch (error) {
  //   res.status(500).send(error);
  // }
// });

module.exports = router;
