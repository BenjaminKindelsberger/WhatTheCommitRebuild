const commit = require("../models/commit");

exports.findAll = async function(req, res){
    commit.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
}

exports.findRandom = async function(req,res){

        commit.countDocuments().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)
    
            commit.findOne().skip(random).exec(
                function (err, result) {
                    res.send(result);
                })
        })
}

exports.updateVotes = async function(req, res){

    commit.findOne({ _id: req.params.id }).then((result) => {
        result.votes++
        result.save()
        res.send(result)
    })
    
}