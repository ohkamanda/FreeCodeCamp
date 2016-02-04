/*
Accessing Nested Arrays in JSON

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/accessing-nested-objects-in-json

Retrieve the second tree from the variable myPlants 
using object dot and array bracket notation.
*/

var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1];
