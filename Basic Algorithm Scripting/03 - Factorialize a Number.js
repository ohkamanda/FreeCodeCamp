/*
Bonfire: Factorialize a Number

Author: http://www.freecodecamp.com/ohkamanda
Challenge: http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

*1 In laymans terms, when you factorialize a number, you are multiplying that number by each consecutive number minus one.

Resources Used:
1 http://ironion.com/bonfire-factorialize-a-number-solution/
2 https://github.com/Rafase282/My-FreeCodeCamp-Code/

*/

/*

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

// This code fails at fcc because: factorialize(0) should return 1. I tried
// adding a while num > 0 but it still fails

// Ok, fixed it:

function factorialize(num) {
	var factors = []; // Create an array to hold factors
		while (num>1) { // do this while num is greater than 1 
			for (var i = num; i > 0; i--) { // i = 5; 5>0; decrease i;
				factors.push(i); // Pushes the factors into an array, like [5,4,3,2,1]
			}
			for (var x = num; x > 1; x--) { // x = 5; 5 > 1; decrease x;
				num *= factors[x-1]; // 5 = !5 or 5 * 4 * 3 * 2 * 1
			}
		return num;
		}
	return 1; // if number is 1 or less, return 1
}

*/

function factorialize(num) {
	if (num <= 1) { // if number is less than or equal to 1, return 1
		return 1;
	} else {
		return num * factorialize(num-1); // I don't really understand this...
		// Still reading about how it works at resource 1 listed above
	}
}

factorialize(5);
