/*
Using Objects for Lookups

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/using-objects-for-lookups

Convert the switch statement into a lookup table called lookup. Use it to
lookup val and assign the associated string to the result variable.
*/

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  return lookup[val];
}

// Change this value to test
phoneticLookup("charlie");
