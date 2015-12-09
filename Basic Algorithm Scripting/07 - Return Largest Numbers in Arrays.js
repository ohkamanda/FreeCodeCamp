/*
Bonfire: Return Largest Numbers in Arrays

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
    Comparison Operators
	http://ironion.com/bonfire-return-the-largest-numbers-in-an-array/
	http://wulkan.me/return-largest-numbers-in-arrays/
	https://www.gorkahernandez.com/blog/fcc-bonfire-series-108-return-largest-numbers-in-arrays/
*/

function largestOfFour(arr) {
  var largestArray = []; // create an empty array to hold largest array
  var highestNum = 0; // var that stores the highest number from each array
  // use for to loop through arrays and find highest number in each
  for (i=0; i<arr.length; i++) {
    // finds the highest number using the reduce function
    highestNum = arr[i].reduce(function(a,b) {
      if (a > b) {
        return a;
      } else { return b; }
    });
    largestArray.push(highestNum); // pushes highestNum to largestArray
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
