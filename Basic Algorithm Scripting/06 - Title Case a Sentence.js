/*
Bonfire: Title Case a Sentence

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.charAt()
http://ironion.com/bonfire-title-case-a-sentence/
*/

function titleCase(str) { // Return str with the first letter of each word capitalized.
	var titleStr = str.split(" ");
	for (var i = 0; i < titleStr.length; i++){
		titleStr[i] = titleStr[i].charAt(0).toUpperCase() + titleStr[i].slice(1).toLowerCase();
	}
  return titleStr.join(" ");
}

titleCase("I'm a little tea pot");