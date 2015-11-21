// Bonfire: Check for Palindromes
// Author: http://www.freecodecamp.com/ohkamanda
// Challenge:
// http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function palindrome(str) {
  // Replace punctuation, change to lower case 
  str = str.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
  // Return true if string is a palindrome
  return str == str.split('').reverse().join('');
}

palindrome("eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
