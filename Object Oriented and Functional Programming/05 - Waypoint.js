/*
Waypoint: Make Object Properties Private

Objects have their own attributes, called properties, and their own functions, called methods.

In the previous challenges, we used the this keyword to reference public properties of the current object.

***
We can also create private properties and private methods, which aren't accessible from outside the object.

To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead of creating it as a property of this.
***

This is useful for when we need to store information about an object but we want to control how it is used by outside code.

For example, what if we want to store the speed our car is traveling at but we only want outside code to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way?

In the editor you can see an example of a Car constructor that implements this pattern.

Now try it yourself! Modify the Bike constructor to have a private property called gear and two public methods called getGear and setGear to get and set that value.
*/

var Bike = function() {
	// This creates a private variable
	var gear;
	
	// These are public methods
	this.getGear = function() {
		return gear;
	};
	this.setGear = function() {
		return gear;
	};
};

var myBike = new Bike();
