var request = require('request');

exports.sendGetRequest = function(url){
	return new Promise(function(resolve, reject){
		request(url, function (error, response, body) {
			if(error)
				reject(error);
			else
				resolve(response);
		});
	});
}