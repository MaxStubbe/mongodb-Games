const mongoose = require('mongoose');

const connection = require('../config/mongo.db')

const Schema = mongoose.Schema;

//gamedeveloper model
const DeveloperSchema = new Schema({
    name: String,
    imagePath: String
});

const Developer = mongoose.model('developer', DeveloperSchema);

module.exports = Developer;