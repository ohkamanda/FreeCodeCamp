/*
Bonfire: Slash Flick

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-slasher-flick

Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.slice()

    Array.splice()
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slash = arr.slice(howMany);
  return slash;
}

slasher([1, 2, 3], 2);

