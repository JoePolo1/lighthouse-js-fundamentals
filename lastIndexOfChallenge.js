/*
When this function is given an array and a value, it should return the index of the last time the value occurs in the array. 
If the value never occurs, the function should return -1.

do not use the built in function .indexof() in this challenge */


/* ------initial attempt below -----
function lastIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] !== value || i === false) {
      return (1 - 2);
    }
  }
}
--------- end initial attempt ------- */

function lastIndexOf(array, value) {
  let lastIndex = -1; //by default, last index is -1. this only changes if the index equals the value proposed in the function call below
  for (let i = 0; i < array.length; i++) {  // so here, we lop through our array a single time from beginning to end 
    if (array[i] === value) { //since we are looping from beginning to end, the last time that i (index) will equyal value is the last spot it will have in the array's index and will always return the desired result
      lastIndex = i; //lastIndex equals i, so if there is nothing, it defaults to -1. but if there is something, it will land on the last index spot. 
    }
  }
  return lastIndex;
}

//test calls
lastIndexOf([ 0, 1, 4, 1, 2 ], 1);
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);
lastIndexOf([ 5, 5, 5 ], 5);
lastIndexOf([], 3);

//test prints
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);