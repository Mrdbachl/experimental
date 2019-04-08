<script>



	/****************************************

	Creating Objects



	1. Object literals

	2. Object.create() with descriptors

	3. function + new

	4. factory function with closures

	5. JS Class



	****************************************/

	let log = console.log;

// 1. Object literals ////////////////////////////////////

/*

	I created an object called myObject and I assigned properties to that object named shape and color. The third property is considered a method because there is

	a function inside it. This would be good if you have one or two objects that you want to call.

*/



let myObject = {

	shape1: 'round',

	color: 'blue',

	showProp3: function () {

		console.log(this.shape1);

	}

}



log(1, myObject);

myObject.showProp3();

log('------------------------------');





// 2. Object.create ////////////////////////////////////

/*

The reason that I would use this type of code block would be because it seems like you can really get detailed in describing your properties. You can also put another function inside an object by using a method.

*/
let log = console.log;
let proto = {

	showProp3: function () {

		console.log(this.shape1);

	}

}

let obj2 = Object.create({}, {

	prop1: {

		writable: true,

		enumerable: true,

		configurable: true,

		value: 'value1'

	},

	prop2: {

		writable: true,

		enumerable: false,

		configurable: true,

		value: 'value2'

	}

});

obj2.prop3 = function () {

	console.log(this.prop1);

}

log(2, obj2);

obj2.prop3();

log('------------------------------');





// 3. new + function ////////////////////////////////////

/*

By using the word "new" before the function, it creates an object if there is no return value in the function. I think this might be the best approach to creating a new object because using the "new" keyword makes it very clear what the objective is and it 
saves time with having to type out a return of an object.

*/
let log = console.log;
let Obj = function (v1, v2) {

	this.prop1 = v1;

	this.prop2 = v2;

	this.prop3 = function () {

		console.log(this.prop1);

	}

}

let obj3 = new Obj('value1', 'value2');

log(3, obj3);

obj3.prop3;

log('------------------------------');





// 4. factory function with closures

/*

If you are not using the keyword "new", then this way of creating an object gives you the ability to write out exactly what it is that you would like to be returned by the function. Variables are created outside of the return and are passed in when the function is called by 
obj4 is the entire function. there is a function also inside prop3, so when obj4 uses prop3 as a method, it returns the value of prop1. This way of doing it can be a little bit confusing because of the initial values and the function inside a function running at the same time. I understand it to look at it and explain it, but I'm not sure that I could blindly write one of these out from scratch, from memory just yet.

*/
let log = console.log;
let ObjFF = function (v1, v2) {

	let _prop1 = v1;

	let _prop2 = v2;

	return {

		prop1: _prop1,

		prop2: _prop2,

		prop3: function () {

			console.log(_prop1);

		}

	}

}

let obj4 = ObjFF('value1', 'value2');

log(4, obj4);

obj4.prop3();

log('------------------------------');





// 5. JS Class

/*

Create a class and then put it into an object that you also create. You could pass values into the class and then run the entire thing and return the values in through the new class the was stuck inside a new object. I'm not sure how this is a better way to write an object, but I think that it might be cool to assign say, animations to the class and have it come through the object. 
*/

let log = console.log;
class ObjC {

	constructor(v1, v2) {

		this.prop1 = v1;

		this.prop2 = v2;

	}

	prop3() {

		console.log(this.prop1);

	}

}

let obj5 = new ObjC('value1', 'value2');

log(5, obj5);

obj5.prop3();

log('-------------------------');


</script>
