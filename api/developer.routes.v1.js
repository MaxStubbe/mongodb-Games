var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Game = require('../model/game.model');
var Developer = require('../model/developer.model');

//get api 
//get all developers
routes.get('/developers', function(req, res) {
    res.contentType('application/json');
    Developer.find({})
        .then((developers) => {
            res.status(200).json(developers);
        })
        .catch((error) => res.status(401).json(error));
});

//get api
//get a developer by id
routes.get('/developers/:id', function(req, res) {
    res.contentType('application/json');
    Developer.findById(req.params.id)
        .then((developer) => {
            res.status(200).json(developer);
        })
        .catch((error) => res.status(401).json(error));
});

routes.post('/developers', function(req, res) {
    var new_developer = new Developer({name: req.body.name, imagePath: req.body.imagePath});
    console.log(req.body);
    Game.findById(req.body.gameid)
    .then(game => {
        game.developers.push(new_developer)
        new_developer.save()
        .then(() => {
            game.save()
                .then(res.send("opgeslagen"))
                .catch(error => console.log(error));
            
        })
        .catch(error => console.log(error));
})
.catch(error => console.log(error));
});

routes.put('/developers/:id', function(req, res) {
    
        res.contentType('application/json');
        var id = req.params.id;
    
        var update = { 
            "name" : req.body.name,
            "imagePath" : req.body.imagePath
        };
    
        Developer.findById(id)
            .then( developer => {
                developer.set(update);
                developer.save();
                res.status(200).json(developer);
                
            })
            .catch((error) => res.status(401).json(error));
          
    });


    routes.delete('/developer/:id', function(req, res) {
        var id = req.params.id;
    
        Developer.findById(id)
            .then(developer => { 
                developer.remove();
                res.status(200).send("developer verwijderd");
            })
            .catch(error => res.status(401).json(error));
    });

module.exports = routes;