function rot13(str) { // LBH QVQ VG!
  var alpha = [];
  for (var i = 0; i < str.length; i++)
    {
      alpha[i] = str.charCodeAt(i);
    
      if (alpha[i] >= 65 && alpha[i] <= 77)
        {
          alpha[i] = String.fromCharCode(alpha[i] + 13);
        } else if (alpha[i] > 77 && alpha[i] <= 90) {
          alpha[i] = String.fromCharCode(alpha[i] - 13);
        } else {
          alpha[i] = String.fromCharCode(alpha[i]);
        }
    }
  return alpha.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
