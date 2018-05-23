// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
    str_array = str.split(" ");
    var max_length = 0;
    for(i = 0; i < str_array.length; i++){
      
      if(str_array[i].length > max_length){
        max_length = str_array[i].length;
      }
    }
    
    return max_length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  