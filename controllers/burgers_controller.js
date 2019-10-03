// Inside the burgers_controller.js file, import the following:
// Express
var express = require('express');
// burger.js
var burger = require('../models/burger.js');


// Create the router for the app, and export the router at the end of your file.
var router = express.Router();


router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsOjbect = {
            burgers: data
        };
        res.render('index', hbsOjbect);
    });
});

router.post('/burgers', function(req, res) {
    burger.insertOne(['burger_name'], [req.body.burger_name], function(data) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({devoured: true}, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;