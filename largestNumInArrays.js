// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.


function largestOfFour(arr) {
    // You can do this!
    for(i = 0; i < arr.length; i++){
      var max = arr[i][0];
      for(j = 1; j < arr[i].length;j++){
        if(arr[i][j] > max){
          max = arr[i][j];
        }
      }
      arr[i] = max;
    }
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  