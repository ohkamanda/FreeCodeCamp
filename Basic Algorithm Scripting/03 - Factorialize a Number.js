/*
Bonfire: Factorialize a Number

Author: http://www.freecodecamp.com/ohkamanda
Challenge: http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Resources Used:
http://natashatherobot.com/factorials-javascript-recursion/
http://ironion.com/bonfire-factorialize-a-number-solution/
https://github.com/Rafase282/My-FreeCodeCamp-Code/

*/

function factorialize(num) {
	var factors = []; // Create an array to hold factors
	for (var i = num; i > 0; i--) { // i = 5; 5>0; decrease i;
		factors.push(i); // Pushes the factors into an array, like [5,4,3,2,1]
	}
	for (var x = num; x > 1; x--) { // x = 5; 5 > 1; decrease x;
		num *= factors[x-1]; // 5 = !5 or 5 * 4 * 3 * 2 * 1
	}
	return num;
}

factorialize(5);

