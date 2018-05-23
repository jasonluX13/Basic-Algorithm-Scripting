// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
// and turn everything lower case in order to check for palindromes.

function palindrome(str) {
    // Good luck!
    var re = '[\W]';
    str = str.toLowerCase();
    str = str.replace(/[\W_]+/g,"");
    var str_array = str.split("");
    console.log(str);
    console.log(str_array.length);
    for( i = 0; i < str_array.length/2; i++){
      if(str_array[i] != str_array[str_array.length-1-i]){
        return false;
      }
    }
    return true;
  }
  
  
  
  palindrome("eye");
  