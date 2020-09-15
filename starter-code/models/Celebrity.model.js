const { Schema, model } = require("mongoose");

const CelebritySchema = new Schema ({
    name: String,
    ocuppation: String,
    catchPhrase: String
});

module.exports = model("Celebrity", CelebritySchema);