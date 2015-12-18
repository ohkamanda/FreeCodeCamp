/*
Bonfire: Chunky Monkey

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-chunky-monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
http://wulkan.me/bonfire-chunky-monkey/
*/

function chunk(arr, size) {
	var myArray = [];
	var i=0;
	while (i < arr.length) {
		myArray.push(arr.slice(i, i+=size));
	}
	return myArray;
}

chunk(["a", "b", "c", "d"], 2);
