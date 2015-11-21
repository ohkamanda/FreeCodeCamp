// Bonfire: Factorialize a Number
// Author: http://www.freecodecamp.com/ohkamanda
// Challenge:
// http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function factorialize(num) {
  if (num <= 1) {
    return 1;        
  } else {
  return num * factorialize(num-1);
  }
}

factorialize(5);
