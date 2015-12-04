/*
Bonfire: Reverse a String

Author: http://www.freecodecamp.com/ohkamanda
Challenge: http://www.freecodecamp.com/challenges/bonfire-reverse-a-string

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Helpful Resources:
http://ironion.com/bonfire-reverse-a-string-solution/
*/

function reverseString(str) {
	// split() returns an array on which reverse() and join() can be applied
	var newStr = str.split("").reverse().join("");
	return newStr;
}

reverseString("Greetings from Space Camp!");
