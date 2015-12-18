/*
Bonfire: Confirm the Ending
Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending
Check if a string (first argument) ends with the given target string (second argument).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
http://ironion.com/bonfire-confirm-the-ending/
*/

function end(str, target) {
// "Never give up and good luck will find you."
// -- Falcor
	if (str.substr(-target.length) == target) {
		return true;
	} else {
		return false; }
}

end("Bastian", "n");