const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url:`https://api.forecast.io/forecast/7ad294199ce3f9eca68c38c2e90e6df3/${lat},${lng}`,
    json: true
  },(error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
}

module.exports.getWeather = getWeather;
