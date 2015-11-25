// Bonfire: Find the Longest Word in a String
// Author: http://www.freecodecamp.com/ohkamanda
// With help from:
// https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Bonfire-Find-The-Longest-Word-in-a-String
// Challenge:
// http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function findLongestWord(str) {
  var myArray = str.split(" ");
  var maxLength = 0;
  
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].length > maxLength) {
      maxLength = myArray[i].length;
    }
  }
  
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
