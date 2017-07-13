"use strict";
class BaseSuite{
	constructor(name){
		this.name = name;
		this.tests = [];
	}

	addTest(test){
		this.tests.push(test);
	}

	executeTests(){
		for(var test of this.tests){
			test.execute(this.name);
		}
	}
}

module.exports = BaseSuite;