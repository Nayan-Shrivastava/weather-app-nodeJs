const path = require('path');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const request = require('request');
const hbs = require('hbs');
const express = require('express');

const app = express();
app.set('view engine', 'hbs');

const publicDir = path.join(__dirname, '../public');
const partialsDir = path.join(__dirname, '../partials');

hbs.registerPartials(partialsDir);

app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        name: 'Nayan Shrivastava',
        title: 'Weather App'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    const { location } = req.query;
    //console.log("location", location)
    if (!location) {
        res.send({
            error: 'Please provide a location'
        });
        return;
    }

    geocode(location, (error, data) => {
        if (error) {
            res.send(error);
            return;
        } else {
            const { latitude, longitude, location: location_res } = data;

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    res.send(error);
                    return;
                } else {
                    res.json({
                        location: location_res,
                        temperature: forecastData
                    });
                }
            });
        }
    });
});

app.get('*', (req, res) => {
    res.send('404 - Ooops! Page not found');
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});

app.get('*', (res, res) => {
    console.log('hello');
});
