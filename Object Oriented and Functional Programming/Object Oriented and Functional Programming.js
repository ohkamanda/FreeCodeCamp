// Waypoint: Declare JavaScript Objects as Variables

var car = {
	"wheels": 4,
	"engines": 1,
	"seats": 6
};

var motorcycle = {
	"wheels": 2,
	"engines": 1,
	"seats": 2
};

// Waypoint: Construct JavaScript Objects with Functions
// Create an object using the constructor function

var Car = function() {
	this.wheels = 4;
	this.engines = 1;
	this.seats = 6;
};

var myCar = new Car();

// Waypoint: Make Instances of Objects with a Constructor Function

myCar.nickname = "Nik";
myCar.turboType = "twin";

// Waypoint: Make Unique Objects by Passing Parameters to our Constructor

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(4,6,1);

// Waypoint: Make Object Properties Private

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };
  this.decelerate = function() {
    speed -= 5;
  };
  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  var gear;  
  this.getGear = function() {};
  this.setGear = function() {};
};

var myCar = new Car();
var myBike = new Bike();

// Waypoint: Iterate over Arrays with map

var oldArray = [1,2,3,4,5];

var timesSeven = oldArray.map(function(val){
	return val * 7;
});

return timesSeven;

// Waypoint: Condense arrays with reduce

var myArray = [4,5,6,7,8];

var singleVal = myArray.reduce(function(previousVal, currentVal) {
	return previousVal + currentVal;
}, 0);

return singleVal;

// Waypoint: Filter Arrays with filter

var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val) {
  return val <= 5;
});

return newArray;

// Waypoint: Sort Arrays with sort

var array = [1, 12, 21, 2];

array.sort(function(a,b) {
  return b - a;
});

return array;

// Waypoint: Reverse Arrays with reverse

var array = [1,2,3,4,5,6,7];

var newArray = array.reverse();

return newArray;

// Waypoint: Concatenate Arrays with concat

var oldArray = [1,2,3];

var concatMe = [4,5,6];

var newArray = oldArray.concat(concatMe);

// Waypoint: Split Strings with split

var string = "Split me into an array";

var array = string.split(" ");

return array;

// Waypoint: Join Strings with join

var joinMe = ["Split","me","into","an","array"];

var joinedString = joinMe.join(" ");

return joinedString;

