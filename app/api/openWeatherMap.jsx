var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=60d158d9f4fa6edea63082de27f22ab7&units=imperial'

export default function getWeather(lat, lon) {
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&lat=${lat}&lon=${lon}`;

  return axios.get(requestUrl).then(function(res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {

      var weather = {
        temp: res.data.main.temp,
        desc: res.data.weather[0].main
      }

      return weather;
    }
  }, function(error) {
    throw new Error('Unable to fetch data for that location');
  });
}
