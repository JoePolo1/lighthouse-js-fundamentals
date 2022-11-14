const merge = function(array1, array2) {
  for(let i = 0; i < array2.length; i++)  {
    array1.push(array2[i]);
  } array1.sort(); // this sort method works for now because there are no numbers above 10. But in a case where you have a number above 10, sort will need to be further configured. 
  return array1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);