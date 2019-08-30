const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database's data structure
const WordSchema = new Schema(
    {
        type: String,
        typeKr: String,
        kr: [
            String
        ]

    },
    { timestamps: true }
);

module.exports = mongoose.model("Word", WordSchema);