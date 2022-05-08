const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

function exp_app(db) {  // exp_app is a function that receives specified database as parameter and returns the express app
    const app = express();
    app.use(cors());
    app.use(session({
        secret: 'secret',
        saveUninitialized: false,
        resave: false,
        cookie: {secure: false}
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'static')));


    app.get('/', function(request, response) {
        response.send("Page loaded successfully.");
    });

    app.post('/city', function(request, response) {
        let city = request.body.city;
        console.log(`${city} received.`);
        db.getState(city, request, response);
    })

    return app;
}

module.exports = exp_app;