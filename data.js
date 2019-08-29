const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database's data structure
const WordSchema = new Schema(
    {
        food: {
            en: [
                String
            ],
            kr: [
                String
            ],
            krtheme: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Word", WordSchema);