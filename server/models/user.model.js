
const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    password: { type: String, required: true, max: 20, min: 5 },
    username: { type: String, required: true, unique: true, max: 20, min: 2 },
    url: { type: String, required: false }

});

module.exports = mongoose.model("users", userSchema);
