// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


function reverseString(str) {
    var s = str.split('');
    s.reverse();
    str = s.join('');
    return str;
  }
  
  reverseString("hello");