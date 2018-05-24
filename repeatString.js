// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    if(num < 1){
      return "";
    }else if(num == 1){
      return str;
    }
    // repeat after me
    return str + repeatStringNumTimes(str, num-1);
  }
  
  repeatStringNumTimes("abc", 3);