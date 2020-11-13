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

<<<<<<< HEAD
    commit.findOne({ _id: req.params.id }).then((result) => {
        result.votes++
        result.save()
        res.send(result)
    })
=======
    const doc = await commit.findOne({_id: req.params.id})
    console.log(doc.votes)
    doc.votes++;
    await doc.save()
    res.send(null)
>>>>>>> 7fb0a510006dbb03468a59937a9eb7861bf11feb
    
}