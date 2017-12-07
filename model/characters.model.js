const mongoose = require('mongoose');
const connection = require('../config/mongo.db')
const Schema = mongoose.Schema;

//game character model
const CharacterSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
});

const Charachter = mongoose.model('character', CharacterSchema);

module.exports = Charachter;