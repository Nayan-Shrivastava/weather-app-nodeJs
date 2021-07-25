const request = require('request')
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const search = process.argv[2]


if(!search){
    console.log("Please provide a search key word")
}else{

    geocode(search,(error, data) => {
        if(error){
            return console.log(error);
        }else{
            const { latitude, longitude, location } = data;
            forecast(latitude, longitude,(error, forecastData) => {
                if(error){
                    return console.log(error);
                }else{
                    console.log(forecastData,"in", location)
                }
            });
        }
    })
}





// const YOUR_ACCESS_KEY = "fc2e78fe326022c0971a70c7811918ba"
// const url = `http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=&units=m`;

// // 37.8267,-122.4233
// request({ url, json: true }, (err, response) => {
//     if (err) {
//         console.log("Unable to connect to weather service");
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         //console.log(response.body)
//         //const data = JSON.parse(response.body);
//         console.log(response.body.current.weather_descriptions[0] + '! - It is currently ' + response.body.current.temperature + ' degrees out.');
//     }
// })


