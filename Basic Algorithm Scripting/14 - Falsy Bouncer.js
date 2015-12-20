/*
Bonfire: Falsy Bouncer

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer

Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
    Boolean Objects
    Array.filter()
	http://wulkan.me/bonfire-falsey-bouncer/
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean); // uses filter to get rid of false values
}

bouncer([7, "ate", "", false, 9]);