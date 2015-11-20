// Bonfire: Reverse a String
// Author: http://www.freecodecamp.com/ohkamanda
// Challenge: http://www.freecodecamp.com/challenges/bonfire-reverse-a-string
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function reverseString(str) {
  var newStr = str.split("").reverse().join("");
  return newStr;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Space Camp!");
