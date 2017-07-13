// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

var request = require('request');

// exports.concatArgs = function(){
// 	var msg = "";
// 	for(arg of arguments){
// 		if(Array.isArray(arg)){
// 			for(item of arg)	
// 		}
// 		else if(typeof arg === 'object')
// 			msg += JSON.stringify(arg);
// 		else
// 			msg += arg;
// 	}
// 	return msg;

// }
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