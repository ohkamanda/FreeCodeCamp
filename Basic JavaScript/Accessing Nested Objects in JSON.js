/*
Accessing Nested Objects in JSON

Author: http://ohkamanda.github.io/
Challenge: http://www.freecodecamp.com/challenges/accessing-nested-objects-in-json

Access the myStorage JSON object to retrieve the contents of the glove box. 
Use bracket notation for properties with a space in their name.
*/

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
