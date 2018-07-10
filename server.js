const express = require("express");
const mongoose = require("mongoose");
const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("What's Up Riki!!"));
// Listen on port 5000 (cause why not) But i disagree
//this commit is nice but really not needed. 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port ${port}"));
