/*
Bonfire: Seek and Destroy

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
    Arguments object
    Array.filter()
	http://wulkan.me/bonfire-seek-and-destroy/
*/

function destroyer(arr) {
  // Remove all the values
  var newArray = arguments[0];
  var removeArgs = [];
  for (i=1; i < arguments.length; i++){
    removeArgs.push(arguments[i]);
  }
  var final = newArray.filter(function(value){
    return removeArgs.indexOf(value) === -1;
  });
  return final;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
