const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const controller = require("./controllers/commit_controller")
const dbURL = "mongodb://127.0.0.1:27017/Commits";



mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch((err) => console.log(err))

app.use(express.static('public'));

app.get("/showall", cors(), controller.findAll);

app.get("/random", cors(), controller.findRandom);

app.get("/addvote/:id", cors(), controller.updateVotes);


