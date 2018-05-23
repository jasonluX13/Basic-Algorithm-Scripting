// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    str = str.toLowerCase();
    var str_array = str.split(" ");
    for(i=0; i<str_array.length; i++){
      str_array[i] = str_array[i].charAt(0).toUpperCase() + str_array[i].substr(1);
    }
    str = str_array.join(" ");
    return str;
  }
  
  titleCase("I'm a little tea pot");