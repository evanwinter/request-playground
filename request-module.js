const request = require('request');

const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";

request.get(url, (error, response, body) => {
	let json = JSON.parse(body);
	console.log(
		`City: ${json.results[0].formatted_address} -`,
		`Latitude: ${json.results[0].geometry.location.lat} -`,
		`Longitude: ${json.results[0].geometry.location.lng}`
	);
});

// request.get expects an url as a first argument and a callback as a second argument.
// Working with request is very pleasing. As you can see in the example, request is much more concise than http.get.
// Request is a third party module though and carries 22 dependencies. Now, I wouldn’t consider this a real problem but if your goal is to make just an HTTP GET request, sticking with http.get would be enough to get the job done.
// The request module does not support promises, however it could be “promisified”, for example with util.promisify or even better by using request-promise, a request version which returns promises (and has less dependencies).

