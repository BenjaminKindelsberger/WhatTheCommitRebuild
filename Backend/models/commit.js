const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commitSchema = new Schema(
    {
        message: {type: String, required: true},
        votes: {type: Number, required: true},
    },
    {timestamps: true}
)

const Commit = mongoose.model("commits", commitSchema)

module.exports = Commit;