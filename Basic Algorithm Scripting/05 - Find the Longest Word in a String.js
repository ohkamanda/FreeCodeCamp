/*
Bonfire: Find the Longest Word in a String
Author: http://www.freecodecamp.com/ohkamanda
Challenge: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string

Return the length of the longest word in the provided sentence.

Your response should be a number.

Helpful Resources: http://ironion.com/bonfire-find-the-longest-word-solution/
*/

function findLongestWord(str) {
	var splitStr = str.split(" "); // split str into an array of substrings
	var longestWord = ""; // used to compare each word and return the longest
	for (var i=0; i < splitStr.length; i++){ // loop through the array
		if (splitStr[i].length > longestWord.length) { // compare the word
			longestWord = splitStr[i]; // assign longest word to longestWord var
		}
	}
	return longestWord.length; // returns the longest word
}

findLongestWord("The quick brown fox jumped over the lazy dog");
