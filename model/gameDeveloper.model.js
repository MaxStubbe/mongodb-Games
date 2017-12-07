const mongoose = require('mongoose');

const connection = require('../config/mongo.db')

const Schema = mongoose.Schema;

//gamedeveloper model
const GameDeveloperSchema = new Schema({
    name: String
});

const GameDeveloper = mongoose.model('gamedeveloper', GameDeveloperSchema);

module.exports = GameDeveloper;