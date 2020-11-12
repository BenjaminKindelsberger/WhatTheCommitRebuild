const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

const controller = require("./controllers/commit_controller")
const commit = require("./models/commit");
const dbURL = "mongodb://127.0.0.1:27017/Commits";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(3000))
    .catch((err) => console.log(err))

app.use(express.static('public'));

app.get("/showall", async (req, res) => {
    commit.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})


app.get("/random",cors(), async (req, res) => {
    commit.countDocuments().exec(function (err, count) {
        var random = Math.floor(Math.random() * count)

        commit.findOne().skip(random).exec(
            function (err, result) {
                res.send(result);
            })
    })
})

app.put("/addvote/:id", cors(), controller.update);


