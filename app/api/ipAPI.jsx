var axios = require('axios');

const IP_API_URL = 'http://ip-api.com/json';

export default function getLocation() {
  return axios.get(IP_API_URL).then(function (res) {
      var location = {
      lat: res.data.lat,
      lon: res.data.lon
      };

      return location;
  }, function (error) {
    throw new Error('Unable to get current location');
  });
};
