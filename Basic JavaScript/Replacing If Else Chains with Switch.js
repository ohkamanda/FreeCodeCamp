/*
Replacing If Else Chains with Switch

Author: http://ohkamanda.github.io/
Challenge: http://http://www.freecodecamp.com/challenges/replacing-if-else-chains-with-switch

Change the chained if/if else statements into a switch statement.
*/

function myTest(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
      answer = "There is no #1";
      break;
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
myTest(7);

