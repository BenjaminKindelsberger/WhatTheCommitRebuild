const commit = require("../models/commit");

exports.update = async function(req, res){

    const doc = await commit.findOne({_id: req.params.id})
    console.log(doc.votes)
    doc.votes++;
    await doc.save()
}