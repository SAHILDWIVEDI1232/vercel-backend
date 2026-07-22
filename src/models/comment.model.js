const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food"
    }
});

module.exports = mongoose.model("comment", commentSchema);