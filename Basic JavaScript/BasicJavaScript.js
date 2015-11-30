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
