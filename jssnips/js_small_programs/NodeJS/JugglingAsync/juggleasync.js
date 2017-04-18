var http = require('http');
var bl = require('bl');
var output = [];
var c = 0;

for (var x = 0; x < 3; x++) {
	httpResponse(x);
}

function print() {
	for (var i = 0; i < 3; i++) {
		console.log(output[i]);
	}
}

function httpResponse(indx) {
	http.get(process.argv[2 + indx], response => {
		response.pipe(bl(function (err, data) {
			if (err) {
				console.error(err);
			}
			output[indx] = data.toString();
			c++;

			if (c == 3) {
				print();
			}
		}));
	});
}
