const mongoose = require('mongoose');
const connection = require('../config/mongo.db');

const Character = require('./characters.model');
const Developer = require('./developer.model');

const Schema = mongoose.Schema;

//Game model
const GameSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    genres: [String],
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'character'
    }],
    developers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'developer'
    }]
});

const Game = mongoose.model('game', GameSchema);

module.exports = Game;