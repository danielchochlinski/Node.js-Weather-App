const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const adress = process.argv[2];

if (!adress) {
  console.log("please provide address");
}
console.log(process.argv);

geocode(adress, (error, {latitude, longitude, location} = {} ) => {
  if (error) {
    return console.log(error);
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
