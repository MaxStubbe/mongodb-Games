const mongoose = require('mongoose');
const connection = require('../config/mongo.db');

const Character = require('./characters.model');
const GameDeveloper = require('./gameDeveloper.model');

const Schema = mongoose.Schema;

//Game model
const GameSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'character'
    }],
    gameDevelopers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gamedeveloper'
    }]
});

const Game = mongoose.model('game', GameSchema);

module.exports = Game;