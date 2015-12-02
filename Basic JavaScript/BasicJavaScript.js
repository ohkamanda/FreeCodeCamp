// Waypoint: Comment your JavaScript Code

// This is a comment!

/* And this is a
comment with multiple lines */

// Waypoint: Understand Boolean Values

/* Modify the welcomeToBooleans function
so that it will return true instead of false */

function welcomeToBooleans() {
	return true;
}

// Waypoint: Declare JavaScript Variables

/* Use the var keyword to create a variable
   called myName. Use camel case. */

var myName = "Amanda";

// Waypoint: Declare String Variables

/*
Now let's create two new string variables: 
myFirstName and myLastName and assign them the values
of your first and last name, respectively.
*/
 
var myFirstName = "Amanda";
var myLastName = "Proctor";
 
// Waypoint: Check the Length Property of a String Variable
 
/* 
Data structures have properties. For example, strings have a property called .length that will tell you how many characters are in the string.

For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

Use the .length property to count the number of characters in the lastName variable. 
*/

var lastNameLength;
lastNameLength = myLastName.length;

// Waypoint: Use Bracket Notation to Find the First Character in a String

/* 
Bracket notation is a way to get a character at a specific index within a string.

Computers don't start counting at 1 like humans do. They start at 0.

For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName. 
*/

var firstLetterOfLastName = myLastName[0];

// Waypoint: Use Bracket Notation to Find the Nth Character in a String

/* 
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable.
*/

var thirdLetterOfLastName = myLastName[2];

// Waypoint: Use Bracket Notation to Find the Last Character in a String

/*
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Use bracket notation to find the last character in the lastName variable.
*/

var lastLetterOfLastName = myLastName[myLastName.length - 1];

// Waypoint: Use Bracket Notation to Find the NthtoLast Character in a String

/* 
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

Use bracket notation to find the second-to-last character in the lastName string.
 */

var secondToLastLetterOfLastName = myLastName[myLastName.length - 2];

// Waypoint: Add Two Numbers with JavaScript

var sum = 10 + 10;
return sum;

// Waypoint: Subtract One Number from Another with JavaScript

var difference = 45 - 33;
return difference;

// Waypoint: Multiply Two Numbers with JavaScript

var product = 8 * 10;
return product;

// Waypoint: Divide One Number by Another with JavaScript

var quotient = 66 / 33;
return quotient;

// Waypoint: Create Decimal Numbers with JavaScript

var myDecimal = 11.11;
return myDecimal;

// Waypoint: Multiply Two Decimals with JavaScript

var product = 2.0 * 2.5;
return product;

// Waypoint: Divide one Decimal by Another with JavaScript

var quotient = 4.4 / 2.0;
return quotient;

// Waypoint: Store Multiple Values in one Variable using JavaScript Arrays
/*
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this: var sandwich = ["peanut butter", "jelly", "bread"].

Now let's create a new array called myArray that contains both a string and a number (in that order).
*/

myArray = ["Amanda",29];
return myArray;

// Waypoint: Nest one Array within Another Array
/*
You can also nest arrays within other arrays, like this: [["Bulls", 23]].

Let's now go create a nested array called myArray.
*/

nestedArray = [["this", "is", "a", "nested"],"array"];
return nestedArray;

// Waypoint: Access Array Data with Indexes
/*
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.

For example:

var array = [1,2,3];

array[0]; //equals 1

var data = array[1];

Create a variable called myData and set it to equal the first value of myArray.
*/

var myArray = [1,2,3];
var myData = myArray[0];

// Waypoint: Modify Array Data With Indexes
/*
We can also modify the data stored in arrays by using indexes.

For example:

var ourArray = [3,2,1];

ourArray[0] = 1; // equals [1,2,1]

Now modify the data stored at index 0 of myArray to the value of 3.
*/

var myArray = [1,2,3];
myArray[0] = 3;
return myArray;

// Waypoint: Manipulate Arrays With pop
/*
Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" variable by performing pop() within a variable declaration.

Any type of data structure can be "popped" off of an array - numbers, strings, even nested arrays.

Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.
*/

var myArray = ["John", 23, ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Waypoint: Manipulate Arrays With push
/*
Not only can you pop() data off of the end of an array, you can also push() data onto the end of an array.

Push ["dog", 3] onto the end of the myArray variable.
*/

myArray.push(["dog",3]);

// Waypoint: Manipulate Arrays With shift
/*
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.
*/

var removedFromMyArray = myArray.shift();
// removedFromMyArray now equals "John"

// Waypoint: Manipulate Arrays With unshift
/*
Not only can you shift elements off of the beginning of an array, you can also unshift elements onto the beginning of an array.

unshift() works exactly like push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Add "Paul" onto the beginning of the myArray variable using unshift().
*/

myArray.unshift("Paul");

// Waypoint: Write Reusable JavaScript with Functions
/*
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName(a, b) {

  return a + b;

}

After writing the above lines in our code, we can then pass values to our function and the result following the return statement will be returned.

For example, we can pass numbers 4 and 2 by “calling” the function later in our code like this: functionName(4, 2).

In this example, the function will return the number 6 as this is the result of 4 + 2.

Create and call a function called myFunction that returns the sum of a and b.
*/

function myFunction(a,b) {
	return a + b;
}

myFunction(10,1.11)

// Waypoint: Build JavaScript Objects
/*
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Here's a sample object:

var cat = {

  "name": "Whiskers",

  "legs": 4,

  "tails": 1,

  "enemies": ["Water", "Dogs"]

};

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Let's try to make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

You can set these object properties to whatever values you want, as long "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.
*/

var myDog = {
	"name": "Charlie Brown",
	"legs": 4,
	"tails": 1,
	"friends": ["Mamma Kitty", "Bella", "Puff"]
};

// Waypoint: Update the Properties of a JavaScript Object
/*
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable.

For example, let's look at ourDog:

var ourDog = {

  "name": "Camper",

  "legs": 4,

  "tails": 1,

  "friends": ["everything!"]

};

Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property:

ourDog.name = "Happy Camper";

Now when we run return ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".

Let's update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder".
*/

myDog.name = "Happy Coder";
(function(z){return z;})(myDog);

// Waypoint: Add New Properties to a JavaScript Object
/*
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

Now when we run return ourDog.bark, we'll get his bark, "bow-wow".

Let's add a "bark" property to myDog and set it to a dog sound, such as "woof".
*/

myDog.bark = "woof woof";

// Waypoint: Delete Properties from a JavaScript Object
/*
We can also delete properties from objects like this:

delete ourDog.bark;

Let's delete the "tails" property from myDog.
*/

delete myDog.tails;

// Waypoint: Iterate with JavaScript For Loops
/*
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

For loops are declared with three optional expressions seperated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evalutes to true. When condition is false at the start of the iteration, the loop will stop executing.  This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true.  We'll increment i by 1 in each loop iteration with i++ as our final-expression.

var ourArray = [];

for (var i = 0; i < 5; i++) {

  ourArray.push(i);

}

ourArray will now contain [0,1,2,3,4].

Let's use a for loop to work to push the values 1 through 5 onto myArray.
*/

var myArray = [];
for (var i=1; i<6; i++) {
	myArray.push(i);
}

// Waypoint: Iterate Odd Numbers With a For Loop
/*
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10.  We'll increment i by 2 each loop with i += 2.

var ourArray = [];

for (var i = 0; i < 10; i += 2) {

  ourArray.push(i);

}

ourArray will now contain [0,2,4,6,8].

Let's change our initialization and final-expression so we can count by odd numbers.

Push the odd numbers from 1 through 9 to myArray using a for loop.
*/

var myArray = [];
for (var i=1; i<10; i+=2) {
	myArray.push(i);
}

// Waypoint: Count Backwards With a For Loop
/*
A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.

We'll start at i = 10 and loop while i > 0.  We'll decrement i by 2 each loop with i -= 2.

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {

  ourArray.push(i);

}

ourArray will now contain [10,8,6,4,2].

Let's change our initialization and final-expression so we can count backward by twos by odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.
*/

var myArray = [];

for (i=9; i>0; i-=2) {
	myArray.push(i);
}

// Waypoint: Iterate with JavaScript While Loops
/*
You can run the same code multiple times by using a loop.

Another type of JavaScript loop is called a "while loop", because it runs "while" something is true and stops once that something is no longer true.

var ourArray = [];

var i = 0;

while(i < 5) {

  ourArray.push(i);

  i++;

}

Let's try getting a while loop to work by pushing values to an array.

Push the numbers 0 through 4 to myArray using a while loop.
*/
var myArray = [];
var i = 0;

while (i<5) {
	myArray.push(i);
	i++;
}

// Waypoint: Generate Random Fractions with JavaScript
/*
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 and 1.

Change myFunction to return a random number instead of returning 0.

Note that you can return a function, just like you would return a variable or value.
*/

function MyFunction() {
	return Math.random();
}

// Waypoint: Generate Random Whole Numbers with JavaScript
/*
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

First, let's use Math.random() to generate a random decimal.

Then let's multiply this random decimal by 20.

Finally, let's use another function, Math.floor() to round the number down to its nearest whole number.

This technique will gives us a whole number between 0 and 19.

Note that because we're rounding down, it's impossible to actually get 20.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

See how Math.floor takes (Math.random() * 20) as its argument? That's right - you can pass a function to another function as an argument.

Let's use this technique to generate and return a random whole number between 0 and 9.
*/

function randomWholeNumber() {
	Math.floor(Math.random() * 10);
}

// Waypoint: Generate Random Whole Numbers within a Range
/*
Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min

Define two variables: myMin and myMax, and set them both equal to numbers.

Then create a function called myFunction that returns a random number that's greater than or equal to myMin, and is less than or equal to myMax.
*/

var myMin = 1;
var myMax = 11;

function randomRange() {
	Math.floor(Math.random() * (myMax - MyMin + 1)) + myMin; 
}

// Waypoint: Use Conditional Logic with If and Else Statements
/*
We can use if statements in JavaScript to only execute code if a certain condition is met.

if statements require some sort of boolean condition to evaluate.

For example:

var x = 1;

if (x === 2) {

  return 'x is 2';

} else {

  return 'x is not 2';

}

Let's use if and else statements to make a coin-flip game.

Create if and else statements to return the string "heads" if the flip variable is zero, or else return the string "tails" if the flip variable is not zero.
*/

var flip = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

function headsOrTails() {
	if (flip === 0) {
		return "heads";
	} else {
		return "tails";
	}
}

// Waypoint: Sift through Text with Regular Expressions
/*
Regular expressions are used to find certain words or patterns inside of strings.

For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi

Let's break this down a bit:

the is the pattern we want to match.

***
g means that we want to search the entire string for this pattern instead of just the first match.

***
i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

Regular expressions are written by surrounding the pattern with / symbols.

Let's try selecting all the occurrences of the word and in the string Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.

We can do this by replacing the . part of our regular expression with the word and.
*/

var test = (function() {
	var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
	var expressionToGetSoftware = /software/gi;
	var expressionToGetAnd = /and/gi;
	return testString.match(expressionToGetAnd).length;
})();(function(){return test;})();

// Waypoint: Find Numbers with Regular Expressions
/*
We can use special selectors in Regular Expressions to select a particular type of value.

***
One such selector is the digit selector \d which is used to retrieve the numbers in a string.

It is used like this: /\d/g.

For numbers this is often written as /\d+/g, where the + following the digit selector allows this regular expression to match multi-digit numbers.

Use the \d selector to select the number of numbers in the string, with + allowing for the possibility of multi-digit numbers.
*/
var test = (function() {
	var testString = "There are 3 cats but 4 dogs.";
	var expression = /\d+/g;
	return testString.match(expression).length;
})();(function(){return test;})();

// Waypoint: Find Whitespace with Regular Expressions
/*
We can also use regular expression selectors like \s to find whitespace in a string.

The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).

The whitespace regular expression looks like this:

/\s+/g

Use it to select all the whitespace characters in the sentence string.
*/

var test = (function(){
	var testString = "How many spaces are there in this sentence?";
	var expression = /\s+/g;
	return testString.match(expression).length;
	}
)();(function(){return test;})();

// Waypoint: Invert Regular Expression Matches with JavaScript
/*
You can invert any match by using the uppercase version of the regular expression selector.

***
For example, \s will match any whitespace, and \S will match anything that isn't whitespace.

Use /\S/g to count the number of non-whitespace characters in testString.
*/

var test = (function(){
	var testString = "How many non-space characters are there in this sentence?";
	var expression = /\S/g;
	return testString.match(expression).length;
	})();
(function() {return test;})();
