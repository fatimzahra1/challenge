 var request = require('request');
const personalDetails = (req, res, next) => {

const ssn = req.query.ssn

const url = "https://infra.devskills.app/api/credit-data/personal-details/"
const newURl = url+ssn

		 request( newURl, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body)
 });

}
module.exports = {personalDetails};


