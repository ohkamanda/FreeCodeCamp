/*
Bonfire: Repeat a string repeat a string

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
http://ironion.com/bonfire-repeat-a-string-solution/
*/

function repeat(str, num) {
  // repeat after me
  if (num<0) {
    return "";
  } else {
    return str.repeat(num);
  }
  return str;
}

repeat("abc", 3);
