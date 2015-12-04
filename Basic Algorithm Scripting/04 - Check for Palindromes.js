/*
Bonfire: Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Author: http://www.freecodecamp.com/ohkamanda
Challenge: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes
Helpful Resources: (1) http://ironion.com/bonfire-reverse-a-string-solution/
(2) https://github.com/Rafase282/My-FreeCodeCamp-Code


*/

function palindrome(str) {
  var stripStr = str.toLowerCase().replace(/[.,?:;\/() _-]/g, '');
  // converts to lower case, strips out spacing, capitalization and punctuation
  var checkStr = stripStr.split("").reverse().join(""); // reverse stripped string
  return stripStr === checkStr; // if strings match, return true. if not, false.
}

palindrome("eye");
palindrome("not a palindrome");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("race car");
palindrome("never odd or even");
