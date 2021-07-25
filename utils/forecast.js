const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const YOUR_ACCESS_KEY = "fc2e78fe326022c0971a70c7811918ba"
    const forecastUrl = `http://api.weatherstack.com/forecast?access_key=${YOUR_ACCESS_KEY}&query=${latitude},${longitude}&units=m`;
    
    request({ url: forecastUrl, json: true }, (err, response) => {
        if (err) {
            callback("Unable to connect to forecast service",undefined);
        } else if (response.body.error) {
            callback("Unable to find location",undefined)
        } else {
            callback(undefined,response.body.current.weather_descriptions[0] + '! - It is currently ' + response.body.current.temperature + ' degrees Celcius out there');
        }
    })

}


module.exports = forecast;


// // 37.8267,-122.4233
// request({ url, json: true }, (err, response) => {

// })