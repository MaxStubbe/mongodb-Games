var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Game = require('../model/game.model');
var Character = require('../model/characters.model');

//get api 
//get all characters
routes.get('/characters', function(req, res) {
    res.contentType('application/json');
    Character.find({})
        .then((characters) => {
            res.status(200).json(characters);
        })
        .catch((error) => res.status(401).json(error));
});

//get api
//get a character by id
routes.get('/characters/:id', function(req, res) {
    res.contentType('application/json');
    Character.findById(req.params.id)
        .then((character) => {
            // console.log(games);
            res.status(200).json(character);
        })
        .catch((error) => res.status(401).json(error));
});

routes.post('/characters', function(req, res) {
    var new_character = new Character({name: req.body.name, description: req.body.description, imagePath: req.body.imagePath});
    console.log(req.body);
    Game.findById(req.body.gameid)
    .then(game => {
        game.characters.push(new_character)
        new_character.save()
        .then(() => {
            game.save()
                .then(res.send("opgeslagen"))
                .catch(error => console.log(error));
            
        })
        .catch(error => console.log(error));
})
.catch(error => console.log(error));
});

routes.put('/characters/:id', function(req, res) {
    
        res.contentType('application/json');
        var id = req.params.id;
    
        var update = { 
            "name" : req.body.name, 
            "description" : req.body.description,
            "imagePath" : req.body.imagePath
        };
    
        Character.findById(id)
            .then( character => {
                character.set(update);
                character.save();
                res.status(200).json(character);
                
            })
            .catch((error) => res.status(401).json(error));
          
    });


    routes.delete('/characters/:id', function(req, res) {
        var id = req.params.id;
    
        Character.findById(id)
            .then(character => { 
                character.remove();
                res.status(200).send("character verwijderd");
            })
            .catch(error => res.status(401).json(error));
    });

module.exports = routes;