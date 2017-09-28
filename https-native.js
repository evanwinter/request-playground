// https://codeburst.io/4-ways-for-making-http-s-requests-with-node-js-c524f999942d

const https = require('https');

const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence"

https.get(url, res => {
	res.setEncoding('utf8');
	let body = '';
	res.on('data', data => {
		body += data;
	});
	res.on('end', () => {
		body = JSON.parse(body);
		console.log(
			`City: ${body.results[0].formatted_address} –`,
			`Latitude: ${body.results[0].geometry.location.lat} – `,
			`Longitude: ${body.results[0].geometry.location.lng}`
		);
	});
});

// https.get expects an url as a first argument and a callback as a second argument. The returned response is an http.ClientRequest object. That means, in order to manipulate the body of the response you have to listen for events: notice the res.on() in the above example.
// *The http.ClientRequest object emits some events that you can listen to. And that’s both good and “bad”: good because you will be tempted to dig further into the Node.js internals to learn more and “bad” because you are forced to do a lot of manipulation if you want to extract the JSON response.
// In the end, working with http.get could be slightly more verbose compared to other libraries but that shouldn’t be necessarily considered a drawback because in the process you will learn more about Node.js internals.