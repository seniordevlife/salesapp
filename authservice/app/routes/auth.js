const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");

// REGISTER
router.post("/register", async (req, res) => {
  let response = res;
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    accountType: req.body.accountType,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "biosalessecurity"
    ).toString(),
  });

  console.log("connecting to the database...");
  const uri =
    "mongodb+srv://oluochodhiambo11:YAEdLblPZf6gXkI7@biosales.uc4u5qv.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("connected successfully");
  } catch (e) {
    console.error(e);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    MongoClient.connect(
      "mongodb+srv://oluochodhiambo11:ogjDEXVPBecjPV70@biosales.uc4u5qv.mongodb.net/?retryWrites=true&w=majority",
      function (err, client) {
        if (err) throw err;

        let db = client.db("users");
        let query = { email: req.body.email };
        db.collection("user-accounts").findOne(query, function (err, result) {
          if (err) {
            throw err;
          }
          client.close();
          let user = result;
          console.log(user);
          !user && res.status(401).json("Wrong credentials!");
          const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
          );
          const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
          originalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials!");
          const accessToken = jwt.sign(
            {
              id: user._id,
              isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "2d" }
          );
          const { password, ...others } = user;

          res.status(200).json({ ...others, accessToken });
        });
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
