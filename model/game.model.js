const mongoose = require('mongoose');
const connection = require('../config/mongo.db')
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: String,
    description: String
});

const Game = mongoose.model('game', GameSchema);

module.exports = Game;