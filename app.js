const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
.options({
    a: {
      demand: true,
      alias: 'address',
      describe:'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude, (error, weatherResults) => {
      if(error) {
        console.log(error);
      } else {
        console.log(`Currently, the temperature is ${weatherResults.temperature} ºF. However, it feels like ${weatherResults.apparentTemperature} ºF.`);
      }
    });
  }
});
