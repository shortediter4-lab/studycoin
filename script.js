const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGO_URL");

const User = mongoose.model("User", {
  username: String,
  coins: { type: Number, default: 0 }
});

// LOGIN / CREATE USER
app.post("/login", async (req, res) => {
  let user = await User.findOne({ username: req.body.username });

  if (!user) {
    user = await User.create({ username: req.body.username });
  }

  res.json(user);
});

// ADD COINS
app.post("/add", async (req, res) => {
  const user = await User.findById(req.body.id);
  user.coins += 10;
  await user.save();
  res.json(user);
});

// GET USER
app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.listen(5000, () => console.log("Server running"));
