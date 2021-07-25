const request = require('request')


const geocode = (address, callback) => {
    const YOUR_MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZGVhZC1uLXNwZWN0YXRvciIsImEiOiJja3Jpd2JkbGcwazg0Mm5ydmpmem9hbTQ3In0.p-HhBcKknbq62sWU4q6U1g";
    const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${YOUR_MAPBOX_ACCESS_TOKEN}`;

    request({ url: geoCodeUrl, json: true }, (err, response) => {
        if (err) {
            //console.log(err);
            callback("Unable to connect to location service",undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find location, try another search.", undefined)
        } else {
            //console.log(response.body)
            const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];
            const location = response.body.features[0].place_name;
            console.log(location)
            callback(undefined,{latitude, longitude, location});
        }
    
    })

}


module.exports = geocode;


// 6

// 
