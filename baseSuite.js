// exports.BaseSuite = function(name){
// 	this.name = name;
// 	console.log("constructing baseSuite");
// }

exports.BaseSuite.prototype.print = function(){
		console.log("Hello from baseSuite");
}