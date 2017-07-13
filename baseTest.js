"use strict";
var assert = require('assert');

class BaseTest{
	constructor(name, desc, run){
		this.name = name;
		this.desc = desc;
		this.run = run;
	}
	execute(suiteName){
		//We lose scope of this when we get inside of the mocha functions.
		var name = this.name; 
		var desc = this.desc;
		var run = this.run;
		describe("Suite: " + String(suiteName), function(){
			describe("Test: " + String(name), function(){
				it(String(desc), run);
			});
		});
	}
};

module.exports = BaseTest;