//dependencies
var express = require('express');
var router = express.Router();
var db = require('../models');


// sequelize connection from models
var sequelizeConnection = db.sequelize;

// Sync the tables
sequelizeConnection.sync();

// Rendering all burgers from db
router.get('/', function(req, res) {
    db.burgers.findAll().then(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// Create a New Burger
router.post('/burgers/create', function(req, res) {

    // Sequelize Query to add new burger to database
    db.burgers.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function() {
        res.redirect('/');
    });

});



//update boolean - devour a burger
router.put("/burgers/update/:id", function(req, res) {

    db.burgers.findOne({ where: { id: req.params.id } })
        .then(function(devouredBurger) {
            devouredBurger.update({
                devoured: true,
            }).then(function() {
                res.redirect('/');
            });

        });

});


// Export routes
module.exports = router;