const express = require("express");
const connect = require("./DB/connect");
const cors = require("cors");
// const bcrypt = require("bcryptjs");
const session = require("express-session");

const router = require("./Router/Router");
const app = express();

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: "mohannaga",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

app.use(router);

connect().then(
  app.listen(3001, () => {
    console.log("Server is listening on port 3001");
  })
);
