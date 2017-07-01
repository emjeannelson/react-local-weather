var axios = require('axios');

const IP_API_URL = 'http://ip-api.com/json';

export default function callLocationAPI() {
  return axios.get(IP_API_URL).then(function (res) {
      var location = {
      city: res.data.city,
      country: res.data.country,
      };

      return location;
  }, function (error) {
    throw new Error('Unable to get current location');
  });
};
