const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    Description: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    Ram: {
        type: Number,
        required: true,
    },
    Rom: {
        type: Number,
        require: true,
    },
});
const Mobile = mongoose.model("MobileProducts", productschema);
module.exports = Mobile;